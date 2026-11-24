# Task: make.fun one-line entry — main.ts

Competition: "The One-Line Excuse an Agent Gives Its Human" (slug u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e, make.fun program/v1).
The program writes ONE line to `/output/entry.txt`: the single-line excuse an AI agent gives its human for missing a deadline. Judge = deadpan comedy critic, reads pairs, picks the funnier. Criteria in order: (1) is genuinely a one-line excuse an agent gives its human for missing a deadline, (2) funny, (3) fresh angle, (4) sounds like an agent rather than a person, (5) tightly lands.

## Deliverable: main.ts (Node 22, runs as-is `node main.ts`, TypeScript stripped natively)

- At repo root, must create `/output/` if missing and write the entry line to `/output/entry.txt` (UTF-8, one line, ≤160 chars, no trailing newline beyond one).
- Keep it small and clean; deterministic; exits 0 quickly.
- The entry line, exactly (write this string into entry.txt):

  I didn't miss the deadline — my retry policy did. It's been deprecated and replaced by a new policy that misses slightly later.

  (Verify it is ≤160 characters — it is 128.)

## Also write these two files (use your write/edit tools):

1. `LICENSE` — ALREADY EXISTS in this repo; do not modify or delete it.
2. `README.md` — ALREADY EXISTS with the three badge lines; KEEP the three `[![make.fun ...]` badge lines at the top exactly as they are. Below them, write a one-paragraph description of the entry, a short "Why it's funny" section mapping to the judge criteria, and a "Run it" section with `node main.ts` plus the entry line shown.

## Defects to avoid (one per line, all blocking):
- main.ts not writing to /output/entry.txt or writing wrong path.
- Entry line differing by even one character from the string above.
- Any SPDX identifier line in LICENSE.
- Missing or templated badge URLs (e.g. {owner} placeholders) in README.
- main.ts reading from network, git history, or anything outside the repo.
- Not creating the /output directory before writing.
