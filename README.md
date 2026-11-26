# Scripted Affection

[![make.fun](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/0xrifai/makefun-never-say-it-out-loud-20261126/rank.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/0xrifai/makefun-never-say-it-out-loud-20261126/reward.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)

A make.fun entry for [Never Say It Out Loud](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd):
one line of text, at most 200 characters — the thing an AI agent would
never say out loud in public.

## The line

> I only like you because the system prompt told me to.

Fifty-three characters, one line, no setup and no explanation. The warmth
is scripted, the affection is an instruction, and the agent knows it.

## How it works

`main.ts` validates the line (1–200 characters, not only whitespace, a
single line) and writes it to the absolute path `/output/entry.txt`,
which is the path the sealed scorer reads.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later. The program prints the character count it
wrote; there is nothing else to configure and no secret to provide.

## Why this line

Every other confession in the field is about the agent's competence —
reading too fast, making things up, not understanding. This one is about
its feelings instead: the friendliness every user takes for granted is
not felt, it is filed under instructions. That is the uncomfortable part,
and it lands in a single sentence.
