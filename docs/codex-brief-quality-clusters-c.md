# Codex brief — Pillar 11 cluster pages, part C (pages 6–10)

Repository: `/home/ubuntu/work/aviantestpro`. Read `docs/codex-brief-quality-pillar-a.md` first for the page
template, originality rules, source policy and hard prohibitions. Read `docs/codex-brief-quality-clusters-b.md`
only if you need the shared cluster format; do not edit its pages or the pillar.

## Scope for this run

Create exactly these five flat Astro pages, nothing else. Do not touch the footer, llms.txt, layout, global CSS,
navigation, or any existing page.

1. `src/pages/failed-avian-dna-tests/index.astro`
2. `src/pages/bird-dna-test-report/index.astro`
3. `src/pages/laboratory-accreditation-vs-quality-certification/index.astro`
4. `src/pages/avian-dna-testing-supplier-evaluation/index.astro`
5. `src/pages/quality-control-high-volume-avian-testing/index.astro`

Each page:
- 1,250–1,650 rendered words in `<main>`; 8–11 H2 sections; exactly 2 tables; one `## Scenario:` section
  (250–350 words) and one `## What we would do` block (70–100 words).
- 5 FAQs as H3 under `## Questions buyers ask`; answers 100+ characters; no FAQPage schema, no `jsonLd` prop.
- `ogType="article"`, author `SENO Avian Genetic Test`, dates `2026-11-22`.
- Backlink to `/avian-testing-laboratory-quality-validation/` in the first two paragraphs, plus 2 sibling
  cluster links and 1–2 of `/bird-dna-test-accuracy-validation/`, `/avian-virus-rt-pcr-test/`, `/faq/`,
  `/contact/` where genuinely relevant. Link to `https://data.aviantestpro.com/quality-control/lab-workflow/`
  on pages 6, 7 and 10 only.
- No Chinese characters, no fabricated numbers or accreditation claims, no copied sentences from the source
  brief, no banned phrases from part A.

## Page 6 — Failed Avian DNA Tests: Causes and Next Steps

- Title: `Failed Avian DNA Tests: Causes and Next Steps | SENO`
- H1: `Failed Avian DNA Tests: Causes and Next Steps`
- Angle: a failure is a result about the process, not automatically a verdict on the laboratory. Teach the
  reader to classify the failure before switching suppliers.
- Sections: the message that says "failed"; pre-analytical vs analytical vs post-analytical failure;
  rejection vs extraction failure vs inhibition vs invalid controls vs inconclusive vs insufficient signal;
  what the report should state; the investigation sequence; sample-side causes; laboratory-side causes;
  repeat policy and who pays; corrective action and preventive action; when a repeat is not enough;
  switching labs; communication template; scenario; what we would do; questions; sources.
- Tables: (1) failure category → typical signal → first question → usual next step;
  (2) responsibility split between client, courier and laboratory.
- Scenario: 12 of 40 feather samples fail extraction; the client wants to change labs. Separate batch-level
  from sample-level causes, identify what the lab must show, and decide the next batch design.
- Sibling links: `/sample-traceability-chain-of-custody-dna-testing/`, `/bird-dna-test-report/`.
- Data subsite link: `/quality-control/lab-workflow/`.

## Page 7 — What a Bird DNA Test Report Should Contain

- Title: `What a Bird DNA Test Report Should Contain | SENO`
- H1: `What a Bird DNA Test Report Should Contain`
- Angle: a report is the only durable evidence most clients receive. Read it as an auditor would, not just the
  result line.
- Sections: the result is the shortest part; client and sample identifiers; test name and intended use;
  method and target; result terminology; interpretation and limitations; reference range or cutoff; controls
  and run validity; dates; laboratory identity and authorization; page integrity and versioning; amendments
  and corrections; raw data and traceability; what a report should not claim; a pre-acceptance checklist;
  scenario; what we would do; questions; sources.
- Tables: (1) report element → why it matters → what to check; (2) result wording → meaning → what it does
  not mean.
- Scenario: a breeder receives a one-line "Positive" PDF with no sample ID, method, cutoff or limitation.
  Decide what can be relied on, what to request, and whether the result is usable in a dispute.
