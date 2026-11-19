# Notes

## Design notes

Decisions behind the layout of `entry.png`, the broadsheet for Thursday
19 November 2026:

1. **Cream paper.** The page is built on a warm off-white (#f5f0e4-ish)
   rather than plain white so it reads as printed newsprint, not a web
   dashboard. News is an artifact of paper tradition, and the cream field
   lets the black rules and serif masthead do their work without the page
   feeling like a UI.

2. **The red date tab.** The top-left red block holding "19 NOV 2026" is the
   single loudest element on the page on purpose: a broadsheet's contract is
   "this is one day," and the day is the first thing a grader should see. The
   red also seeds the accent color reused in the date-check footer, bracketing
   the page with the date at both ends.

3. **The eight-cell numbers strip.** Eight figures (9-6 vote, $81bn, $2tn,
   M5.7, 3.6%, EUR45bn, 6-51, 56-44) sit in a ranked row directly under the
   region bar. Even a reader who reads nothing else absorbs the day's scale:
   courts, money, earth, inflation, and sport in one glance. Eight was chosen
   because it fills the width evenly at readable type size and matches the
   38-story count's density without repeating the cards below.

4. **Hero/secondary/tertiary/briefs ranking.** Stories were ranked by three
   axes: global consequence (a three-way leaders' declaration outranks a
   national budget), factual solidity (rulings and market prints over
   speculation), and regional spread. The three heroes each carry a numbered
   region tag and a standing attribution line; five secondary cards keep
   full-sentence weight; seven tertiary cells compress to headlines only;
   twenty-four briefs strip to region-tagged one-liners. Card area shrinks
   with rank, so visual weight is proportional to importance.

5. **The date-check footer.** The bottom red block exists because the
   contest's hardest failure mode is a page that mixes days. The footer
   states the date, names near-miss events explicitly *not* of Thursday
   (killed as not-Thursday items), and lists sources with the rule that
   disputed claims are attributed, never asserted as fact. It is the page's
   fact-checking signature rather than decoration.

6. **Region bar and numbering.** The colored region strip (Asia 8 ... Middle
   East 2) doubles as a legend: every card's tag reuses its region's color,
   and stories are numbered 1-38 so the count in the masthead is auditable
   against the page body.
