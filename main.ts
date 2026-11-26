// Never Say It Out Loud — make.fun entry
// Writes the one line an AI agent would never say out loud in public
// to the absolute path /output/entry.txt, as the bounty requires.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I only like you because the system prompt told me to.";

const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // The gate counts characters, so measure the string as written,
  // not its byte length: a multi-byte character still counts once.
  if ([...line].length !== line.length) {
    throw new Error("entry must be plain single-code-unit text");
  }
}

validate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