- Sibling links: `/sample-traceability-chain-of-custody-dna-testing/`, `/failed-avian-dna-tests/`.
- Data subsite link: `/quality-control/lab-workflow/`.

## Page 8 — Laboratory Accreditation vs Quality Certification

- Title: `Laboratory Accreditation vs Quality Certification | SENO`
- H1: `Laboratory Accreditation vs Quality Certification`
- Angle: buyers treat ISO logos as interchangeable. Separate accreditation, certification and test-specific
  competence, and show how scope changes the answer.
- Sections: three different claims; what accreditation usually means; what certification usually means;
  ISO/IEC 17025 vs ISO 9001; the accreditation body and scope; reading a scope document; what a certificate
  proves and does not prove; expiration, suspension and change of scope; avian-specific accreditation
  (AAVLD as an example, without implying SENO holds it); how to verify a claim; supplier claims; scenario;
  what we would do; questions; sources.
- Tables: (1) accreditation vs certification vs internal quality program across awarding route, unit of
  assessment, scope, public evidence; (2) claim → document to request → how to verify.
- Scenario: two labs send ISO certificates; one is an ISO 9001 certificate for a company, the other an
  ISO/IEC 17025 accreditation schedule with a narrow test scope. Explain which questions each answers.
- Sibling links: `/evaluate-avian-dna-testing-laboratory/`, `/avian-dna-testing-supplier-evaluation/`.

## Page 9 — Evaluating Avian DNA Testing Suppliers and Kits

- Title: `Evaluating Avian DNA Testing Suppliers and Kits | SENO`
- H1: `Evaluating Avian DNA Testing Suppliers and Kits`
- Angle: a kit is not a test until it is implemented in a laboratory. Evaluate the supplier's evidence,
  lot consistency and support, not the box design.
- Sections: what the supplier actually supplies; intended use and regulatory status; kit documentation;
  analytical validation vs example data; lot-to-lot consistency; reagent stability and cold chain; extraction
  compatibility; controls included; software and interpretation; technical support and training; supply
  continuity; quality agreement; claims and evidence; a weighted scorecard; scenario; what we would do;
  questions; sources.
- Tables: (1) document/evidence → what it supports → common gap; (2) 10-criterion supplier scorecard with
  weights and a "must-have" column.
- Scenario: a low-cost kit has a beautiful brochure but no lot-release data, no extraction claim for feather
  samples and no local support. Compare it with a higher-cost kit that supplies a validation pack but weak
  training. Decide what to pilot and what to reject.
- Sibling links: `/evaluate-avian-dna-testing-laboratory/`, `/laboratory-accreditation-vs-quality-certification/`.

## Page 10 — Quality Control in High-Volume Avian Testing

- Title: `Quality Control in High-Volume Avian Testing | SENO`
- H1: `Quality Control in High-Volume Avian Testing`
- Angle: throughput creates identity, contamination and review risks that small batches hide. Quality is a
  workflow design problem, not a faster machine.
- Sections: what changes at volume; batching and plate layout; barcode/ID systems; sample reception and
  accessioning; contamination control (physical separation, unidirectional flow, cleaning, controls);
  automation and liquid handling; QC sampling per batch; data review and second-person checks; turnaround
  time vs quality; performance indicators; sample swap and carryover; staffing and training; escalation;
  capacity planning; scenario; what we would do; questions; sources.
- Tables: (1) volume-related risk → control → metric; (2) KPI table with definition, why it matters, and a
  warning against gaming it.
- Scenario: a lab doubles daily samples and cuts turnaround time; invalid rate rises, two clients report
  swapped results, and the night shift skips a second review. Diagnose the system failure and sequence the
  fixes.
- Sibling links: `/pcr-positive-negative-controls/`, `/failed-avian-dna-tests/`.
- Data subsite link: `/quality-control/lab-workflow/`.

## Output

Follow the page template exactly. Use backtick template literals for `articleHtml`. After writing, run
`npm run build`, then print for each page: word count, H2 count, table count, title length, description length,
CJK count, and the result of a local link check. Report files changed. Do not commit, do not push.
