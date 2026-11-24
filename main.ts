import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star for Monday: 214 unread emails by 9 a.m., a meeting about the next meeting, and coffee that gave up before I did.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
