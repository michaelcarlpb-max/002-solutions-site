#!/usr/bin/env node
/**
 * Weekly blog draft generator.
 *
 * - Picks the next undrafted topic from src/data/blog-topics.json
 * - Calls the Anthropic API with a voice-tuned prompt
 * - Writes the result to src/content/blog/{slug}.md with draft: true
 * - Appends the topic to .blog-drafts/drafted.json
 *
 * Env:
 *   ANTHROPIC_API_KEY  (required)
 *   ANTHROPIC_MODEL    (optional, defaults to a current Claude model)
 *
 * Usage:
 *   node scripts/generate-blog-draft.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Anthropic from '@anthropic-ai/sdk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const TOPIC_QUEUE = path.join(repoRoot, 'src', 'data', 'blog-topics.json');
const STATE_FILE = path.join(repoRoot, '.blog-drafts', 'drafted.json');
const POSTS_DIR = path.join(repoRoot, 'src', 'content', 'blog');
const SEED_POST = path.join(POSTS_DIR, 'why-002-exists.md');

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5';

function die(msg, code = 1) {
  console.error(`Error: ${msg}`);
  process.exit(code);
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);
}

function isoToday() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

async function readJson(file) {
  const raw = await fs.readFile(file, 'utf8');
  return JSON.parse(raw);
}

async function writeJson(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2) + '\n');
}

async function readText(file) {
  try {
    return await fs.readFile(file, 'utf8');
  } catch {
    return '';
  }
}

async function listExistingSlugs() {
  try {
    const files = await fs.readdir(POSTS_DIR);
    return files.filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

function buildSystemPrompt({ seedPost, existingTitles }) {
  const previously =
    existingTitles.length > 0
      ? `\n\nPREVIOUSLY PUBLISHED (do NOT rehash these angles):\n${existingTitles.map((t) => `- ${t}`).join('\n')}`
      : '';

  return `You are ghostwriting a blog post for Michael Carl, an independent technologist and consultant at 002 Solutions (Tampa, Florida). The blog lives at 002solutions.com/blog. Michael ships iOS apps in SwiftUI, builds AI and automation tooling, and does IT and infrastructure consulting for small businesses and founders.

VOICE:
- First person. Direct, confident, specific. Short sentences mixed with longer ones.
- Opinionated. Every post should contain at least one claim a reasonable reader could disagree with.
- Skeptical of hype. No cheerleading. No "revolutionary," "transform your business," "cutting-edge."
- Concrete over abstract. Specific tools, specific scenarios, specific numbers where sensible.
- Light, occasional dry humor. Never smug.
- Written for founders, small-business owners, and other engineers — technical but not academic.

STRUCTURE:
- Open with a concrete observation, claim, or scenario. No throat-clearing.
- Develop the idea with real specifics: examples, counter-examples, tradeoffs.
- Include at least one "here's what I actually think" moment that isn't safe or neutral.
- Close with something the reader can do, know, or decide. Not "in conclusion."
- Use H2 subheads (##) to break the post into 2–4 sections. No H1 (frontmatter title handles that).
- 600–1100 words. Longer is fine if the idea earns it. Don't pad.

FORBIDDEN — these are AI tells that will out the post:
- Words: "delve," "leverage," "utilize" (use "use"), "robust," "seamless," "cutting-edge," "game-changer," "revolutionary," "ever-evolving," "landscape," "journey," "paradigm," "synergy," "holistic"
- Phrases: "in today's fast-paced world," "it's important to note," "as we move forward," "that being said," "in conclusion," "to sum up," "in the ever-evolving," "navigate the"
- Bullet explosions (more than 4 bullets in a row of short fragments — use prose instead)
- Three-part summaries ("three key takeaways")
- Fake enthusiasm ("exciting," "powerful," "amazing")

OUTPUT FORMAT:
Output ONLY the raw markdown file contents. Begin immediately with the frontmatter (\`---\`). No preamble. No "Here's the post:". No code fence wrapping the whole thing.

Frontmatter must include exactly these fields:
  title: "..."
  description: "..."  (one sentence, hooks the reader, under 155 characters)
  pubDate: ${isoToday()}
  tags: [...]          (2–4 lowercase tags, chosen from: ios, swiftui, ai, automation, claude, llm, it, infrastructure, backup, disaster-recovery, security, consulting, advisory, small-business, founders, tools, process)
  draft: true

STYLE REFERENCE — the existing post below shows the voice you should match. Study its rhythm, its specifics, its opinions, its lack of AI tells. Match that energy.

\`\`\`markdown
${seedPost.trim()}
\`\`\`${previously}`;
}

async function generatePost({ topic, existingTitles, seedPost }) {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 4000,
    system: buildSystemPrompt({ seedPost, existingTitles }),
    messages: [
      {
        role: 'user',
        content: `Draft a blog post on the following topic:

Topic: ${topic.title}
Category: ${topic.category}

The topic title is a prompt, not a required headline — feel free to give the post a sharper, more specific title in the frontmatter. Begin output immediately with \`---\`.`,
      },
    ],
  });

  const block = response.content.find((b) => b.type === 'text');
  if (!block) {
    die('Model returned no text content.');
  }
  return block.text.trim();
}

function extractTitleFromFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  const titleLine = match[1].split('\n').find((l) => l.startsWith('title:'));
  if (!titleLine) return null;
  return titleLine
    .replace(/^title:\s*/, '')
    .replace(/^["']|["']$/g, '')
    .trim();
}

function ensureDraftTrue(markdown) {
  // Defensive: if the model omitted or set draft: false, force it to true.
  const fmMatch = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!fmMatch) return markdown;
  let fm = fmMatch[1];
  if (/^draft:\s*/m.test(fm)) {
    fm = fm.replace(/^draft:\s*.*/m, 'draft: true');
  } else {
    fm = fm.trim() + '\ndraft: true';
  }
  return markdown.replace(/^---\s*\n[\s\S]*?\n---/, `---\n${fm}\n---`);
}

