# Codex brief — Pillar 11 cluster pages, part B (pages 1–5)

Repository: `/home/ubuntu/work/aviantestpro`. Read `docs/codex-brief-quality-pillar-a.md` first for the page
template, originality rules, source policy and hard prohibitions. The pillar page
`/avian-testing-laboratory-quality-validation/` already exists (or is being written in part A). Do not edit it.

## Scope for this run

Create exactly these five flat Astro pages, nothing else. Do not touch the footer, llms.txt, layout, global CSS,
navigation, or any existing page.

1. `src/pages/evaluate-avian-dna-testing-laboratory/index.astro`
2. `src/pages/pcr-assay-validation-avian-samples/index.astro`
3. `src/pages/analytical-vs-diagnostic-sensitivity/index.astro`
4. `src/pages/pcr-positive-negative-controls/index.astro`
5. `src/pages/sample-traceability-chain-of-custody-dna-testing/index.astro`

Each page:
- 1,250–1,650 rendered words in `<main>`; 8–11 H2 sections; exactly 2 tables; one `## Scenario:` section
  (250–350 words) and one `## What we would do` block (70–100 words).
- 5 FAQs as H3 under `## Questions buyers ask`; answers 100+ characters; no FAQPage schema, no `jsonLd` prop.
- `ogType="article"`, author `SENO Avian Genetic Test`, dates `2026-11-22`.
- Backlink to `/avian-testing-laboratory-quality-validation/` in the first two paragraphs, plus 2 sibling
  cluster links and 1–2 of `/bird-dna-test-accuracy-validation/`, `/avian-virus-rt-pcr-test/`, `/faq/`,
  `/contact/` where genuinely relevant. Link to `https://data.aviantestpro.com/quality-control/lab-workflow/`
  on pages 1, 2 and 5 only.
- No Chinese characters, no fabricated numbers or accreditation claims, no copied sentences from the source
  brief, no banned phrases from part A.

## Page 1 — How to Evaluate an Avian DNA Testing Laboratory

- Title: `How to Evaluate an Avian DNA Testing Laboratory | SENO` (<=60; verify)
- H1: `How to Evaluate an Avian DNA Testing Laboratory`
- Angle: a buyer's due-diligence sequence, not a list of generic criteria. Start with a breeder choosing between
  two labs that both claim "PCR testing" and "ISO quality".
- Sections: the two-lab opening; separate capability from evidence; scope (species, sample, test, report);
  method suitability; validation record; QC and controls; sample handling and identity; reporting and failure
  handling; accreditation scope vs certificate; quality system vs test competence; support and turnaround;
  red flags; a weighted decision matrix; scenario; what we would do; questions buyers ask; sources.
- Tables: (1) evidence hierarchy (claim → document to request → what it proves → what it does not),
  (2) weighted scorecard with 8 criteria and example weights.
- Scenario: two quotes for 200 pigeon samples; one lab sends a certificate and a price, the other sends a
  validation summary, control policy, sample ID procedure and a report template. Decide what to ask next and
  why a certificate alone is not enough.
- Sibling links: `/laboratory-accreditation-vs-quality-certification/`,
  `/avian-dna-testing-supplier-evaluation/`.

## Page 2 — PCR Assay Validation for Avian Samples

- Title: `PCR Assay Validation for Avian Samples | SENO`
- H1: `PCR Assay Validation for Avian Samples`
- Angle: what a validation record should contain and how sample matrix changes the question. Avoid a textbook
  glossary; follow one assay from intended use to acceptance criteria.
- Sections: why a published primer set is not a validated test; intended use and claim; sample types
  (feather, blood, swab, tissue, environmental); extraction and inhibition; analytical specificity;
  analytical sensitivity/LOD; precision and repeatability; reproducibility; robustness; interference;
  cutoff determination; acceptance criteria; validation report; post-validation monitoring; limits; scenario;
  what we would do; questions; sources.
- Tables: (1) validation parameter → question answered → typical evidence → common gap;
  (2) sample matrix → pre-analytical risk → validation consequence.
