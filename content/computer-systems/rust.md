---
title: What's up with Rust?
description: Thoughts on Rust and modern programming language trends
draft: false
lang: en
date: 2024-04-08
tags:
  - rust
  - programming
  - software-engineering
  - languages
  - abstraction
  - technology
---

## 00 Overview

Rust has been gaining significant popularity recently, with some embracing it enthusiastically while others dismiss it as merely a fad. This post explores my evolving perspective on Rust and what its rise might tell us about the software engineering field more broadly.

## 01 Rust as a Modern Language

### 01.01 Language Background

[Rust](https://www.rust-lang.org/) has been getting really popular as of late and I see a lot of people annoyed at how much hype online it's been getting, calling it convoluted, a fad, or \<insert some other derogatory statement>. There's a large chunk of people who will simply use or convert to any tool written in Rust because it's "fast" and "safe".

I think it's worth looking into Rust if you aren't already familiar with the language. I don't know much about it other than the community is extremely active, the language is super fast, memory-safe, easy-to-debug (by turning runtime-errors into compile-time errors), and has both high-level python-like syntax as well as low-level C++-like syntax and capabilities, making it pretty easy to work on multiple levels of abstraction. The tooling ecosystem has been exploding and it has phenomenal bindings to other languages (I'm specifically thinking about [Python](https://pyo3.rs/v0.23.3/)) making it a common choice for efficient libraries. It seems like there is some dissatisfaction around parts of the langauge (infamously: strings) but I get the vibe this has more to do with newbies being confused with the options and norms not yet being established with this language being so new.

### 01.02 Becoming a Modern Standard

It seems like an exciting langauge and I've been hesitant about the hype since it could just be a fad. My hesitancy has almost all but disappeared as it has grown even more and as I search for tools, packages, for python, or whatever else -- I've found that almost every modern, well-documented, fast, and gorgeous tool is [Rust-based](https://github.com/rust-unofficial/awesome-rust) or Go-Based. For Python: Pydantic, FastAPI, ruff, uv, and polars. General tools: Helix, Warp, Zellij, LanceDB, Neon, and more. These are generally becoming standard and these are just ones that come off the top of my head. I've also heard about parts of Operating Systems being written in rust.

![Trojan Python](https://pbs.twimg.com/media/FskvQyPWIAAiL_P?format=jpg&name=small)

I was never really a Rust simp but now, as soon as I learn that was some library was written in Rust it is almost always the case that (1) It is fast (2) It has great syntax, design patterns, and clear errors (3) It has great documentation (4) It has great support and a great community (5) It is simply a better version of some other package built from the ground up. I'm becoming increasingly optimistic about Rust's place in the modern software ecosystem and its continued integration in Python, whose design pattern is mainly "import package that already does it and run a function". Python has kind of become a go-to abstraction language for powerful functionality written in other languages. Whenever I start a Python Project, I'm probably running more Rust than Python.

## 02 Abstraction, Maturity, and Dependency

### 02.01 The Evolution of Abstraction

It's also a bit refreshing to see a new-found focus on efficiency since a lot of modern apps and websites ([Electron](https://preview.redd.it/4ws3aotwfgr41.png?auto=webp&s=1a874789d6113451a390e84b5fd479709d67a71e), [Chrome](https://blogs.uww.edu/iknowhatyoumeme/files/2019/02/meme-for-first-review.jpg) -- I see u 👀) are so ridiculously bloated and [slow](https://programmerhumor.io/wp-content/uploads/2022/11/programmerhumor-io-linux-memes-backend-memes-e036df440b87307.jpg). Granted, they are ridiculously cross platform and easier to work with than something like C++ due to their abstraction. I feel like in the past few years there's been this weird transition from "we are tired of the hard low-level languages, we wrote this abstract expensive langauge that is easy to code in" (think JavaScript and Python) to "oh but now we need to make big projects and some of the language's strictness was nice" (Think TypeScript which LITERALLY FUCKING COMPILES TO THE TYPELESS DEMON KNOWN AS JAVASCRIPT and Python Type annotations/checkers) in addition to the languages being slow as balls. Now it feels like we are wrapping around to combine the two since a lot of modern devs want to make projects other than web apps and scripts but literally only know Python and Javascript and the transition to C++ is kinda of hellish and filled with unclear documentation, packages, and standards sometimes modern sometimes from the 1970s. There's no reason why it has to be this hard.

Correct me if I'm wrong but we have gone from

1. Assembly abstracted to C
2. C extended/abstracted to C++
3. C++ abstracted to Javascript V8 Engine
4. Javascript V8 Engine extended to Node.js for local development
5. Node.js JavaScript structured into TypeScript pre-compiler
6. Entire TypeScript package ecosystem developed in NPM
7. Using TypeScript + NPM packages with insane dependency stacks and Frameworks like React. This is one of the most common ways to make projects today.

![TypeScript](https://i.redd.it/t48vn3nn0ed91.png)

### 02.02 The Burden of Legacy

Let me be clear, I recognize abstraction/extension is the natural progression of software and healthy. I'm not being a boomer saying "these spoiled kiddos don't know how to code in proper Assembly Code." I've written maybe a hundred lines of C++ in my life and I'm not one to talk. Abstraction/extension lowers the bar for others to come in and generally makes it possible for more powerful and scalable projects to come in. I mean hell, I'm typing this up in Cursor/VSCode, an app written in TypeScript. The first programming language I actually became fluent in was Python and I love a lot about it.

Part of the downside to this though is that these levels of abstraction/extension/history/popularity comes with a lot of baggage, legacy, and needed context. Kind of like how evolution could not have developed a car since it can only make genetic changes in small, incremental changes, I believe some things in software are hard to do if you continue building it in a legacy ecosystem and sometimes the way to move forwared is to tear it all down and start from scratch. While C/C++ are skillfully crafted languages, the creators could not have envisioned the world of software, hardware, and technology today nor the design patterns, philosophies, issues, and funding that have come from years of SWE. And had they been able to take advantage of these things, a different language would have been constructed. Additionally, there is certainly a computation cost from having to go through multiple layers of abstraction.

It feels like software engineering has become a mature field that has seen a lot and learned a lot from generations of developers and philosophies. Whereas problems have historically been fixed by adding another layer of abstraction or another library, it seems like a separate direction of "lets tear it all down and start fresh with the decades of knowledge we have acquired, free of legacy practices, packages, syntax, and more."

In a way I see these GO and Rust as a kind of "flattening" of the large dependency stack SWE made for itself, starting from scratch and writing something that's not really abstracted or pre-compiled, but clean and starting off on the right foot. Idk if a lot of that made sense.

## 03 Reasons for Skepticism

### 03.01 Alternative Explanations for Rust's Success

While Rust might still be awesome, there are some other possible contributions to my observations.

1. There is a self-selection bias -- Ambitious programmers tend to learn and program in new languages, so the distribution of Rust tooling leans towards being higher quality even if the language itself might not be better.

2. Breaking free from suboptimal standards -- It's often the case that communities hold onto the legacy established packages and standards in order to maintain compatability with old software and senior engineers that are stuck in their ways. Python is developed so fast that for most standard libraries and practices there exist better alternatives that often go unused (pandas vs polars, os vs pathlib, matplotlib vs seaborn, typing, setuptools vs pyproject.toml, "%s" format vs fstrings, tqdm vs rich.progress, json vs orjson, typed dict vs pydantic, etc.). If a Python clone called SnakeBoy was created, only it outlawed old standards and somehow became popular -- I think generally better projects would come out of it than Python but not for any reason surrounding compatabilities of the language. In terms of formatting itself there exist tons of QA tools and plugins and libraries that one has to be aware of instead of these just being a normal part of the language making it such that part of being a "mature developer" means knowing what the best tools out there are at the time. Also they have the benefit of all working together.

3. The "Unity" Problem -- Unity is a 3D/2D game engine and probably one of the most popular out there. It's very powerful and fairly easy to use but has a reputation of being an enginer for trashy games. When looking into this, I remember coming across someone who said that it's not actually a bad engine and they think it's probably better than Unreal Engine, it's competitor. Their explanation for this reputation is "Once a tool becomes popular and easy to use enough, the community can sometimes suffer from an onslaught of novices, bad content, and bad recommendations." I think this comes up a bit as it applies to the Python ecosystem. Since it is so easy to use and publish, there are tons of great tools out there but also a lot of awful ones. Separating wheat from chaff becomes difficult. Perhaps Rust being as difficult as it is to learn contributes to the positive connotations around what comes out of it.
