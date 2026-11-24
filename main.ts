// One-Line Roast: The Gadget You Use Every Day
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// Creative process (creative-director skill, phases 1-4):
// Insight: the user loves their phone but every night the charger cable
// only connects at one exact angle -- a concrete, daily, first-person
// gripe, annoyed but fond, not a generic "battery dies" complaint.
// Candidates considered (12): phone dies at 4pm; app asks for a rating
// before opening; smart kettle wants a firmware update; battery dramatic
// at 20% then survives an hour at 1%; fingerprint fails after washing
// hands; Face ID fails every morning; left earbud dies at 47% while the
// right one soldiers on; autocorrect renames people; storage full at the
// exact moment of a photo; auto-brightness flickers in the sun; snooze
// until late then blaming the alarm; charger cable at one exact angle.
// The first three are the brief's own examples, so they were discarded
// as saturated. The cable angle won the specificity test: swap in any
// other gadget and the joke collapses -- it only works for a charger
// cable, and "defusing a bomb" is a fresh, instantly visual comparison
// that lands on first read.
//
// Deterministic: this program always writes the exact same line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My charger only works if I bend the cable at one exact angle, so every night I plug my phone in like I'm defusing a bomb.";

// Gate guard: the entry must be 1-200 characters, not whitespace only.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Roast line must be 1-200 characters, got ${LINE.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
