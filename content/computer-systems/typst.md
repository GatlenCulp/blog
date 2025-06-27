---
title: Typst Review
description: A review after using Typst instead of LaTeX for a month.
draft: false
lang: en
date: 2025-01-30
tags:
  - typesetting
  - typst
  - latex
---

After a month of heavy Typst usage, I wanted to share how it went.

For those who don't know, Typst is a LaTeX replacement with intuitive Markdown-like syntax and built-in programming/scripting. While not as fully featured as LaTeX, it has human-readable syntax, good error messages, excellent defaults, and near-instant render times. I wasn't sure about using it for papers (requires teammate buy-in) or how helpful LLMs would be with a rarer language. I was mainly interested in it for problem sets where better math syntax, default formatting, scripting, and live previews could be powerful.

## Initial Impressions

I've used markdown for problem sets before—it's decent but limited compared to LaTeX. With Typst, I was able to do things not possible in Markdown -- defining functions and variables, doing arithmetic, and using styled solution, problem, and info environments.

The math syntax is fantastic compared to LaTeX—more human readable, faster to write, with fewer formatting issues. I started using a VSCode extension that renders Typst equations to unicode in the editor.

Labels and references are much nicer. The document renders in real time and works better than SyncTeX for navigation. Clicking brings me directly to the specific character in an equation.

The math is beautifully sane: `$ x "is an instance of" y $` puts strings in math with no macros needed, while still allowing Typst functions. Display vs inline happens automatically.

You can import packages and programmatically generate content. They have really nice packages—not LaTeX's breadth, but covering 99% of my use cases.

There's diagramming too. I haven't used TikZ enough to compare with CeTZ for Typst, but the programmatic nature likely helps a ton. You can even import JSON to configure documents.

## After a Month of Heavy Usage

**SO SO SO GOOD.** Writing math and formatting is dirt easy and intuitive. Custom macros and functions are simple to create. Everything renders instantly, debugging is a breeze. The quality, customizability, and flexibility with minimal work is outstanding. Things just work.

I never learned TikZ but picked up CeTZ (Typst's equivalent) easily -- it's powerful and intuitive. Since Typst allows scripting, procedural diagramming with loops and calculations comes naturally. (If I need TikZ, I'll just make it in LaTeX, screenshot, and embed.)

I'd use Typst as a drop-in Markdown replacement if possible. Compared to LaTeX, I prefer it in 99% of cases. I can't imagine many LaTeX features I truly need. In Typst, implementing from scratch is often easier than learning LaTeX's specialized tools. (LLMs change this dynamic somewhat.)

The VSCode extensions are perhaps even better than LaTeX's.

## The Major Pain Point: LLM Integration

My only major complaint: LLMs are awful at Typst code and surprisingly hard to correct. The syntax resembles Markdown enough that they'll use Markdown syntax, or they'll confuse it with LaTeX and use LaTeX macros. These errors are rare and easily fixable.

I can ask LLMs how-to questions, but they're hit-or-miss. Fortunately, Typst documentation—even for third-party packages—isn't LaTeX's hellscape and is easy to understand. Since Typst allows scripting, many packages are written in Typst itself, keeping syntax consistent and APIs rich. You get IntelliSense with function calls showing argument types, descriptions, and usage like Python libraries.

**HOWEVER, LLMs writing Typst math is the ABSOLUTE worst.** They almost always use LaTeX math and constantly mess up even when you explain exactly what's wrong. In agent mode, they read linter errors, change nothing, say "huh that didn't work, let's try again," compile, get errors, and loop. I tried Cursor MDCs and various models (Claude 3.7, o3) with and without extended reasoning—all had this issue. It's so bad I've considered importing a package that lets LLMs write LaTeX math.

This LLM limitation can be good if you want to rely less on AI. I find it more useful to chat with LLMs and manually transcribe notes/solutions into Typst.

## Final Thoughts

Despite LLM integration challenges, Typst has become my go-to for typesetting, mathematical and otherwise. The combination of intuitive syntax, instant rendering, and powerful scripting makes it a joy for problem sets and mathematical documents. While LaTeX still has its place for collaboration and specific use cases, Typst offers a refreshingly modern approach I highly recommend trying.