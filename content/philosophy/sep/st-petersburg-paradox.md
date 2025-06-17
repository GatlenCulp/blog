---
title: St. Petersburg Paradox
draft: false
lang: en
date: 2025-03-26
tags:
  - decision-theory
  - probability
  - expected-utility
  - paradox
  - rationality
  - infinite-series
  - philosophy
  - economics
---

[Stanford Encyclopedia of Philosophy (SEP)](https://plato.stanford.edu/entries/paradox-stpetersburg/)

## 01 Game Description

St. Petersburg game — Fair coin flipped until it comes up heads on the nth flip. Player wins \(2^n\). How much should one be willing to bet?

- Decision theorists say maximum expected value, but the value is infinite, so you should pay any finite fee.
- Cramer claimed that there is decreasing marginal utility (actual first mention of decreasing marginal utility!!!!)
  - Even if decreasing, you could change it to the modern version by adding far more money such that it is \(2^n\) units of utility

## 02 Paradox Formalization

1. The amount of utility it is rational to pay for playing (or selling the right to play) the St. Petersburg game is higher than every finite amount of utility.
2. The buyer knows that the actual amount of utility he or she will actually receive is finite.
3. It is not rational to knowingly pay more for something than one will receive.

Hajek and some others claim it isn't a paradox. Didn't fully understand. Hajek seems cool tho, was on 80000 hours. Wrote on probability and philosophy

## 03 Unrealistic Assumptions

- Say the person offering is a liar because he doesn't have an indefinitely large bank (tho even if non-zero it is infinite expectation)
- Some other stuff as well about the realistic nature. Just imagine Nozick's Experience Machine (or time in heaven)
- I would also say that time plays a massive factor as does Brito
  - Could say it is a super task which was done in the past or smthn (don't understand, still physical limit)
  - Also way to define it continuously with a dart board. Didn't understand this either

## 04 Bounded Utility Function

![Bounded Utility Function](/assets/images/st-petersburg/utility-function.png)

- Me likey this notation for decision theory
- **Continuity Axiom. This entails no object can have infinite value. Because if C was infinite, then the lottery is always preferred to any finite value B. Seems pretty good, "it would be meaningless to talk about utility if we reject the continuity axiom"**
  - **Visit Luce 1959 and Skala 1975 to see instances of utility theory which this does not exist.**

## 05 Negligible Probabilities

Could say "ignore low probabilities"

> To arrive at a suitable threshold value, [Buffon] notes that a fifty-six year old man, believing his health to be good, would disregard the probability that he would die within twenty-four hours, although mortality tables indicate that the odds against his dying in this period are only 10189 to 1. Buffon thus takes a probability of 1/10,000 or less for an event as a probability which may be disregarded. (Dutka 1988: 33)

- this is mighty cringe.
- Also ignores the probability of any arrangement of 52 cards as being completely improbable even though one emerges.
- Rationally negligible probabilities (RNP) — Basically ignore all possibilities with probability p. Mega cringe.
  - Depending on the number of possibilities with that probability, a million million-in-one chance add up.
  - Probabilities don't sum to one.
  - Instead you could use a weighing function such as \(r(p) = p^2\), this way you don't ignore low outcomes. (but similar to decreasing marginal utility, you can just increase the amount)

## 06 Relative Expected Utility Theory (REUT)

- Petrograd game = St. Petersburg + \(1\) (both are infinite, though petrograd obviously better) (petrograd+ can be PB + \(2\))
- Or Petrogradskij game = petrograd but st.petersburg - \(1\) on 100th flip (not strictly better like petrograd, but obviously better)
- Some theory of rationality should be able to say why one is better than the other
  ![REUT Comparison](/assets/images/st-petersburg/reut-comparison.png)
  - This still doesn't account for the differences between Leningrad and Leningradskij games (-skij obviously later) (SP = Saint Petersberg Game), which comes out to undefined when compared
    ![Leningrad Comparison](/assets/images/st-petersburg/leningrad-comparison.png)
  - vis-a-vis means in relation to or with regard to
  - Bartha's Theory: relative utility = x compared to y with baseline z (kind of like a voltage/potential) \(U(x,y;z) = \frac{u(x)-u(z)}{u(y)-u(z)}\)
    - But sometimes doesn't select strictly better games.
- Also the Moscow game problem, where the coin is not fair but 0.4 heads, leading to longer streaks. Stochastically dominates SP.

## 07 Pasadena Game

Pasadena Game — SP but alternating series = 0.5 ln(2) (alternating harmonic series, conditionally convergent series)

- **Riemann rearrangement theorem — Any conditionally convergent infinite series can be rearranged to converge to any finite number or to +inf or -inf (wtf this doesn't sound right)**
  - This seems super arbitrary.
- Altadena game — Pasadena + \(1\), still obviously higher.
- Strong and Weak Expected Utility Principle (based on strong/weak LLN)
  - Strong — Average utility converges to expected utility as iterations go to inf
  - Weak — A sufficiently large set of trials, the probability can be made arbitrarily small such that the average utility will not differ from expected utility by more than some small amount (finite LLN + error)
    ![LLN Comparison](/assets/images/st-petersburg/lln-comparison.png)
    I don't understand this. Also apparently the distinction may not be important if not probabilistic or smthn.
- This shows up everywhere

[Further Reading: Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/paradox-stpetersburg/)
