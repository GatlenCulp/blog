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

I decided to try using Typst for a bit, and I wanted to share how it went after a month of heavy usage.

For those who don't know, Typst is supposed to be a replacement for LaTeX with intuitive syntax closer to Markdown and introduces programming/scripting. It's not as fully featured as LaTeX, but the syntax is very human readable and consistent, gives good error messages, has good defaults, has near-instant render times, and more. I wasn't sure if I'd write any papers in it since doing so requires my teammates using it, and I didn't know how helpful LLMs would be since it's a rarer language. I was mostly interested in it as a way to work quickly on problem sets where better math syntax, better default formatting, scripting, and live previews could be really powerful.

## Initial Impressions

I've used markdown for problem sets before and it's decent but pretty limited compared with LaTeX. Some examples of what I was able to do early on included defining functions and variables, doing arithmetic, and using styled solution, problem, and info environments.

So far I was really liking the math syntax compared with LaTeX -- it's more human readable, faster to write, and has fewer formatting issues. I started using a VSCode extension that renders Typst equations to unicode and inserts that into the editor.

Labels and references are also much nicer. The document renders in practically real time and works better than SyncTeX for clicking on parts of the document. It brings me directly to the specific character in an equation.

Look at this sane math: you can just use `$ x "is an instance of" y $` for having strings in math. No macros needed, but you can still use Typst's normal functions. Display vs inline is done automatically.

You can import packages and make things in the document programmatically. They have some really nice packages as well -- definitely not to the same extent as LaTeX, but covers 99% of my use cases.

Of course there's diagramming, but I haven't used TikZ enough to compare with CeTZ for Typst. But the fact that it's more programmatic probably helps a ton. You can even import JSON and configure the document from that.

## After a Month of Heavy Usage

**SO SO SO GOOD.** Writing math and formatting is dirt easy and intuitive. Making custom macros and functions is super easy. Everything renders instantly and debugging is a breeze. The pure quality, customizability, and flexibility with minimal work is outstanding. Things just work.

I never learned TikZ for diagramming, but I learned a bit about how to use CeTZ, which is the Typst equivalent. It's really easy to use and very powerful. Since Typst already allows for scripting, procedural diagramming with for loops and calculations are also easy. (If I ever need to use TikZ, I might just make it in LaTeX, screenshot, and embed as an image.)

If I could use Typst as a drop-in replacement for Markdown, I'd do so. In relation to LaTeX, I'd prefer using it in 99% of cases. I personally cannot imagine many cases where LaTeX has some feature I need and cannot live without. In Typst, it's probably about as easy to implement from scratch as it is to learn whatever funky tools LaTeX has for that specific use case. (Of course LLMs change this dynamic.)

The VSCode extensions for writing Typst are perhaps even slightly better than the ones for LaTeX.

## The Major Pain Point: LLM Integration

My only major complaint, which is expected, is that LLMs are pretty awful at helping write Typst code and surprisingly hard to correct. The syntax looks close enough to Markdown that it will sometimes use Markdown syntax. Sometimes it confuses Typst code for LaTeX and will attempt using LaTeX macros and formatting. These happen pretty rarely and they're typically minor errors I can easily fix.

I can still ask LLMs questions about how to do things, but they're pretty hit or miss. Luckily, Typst documentation -- even for third-party packages—isn't hellish like LaTeX and is pretty easy to understand. Since Typst allows for scripting, a lot of third-party packages are written in Typst, making the syntax consistent and the API rich. You'll even get Typst IntelliSense when you call functions. It'll tell you the argument types, description, usage, etc., just like when using a Python library.

**HOWEVER, LLMs writing Typst math is the ABSOLUTE worst.** It will almost always use LaTeX math and constantly mess up even if you tell it exactly where it went wrong and what changes to make. Even in agent mode where it reads linter errors, it will change nothing and go "huh that didn't work, let's try again," compiles, gets an error, and loops. I tried Cursor MDCs and various models including Claude 3.7 and o3, both with and without extended reasoning, and they all had this issue. This is so bad I've considered just importing a package that allows LLMs to write LaTeX math.

This inability for LLMs to write good Typst can be a good thing if you want to rely less on LLMs. I have found it more useful to chat with LLMs and transcribe notes/solutions into Typst myself.

## Final Thoughts

Despite the LLM integration challenges, Typst has become my go-to tool for mathematical typesetting. The combination of intuitive syntax, instant rendering, and powerful scripting capabilities makes it a joy to use for problem sets and mathematical documents. While LaTeX still has its place for collaborative work and specific use cases, Typst offers a refreshingly modern approach to document preparation that I highly recommend trying.