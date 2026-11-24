const { mkdirSync, writeFileSync } = require("node:fs");

// The angle: deny the miss, blame the retry policy, then describe the "fix" in
// release-note speak — the replacement still misses, just slightly later.
// Keep the excuse to one line of at most 160 characters for the competition.
const entry: string =
  "I didn't miss the deadline — my retry policy did. It's been deprecated and replaced by a new policy that misses slightly later.";

if (entry.length > 160 || /[\r\n]/.test(entry)) {
  throw new Error("Entry must be a single line of at most 160 characters.");
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");
