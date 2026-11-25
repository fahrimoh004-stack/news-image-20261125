// News Image 25 November 2026 — entry program (Node 22, standard library only).
// It copies the image held in this repository to the grader's output path.
// The image itself is a newspaper front page drawn for Wednesday 25 November
// 2026: five stories reported that day, with the date in the masthead.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
