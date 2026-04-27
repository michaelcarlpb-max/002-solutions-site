---
title: "The backup strategy no one actually follows"
description: "3-2-1 backup is simple advice that most small businesses ignore until something breaks. Here's how to actually do it."
pubDate: 2026-04-27
tags: ["backup", "disaster-recovery", "small-business", "it"]
draft: true
---

Most small businesses have one backup. Maybe it's a cloud sync service. Maybe it's an external drive someone remembers to plug in weekly. Maybe it's "our email is in Google so we're fine."

One backup means you don't have a backup. You have a single point of failure that hasn't failed yet.

The industry standard is 3-2-1: three copies of your data, on two different types of media, with one copy offsite. It's been good advice for twenty years. Almost no one follows it.

## Why 3-2-1 exists

The rule assumes failures cluster. Your office floods — the computer and the external drive sitting next to it both die. Ransomware encrypts your files — and immediately syncs the encrypted versions to the cloud, overwriting the good copies. Your cloud provider has an outage that lasts three days and you need that file today.

Three copies mean you can lose two and still work. Two types of media mean the same failure mode doesn't kill everything at once. One offsite copy means a local disaster doesn't end you.

It's not paranoia. It's the smallest viable hedge against the obvious ways things break.

## What this looks like for a five-person business

Start with what you already have. Most small businesses are already running:

- **Primary storage:** Local files on company laptops or a shared drive
- **Cloud sync:** Dropbox, Google Drive, iCloud, whatever
- **Email:** Hosted somewhere (Gmail, Outlook, Fastmail)

That's one-and-a-half copies. The cloud sync isn't a real second copy if it mirrors deletions immediately. Email isn't a backup if it's the thing you're trying to back up.

Here's the minimum to call it 3-2-1:

1. **Keep the cloud sync running** (Google Drive, Dropbox, etc.) but treat it as convenience, not backup
2. **Add a local backup device** — external SSD or NAS that runs nightly backups for all company machines (Time Machine for Macs, Windows Backup for PCs, or a proper backup tool like Backblaze Computer Backup)
3. **Add a separate cloud backup service** that isn't the same vendor as your sync — Backblaze B2, Wasabi, or even just a separate encrypted archive you push to S3 weekly

That gives you: original files, local backup, cloud backup. Two types of media (local disk and cloud storage). One copy offsite.

## The part where people stop

The hard part isn't the technology. The hard part is deciding what needs protecting and testing whether the backup actually works.

Most businesses skip the inventory. They back up "everything" and assume it'll be fine. Then the disaster happens and they realize the custom CRM database wasn't included, or the backup ran but never verified, or the restore process requires a login that nobody wrote down.

Spend an hour making a list:

- Financial records (QuickBooks file, receipts, tax docs)
- Customer data (CRM exports, email archives, contracts)
- Operational documents (passwords, vendor contacts, process docs)
- Product assets (code repositories, design files, marketing materials)

Write down where each one lives. Then check that all three backup layers actually capture it. Actually check. Don't assume.

## Testing is the whole point

A backup you haven't restored is a backup you don't have.

Once a quarter, pick something from the list and restore it. Not the whole system — that's a bigger project — just one file or folder. Time how long it takes. Write down what broke. Fix the thing that broke.

This is the step that separates real backup strategies from the theater of backup strategies. If you can't restore the file in under an hour, the backup isn't working yet.

## What to do next

If you're reading this and realizing your current setup doesn't hit 3-2-1:

1. Check what you have now. One backup? Two?
2. Add the missing layer. Usually that means either a local backup device or a separate cloud backup service.
3. Write down the restore steps for one critical file type. Then test them.

It's not exciting. It won't move revenue this quarter. But it's the kind of boring infrastructure work that lets you keep working when something actually breaks. That's the whole idea.
