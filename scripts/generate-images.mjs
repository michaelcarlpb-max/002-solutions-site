import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const logoPath = path.join(root, 'public', 'logo.png');
const publicDir = path.join(root, 'public');

console.log('Generating favicons...');
await sharp(logoPath).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
await sharp(logoPath).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
await sharp(logoPath).resize(48, 48).png().toFile(path.join(publicDir, 'favicon-48x48.png'));
await sharp(logoPath).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(logoPath).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));
await sharp(logoPath).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));
console.log('  favicon-16x16.png, favicon-32x32.png, favicon-48x48.png');
console.log('  apple-touch-icon.png (180x180)');
console.log('  icon-192.png, icon-512.png');

console.log('\nGenerating OG image (1200x630)...');

const logoForOg = await sharp(logoPath)
  .resize(320, 320, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3A8A3E"/>
      <stop offset="100%" stop-color="#F5C518"/>
    </linearGradient>
    <radialGradient id="glow" cx="92%" cy="10%" r="55%">
      <stop offset="0%" stop-color="#F5C518" stop-opacity="0.28"/>
      <stop offset="55%" stop-color="#3A8A3E" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#0A0E1A" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#0A0E1A"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <rect x="60" y="60" width="1080" height="510" fill="none" stroke="#FFFFFF" stroke-opacity="0.10" stroke-width="1" rx="6"/>

  <g transform="translate(520, 155)">
    <text x="0" y="0" font-family="'Segoe UI', 'SF Pro Display', system-ui, sans-serif" font-size="22" font-weight="600" fill="#F5C518" letter-spacing="5">// 002 SOLUTIONS</text>

    <text x="0" y="85" font-family="'Segoe UI', 'SF Pro Display', system-ui, sans-serif" font-size="54" font-weight="700" fill="#FFFFFF">Practical technology,</text>
    <text x="0" y="150" font-family="'Segoe UI', 'SF Pro Display', system-ui, sans-serif" font-size="54" font-weight="700" fill="#FFFFFF">built by someone who</text>
    <text x="0" y="215" font-family="'Segoe UI', 'SF Pro Display', system-ui, sans-serif" font-size="54" font-weight="700" fill="url(#textGrad)">actually ships.</text>

    <line x1="0" y1="280" x2="80" y2="280" stroke="#F5C518" stroke-width="2"/>

    <text x="0" y="320" font-family="'Segoe UI', 'SF Pro Display', system-ui, sans-serif" font-size="20" font-weight="500" fill="#9CA3AF">iOS  ·  AI  ·  Backup  ·  Advisory</text>

    <text x="0" y="395" font-family="'Segoe UI', 'SF Pro Display', system-ui, sans-serif" font-size="17" font-weight="500" fill="#9CA3AF" letter-spacing="4">002SOLUTIONS.COM</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: logoForOg, left: 120, top: 155 }])
  .png({ quality: 92 })
  .toFile(path.join(publicDir, 'og.png'));

console.log('  og.png (1200x630)');

console.log('\nDone.');
