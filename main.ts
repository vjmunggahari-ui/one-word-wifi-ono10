// One Word for Your Wi-Fi — entry: "Ghosted" (6 chars).
// The phone clings to a dying network instead of switching: the most
// recognisable home Wi-Fi behaviour, in a single instantly readable word.
import { writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const word = "Ghosted";

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, word, "utf8");

// Read-back self-check: exactly one word, 1-20 chars, no trailing newline,
// no whitespace anywhere, and the entry is the exact word we chose.
const back = readFileSync(outPath, "utf8");
if (back !== word) throw new Error("read-back mismatch");
if (back.length < 1 || back.length > 20) throw new Error("gate: 1-20 chars");
if (/\s/.test(back)) throw new Error("gate: exactly one word");
if (back !== "Ghosted") throw new Error("entry must be Ghosted");
if (back.endsWith("\n")) throw new Error("gate: no trailing newline");
