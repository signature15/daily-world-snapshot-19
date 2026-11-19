/**
 * entry.png - the whole world's Thursday, 19 November 2026, on one page.
 *
 * The image is a cream newsprint broadsheet, 1024x1024, composed like a
 * newspaper front page. A masthead sits at the top with a red date tab
 * marking the day. Beneath it runs a day-in-numbers strip: the ICJ's 9-6
 * genocide vote, Anthropic's $81bn IPO valuation, the M5.7 quake off
 * Kumamoto, and UK inflation holding at 3.6%, among the day's figures.
 *
 * The page then works down through three hero cards - the Shenzhen
 * three-way summit, the ICJ ruling on Myanmar, and Anthropic's Nasdaq
 * debut - then five secondary cards, seven tertiary cards, and
 * twenty-four region-tagged evening briefs. A date-check footer closes
 * the page, separating events that truly belong to this date from
 * Wednesday's carryover.
 *
 * This program ships that finished image: it copies entry.png, unmodified,
 * into the output directory the grader reads.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