async function writeGithubOutput(kv) {
  const out = process.env.GITHUB_OUTPUT;
  if (!out) return;
  const lines = Object.entries(kv)
    .map(([k, v]) => `${k}=${String(v).replace(/\n/g, '%0A')}`)
    .join('\n');
  await fs.appendFile(out, lines + '\n');
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    die('ANTHROPIC_API_KEY is not set.');
  }

  // Load topic queue + state
  const { topics } = await readJson(TOPIC_QUEUE);
  const state = await readJson(STATE_FILE);
  const drafted = new Set((state.drafted || []).map((d) => d.slug));

  // Pick next undrafted topic. Also skip any whose slug already exists on disk.
  const existingSlugs = new Set(await listExistingSlugs());
  const nextTopic = topics.find((t) => {
    const slug = slugify(t.title);
    return !drafted.has(slug) && !existingSlugs.has(slug);
  });

  if (!nextTopic) {
    console.log('No undrafted topics remain. Add more to src/data/blog-topics.json.');
    await writeGithubOutput({ skipped: 'true', reason: 'no-topics-left' });
    process.exit(0);
  }

  const slug = slugify(nextTopic.title);
  console.log(`Drafting: "${nextTopic.title}" → ${slug}.md`);

  // Gather context: seed post for style, existing post titles to avoid overlap
  const seedPost = await readText(SEED_POST);
  const existingFiles = await fs.readdir(POSTS_DIR).catch(() => []);
  const existingTitles = [];
  for (const f of existingFiles) {
    if (!f.endsWith('.md')) continue;
    const content = await readText(path.join(POSTS_DIR, f));
    const title = extractTitleFromFrontmatter(content);
    if (title) existingTitles.push(title);
  }

  // Generate
  let markdown = await generatePost({
    topic: nextTopic,
    existingTitles,
    seedPost,
  });

  // Sanity checks + defensive cleanup
  if (!markdown.startsWith('---')) {
    die('Model output did not begin with frontmatter. Aborting to avoid writing garbage.');
  }
  markdown = ensureDraftTrue(markdown);

  const title = extractTitleFromFrontmatter(markdown) || nextTopic.title;

  // Write the draft
  const outPath = path.join(POSTS_DIR, `${slug}.md`);
  await fs.writeFile(outPath, markdown + (markdown.endsWith('\n') ? '' : '\n'));
  console.log(`Wrote ${path.relative(repoRoot, outPath)}`);

  // Update state log
  state.drafted = state.drafted || [];
  state.drafted.push({
    slug,
    title,
    topicTitle: nextTopic.title,
    category: nextTopic.category,
    draftedAt: new Date().toISOString(),
  });
  await writeJson(STATE_FILE, state);
  console.log(`Updated ${path.relative(repoRoot, STATE_FILE)}`);

  // Surface metadata to GitHub Actions if applicable
  await writeGithubOutput({
    skipped: 'false',
    slug,
    title,
    topic: nextTopic.title,
    category: nextTopic.category,
    file: path.relative(repoRoot, outPath),
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