- Scenario: a lab validated a PCR assay on blood but sells feather testing; a client submits degraded feather
  samples. Explain what is missing and what a bridging/sample-specific validation should show.
- Sibling links: `/analytical-vs-diagnostic-sensitivity/`, `/pcr-positive-negative-controls/`.
- Data subsite link: `/quality-control/lab-workflow/`.

## Page 3 — Analytical vs Diagnostic Sensitivity in Avian PCR

- Title: `Analytical vs Diagnostic Sensitivity in Avian PCR | SENO` (<=60; verify)
- H1: `Analytical vs Diagnostic Sensitivity in Avian PCR`
- Angle: a claim-reading page. A high analytical sensitivity number is often used to imply clinical accuracy;
  separate the two with a worked example and a decision rule.
- Sections: two different questions; analytical sensitivity defined; diagnostic sensitivity defined; the
  formula TP/(TP+FN); why LOD is not diagnostic sensitivity; the reference standard problem; spectrum bias;
  sample timing and viral load; sample quality; test cutoffs; pooled samples; prevalence and predictive
  values (brief, no confusion); how to read a sensitivity claim; what to ask for; scenario; what we would do;
  questions; sources.
- Tables: (1) analytical vs diagnostic comparison across question, sample set, metric, main threat, what it
  supports; (2) three worked examples of the formula with different totals, clearly labelled as arithmetic
  illustrations, not laboratory performance data.
- Scenario: a supplier advertises "detects 10 copies" and a breeder interprets it as "99% accurate".
  Walk through why that inference fails and what evidence would support a diagnostic claim.
- Sibling links: `/pcr-assay-validation-avian-samples/`, `/failed-avian-dna-tests/`.

## Page 4 — PCR Positive and Negative Controls in Avian Testing

- Title: `PCR Positive and Negative Controls in Avian Testing | SENO`
- H1: `PCR Positive and Negative Controls in Avian Testing`
- Angle: what each control catches, what it cannot catch, and how a run should be accepted or rejected.
  Written for the person reviewing a lab's SOP, not for a molecular biologist only.
- Sections: why a band or curve is not a result; positive control; negative control; no-template control;
  extraction control; internal amplification control; inhibition control; how many controls per batch; when a
  control fails; invalid vs negative; contamination investigation; control material maintenance; documenting
  acceptance; limitations; scenario; what we would do; questions; sources.
- Tables: (1) control type → failure it detects → failure it misses → typical placement;
  (2) run acceptance matrix (positive/negative/internal control outcomes → run status → action).
- Scenario: a batch shows a late signal in the negative control and strong positives in three samples. Decide
  whether to report, repeat or reject, and what to tell the client.
- Sibling links: `/pcr-assay-validation-avian-samples/`, `/quality-control-high-volume-avian-testing/`.

## Page 5 — Sample Traceability and Chain of Custody in DNA Testing

- Title: `Sample Traceability and Chain of Custody | SENO`
- H1: `Sample Traceability and Chain of Custody in DNA Testing`
- Angle: identity risk from collection to report, with a breeder/pigeon-race dispute example. Distinguish
  traceability, chain of custody, identification and data traceability.
- Sections: the sample-swap problem; four terms that get conflated; unique IDs and label durability; receipt
  and condition records; storage and aliquoting; processing records; data-to-sample linkage; custody
  documentation; when formal chain of custody matters (disputes, insurance, regulatory, resale); photographs
  and seals; audit trail; common breakpoints; a minimum traceability record; scenario; what we would do;
  questions; sources.
- Tables: (1) term → question it answers → evidence; (2) chain-of-custody record fields and why each matters.
- Scenario: a pigeon breeder disputes parentage after a sample was collected by a third party and relabeled
  at a courier office. Trace where identity could break and what records would settle it.
- Sibling links: `/bird-dna-test-report/`, `/failed-avian-dna-tests/`.
- Data subsite link: `/quality-control/lab-workflow/`.

## Output

Follow the page template exactly. Use backtick template literals for `articleHtml`. After writing, run
`npm run build`, then print for each page: word count, H2 count, table count, title length, description length,
CJK count, and the result of a local link check. Report files changed. Do not commit, do not push.
