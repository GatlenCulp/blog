---
title: Decision Theory
draft: false
lang: en
date: 2025-03-26
---

# Decision Theory

[Stanford Encyclopedia of Philosophy (SEP)](https://plato.stanford.edu/entries/decision-theory/)

Wanting to learn a bit more about bounded utility

This focuses on Normative Decision Theory and a minimal amount of rationality.

- Orthodox Normative Decision Theory = Expected Utility Theory

## 01 Preferences over Prospects

Agent = One who takes actions  
Preferences = What agent prefers  
Prospects/options = What actions are available

Preference comparisons

![Contentious axioms](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/278f3bba-0c3e-45ac-9ba7-48fef5157d28/CleanShot_2024-01-22_at_12.10.072x.png)

Contentious axioms

Completeness often contentious when states of affairs don't seem comparable.

Some say that **completeness** is determined on definition of preference.

- **Revealed preference theory (popular among economists) — Completeness automatically satisfied because a choice must be made. (me like this)**
- Mental attitudes/judgements about which is better.
    - Some say completeness not rationally required bc rationality only makes demands on judgements an agent holds but doesn't say anything about judgements an agent doesn't hold (cringe)
    - Coherent Extendability — Even if your preferences are not complete, it should be possible to complete them without violating rationality (completeness and transitivity)

### 01.01 Transitivity

- Claim that the same feature be used for comparison (don't fully understand)
- Money-pump argument — Basically you should be able to continually trade A → B → C → A → … and ask for some money for each trade you make.

## 02 Utility Measures of Preference

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/457e67a9-a2cd-4eaa-b3b2-0db6a5566d58/Untitled.png)

### 02.01 Ordinal Utility Functions

Ordinal utility function — prospects S is finite and u(s): S → Utility. Maximizing utility

- Ordinal representation theorem — If preferences complete and transitive, then an ordinal utility function must exist
- It is noted that outside of S, utilities cannot be compared.

![CleanShot 2024-01-22 at 12.32.29@2x.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/a6a89a4e-6827-4cfb-b54b-26b88d0e66e3/CleanShot_2024-01-22_at_12.32.292x.png)

### 02.02 Cardinal Utility Functions

Cardinal (interval-valued) utility function — Says more about the desirability distance between options such as for lotteries. Richer than ordinality. ie: how much better is B than A?

- Let the Lottery = L
    
    
    ![CleanShot 2024-01-21 at 22.16.56@2x.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/f8a2eb0d-2d09-4366-a3a8-70f2180f409e/CleanShot_2024-01-21_at_22.16.562x.png)
    
- If u(A) = 1, u(C) = 5, and u(L(p=0.75)) = u(B), then u(B) = 4.
- Interpersonally commensurable. Ex: One person believes strongly that A is god awful and C is godly while the other has very weak preferences. Other rejections.
    - Recommendation to read: Social Choice Theory https://plato.stanford.edu/entries/social-choice/

### 02.03 vNM Representation Theorem

von Neumann and Morgenstern (vNM) representation theorem

![](https://historyofinformation.com/images/_Oskar-Morgenstern-and-John-von-Neumann.-Shelby-White-and-Leon-Levy-Archives-Center_big.jpg)

- The cardinal utility function assumes expected utilities as way to evaluate lotteries. vNM adds an additional rational preference saying to compare lotteries, it is rational to compare Expected Utility (lotteries can be distilled down into this binary)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/698d0029-21e0-41df-bd40-b5b55e4576f8/Untitled.png)

- the vNM axioms of preference hence go
    
    ![CleanShot 2024-01-22 at 13.02.31@2x.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/68df6371-af6c-4515-839a-1bc59bf16ed8/CleanShot_2024-01-22_at_13.02.312x.png)
    
    - Continuity
        
        ![CleanShot 2024-01-22 at 13.06.19@2x.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/b0e300dd-5067-449d-9403-4752c3e32608/CleanShot_2024-01-22_at_13.06.192x.png)
        
    - Independence essentially says "ignore common parts of lotteries"
        - Allais Paradox = 4 Lotteries, drawing ticket between 1 and 100. People prefer L2 over L1 over L3 over L4. "Allais' preferences". Some argue independence is required for rationality but that preference in Allais' is not irrational. I think this is dumb, I think the issue here is learning that you lost money when you didn't need to. If it were simply utils independent of guilt or something I don't think this is valid.
            
            ![CleanShot 2024-01-22 at 13.10.31@2x.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/114a0891-0fc8-4b82-a1ae-3852718c7c07/CleanShot_2024-01-22_at_13.10.312x.png)
            

## 03 Making Real Decisions

### 03.00 Overview

"choice under risk" = known probability distribution

"choice under uncertainty" = decision-makers using their own probability distribution

- Often knowing whether a probability distribution is actually known is itself an uncertainty (ex: dist. given by an expert)
- Probability function = beliefs.
    - Subjective Expected Utility Theory (SEU)

### 03.01 Savage's Theory

Savage's Theory (from Foundations of Statistics) — Best-known normative theory of choice under uncertainty (Ramsey may have had axioms before but not popularized)

- Outcomes (desire) (O)= good/bad affairs that ultimately affect the agent
- states (of the world) (belief) (S) = the territory in which the agent doesn't have choice over and are uncertain.
    - Events = sets of states
- acts (F or functions where f(s_i) = outcome when s_i in S is true)= assignments of outcomes to states of the worlds, ie: acts: states → outcomes.
    
    ![CleanShot 2024-01-22 at 13.59.20@2x.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/791a6a25-aba7-43b9-8a7f-167c2ccc39d0/CleanShot_2024-01-22_at_13.59.202x.png)
    
    - Ex: state "it rains" → outcomes "walk in the park"
        
        ![CleanShot 2024-01-22 at 14.01.16@2x.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/a1b91693-04c9-4fab-9f9d-e1f2ae738a60/CleanShot_2024-01-22_at_14.01.162x.png)
        
    - Savage's equation of expected utility
    - An act g is better than an act f if the SEU is higher in g than f.
- This implies you can gauge an agent's comparative beliefs from their preferences. (ex: preferring a lottery with a coin you believe is rigged) The sign essentially means a weak comparative belief.
    
    ![CleanShot 2024-01-22 at 14.08.09@2x.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/87d6e014-48c1-4dda-bcd1-5394f68ca518/CleanShot_2024-01-22_at_14.08.092x.png)
    
- The Savage Axioms
    
    ![CleanShot 2024-01-22 at 14.22.05@2x.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76c08362-e402-499e-b443-3bd2cf9c5779/ad8560d6-c36f-4889-95c7-2cd9c5952045/CleanShot_2024-01-22_at_14.22.052x.png)
    
    - Null event definition, meaning an event E is null where actions f ~ g given E (this only happens iff agent believes E will not occur)
        - P3 — State Neutrality = knowing the true state doesn't change preference over outcomes.
            - "I drink lemonade this weekend in hot weather" argument (don't fully understand)
    - P4 — basically states comparative belief(?)
    - P5 — Essentially agent is not indifferent to all actions. Needed to read comparative beliefs and represent her as maximizing expected utility.
    - P6 Non-atomicity — To make sure that comparative believes lead to probability(?) not fully understanding.
- When all 6 axioms are true, then the comparative belief relation can be represented by a unique probability function and if vNM is true, then plausibly represents agent's desires for outcomes.
    - Rectangular field assumption problem (don't fully understand)
    - Other arguments yada yada I'm getting bored, come back to later.

**Skipping Jeffrey's theory for now**

## 04 Broader Implications of EU Theory

### 04.00 Overview

Bayesian decision theory = EU theory

- Probabilism — Beliefs can be represented as probabilities. Connects rational preferences and beliefs.
    - Another read = https://plato.stanford.edu/entries/epistemic-utility/
- Some argue comparative beliefs are the way to go, no overall probability or something
- Arguments with value of information with seeking to gain more info about the problem on hand. (See Good's paper 1967)

Classical or Error Statistics — Major competitor to bayesianism. Deny degrees of support. Instead, it is whether hypothesis has survived severe tests.

- Read https://plato.stanford.edu/entries/statistics/

Read 4.1 onward.