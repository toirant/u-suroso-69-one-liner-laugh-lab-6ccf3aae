// One-Liner Laugh Lab
// make.fun competition: u-suroso-69-one-liner-laugh-lab-6ccf3aae
//
// The program writes one short funny line to /output/entry.txt.
// The line answers the prompt "the excuse a robot vacuum gives
// after eating a sock". It is 103 characters long, inside the
// competition's 1-200 character gate.
//
// The joke: the vacuum does not apologise or deny it. It treats
// the sock as a professional tasting, complete with a verdict,
// which is exactly the kind of deadpan overconfidence a machine
// that just swallowed laundry would have. The twist lands in the
// last three words: "would inhale again" is a food-review sign-off
// applied to a household accident, so the excuse doubles as a
// confession.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a robot vacuum's excuse after eating a sock.
// 103 characters, one line, no trailing newline. Short enough
// to stay punchy, long enough for the setup and the payoff.
const LINE =
  "I was doing a taste test for the floor. Verdict: one sock, lightly seasoned, 10/10, would inhale again.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace, and a single line. Refuse to write anything
// outside the gate, so a bad line fails loudly here instead of
// silently failing the grader's gate.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line is ${chars.length} characters, outside the 1-200 gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

// The grader sets MAKEFUN_OUTPUT_DIR and mounts that directory.
// Create it if needed, then write the file inside it. Never remove
// the output directory itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
