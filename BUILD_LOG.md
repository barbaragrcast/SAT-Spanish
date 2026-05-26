## Task 1 —  Scaffold the repo and write CLAUDE.md
- Brief: Create the folder structure (/components, /data, /screens, /hooks) and write a CLAUDE.md that documents the stack (React + Tailwind + Desmos API + Anthropic API), the bilingual toggle pattern, and the College Board question data shape.1
- What Claude proposed:This task establishes the canonical folder structure and skeleton source files that encode the three core architectural patterns — the date-seed daily question system, the ES/EN toggle, and the Desmos embed 
- What I changed before approving: Lets focus on the desmos api later, but still keep it in mind
- Verification: Looked at the files, added tests
- One thing I learned: How to start the page

## Task 2 —  Build the bilingual toggle system
- Brief:  Create a LanguageContext that wraps the entire app and exports a useLang() hook, with a complete copy.js file containing every string in both Spanish and English.
- What Claude proposed: --template react, then npm install && npm run dev to get a live preview on http://localhost:5173 where flipping the toggle instantly re-renders all strings through the LanguageProvider → useLang → t() chain with no page reload.
- What I changed before approving: Everything looked ok, so I approved the plan
- Verification: ran test
- One thing I learned: How to run the webpage using npm run dev

## Task 3 —  Seed the College Board question bank
- Brief:  Brief
Populate src/data/questions.js with 30 real SAT questions (15 Reading & Writing, 15 Math), each fully bilingual, so the daily question selector and practice bank have real data to work with. Every question needed all 10 required fields both language versions of the stem, choices, and explanation  with zero undefined values.
- What Claude proposed: Read both PDFs with pypdf, extract questions by ID directly from the College Board bank, write Spanish translations by hand into the established schema, and run a Node validation script to confirm field completeness and equal section counts.
- What I changed before approving: I flagged that Desmos should be deferred but the calculadora and expresionDesmos fields still needed to exist in every question object — so both fields were included on all 30 questions as reserved placeholders from the start.
- Verification: Ran node verify.mjs which checked all 10 required fields on every object (including nested es/en pairs inside enunciado, opciones, and explicacion) and confirmed the output: 30 total, 15 per section, 0 field errors.
- One thing I learned:The College Board math PDFs store all algebraic expressions and numerical values as rendered images, not extractable text  only word problems where numbers appear in plain sentences  are fully readable by a text extractor, so math question selection had to be filtered for that specific style.


## Task 4 —   Build the daily question selector
- Brief:  Pure function that picks one question per section per day using a date-derived hash.
- What Claude proposed: Linear tipoOffset = 200000 added to the seed to separate RW and Math.
- What I changed before approving: Switched the section separator from linear addition to XOR with golden-ratio constants so consecutive days can't cancel it out.
- Verification: ran test
- One thing I learned:A linear hash always has blind spots — two inputs N apart will always land in the same bucket if N is a multiple of the pool size.

## Task 5 —  Build the Home screen
- Brief:  Home screen with streak bar, two daily question cards, and two nav buttons.
- What Claude proposed:  Streak bar composed from existing racha + dias keys as {t('racha')}: {n} {t('dias')}.
- What I changed before approving: Kept the streak text as {n} días · Racha so the number leads, matching how streaks typically display on mobile apps.
- Verification: ran test
- One thing I learned:A simple useState router in App.jsx handles screen transitions cleanly without adding React Router at this stage.

## Task 6 —  Build the Question Card and answer flow
- Brief: QuestionCard with color-coded answer states and a bilingual explanation panel.
- What Claude proposed:  Self-contained TarjetaPregunta holds all answer state (seleccion, enviado); PantallaPregunta wraps it with a header and routes from App.
- What I changed before approving: Added ✓ / ✗ icons on the buttons after submit instead of just color alone, so the result is clear without relying on color perception.
- Verification:  Run npm run dev, open localhost:5173, tap a daily card → question screen loads. Pick a wrong answer → submit button activates → click it → wrong choice turns red + ✗, correct turns green + ✓,
- One thing I learned: Keeping answer state inside the card (not the parent screen) means the card is fully portable — any future screen can drop it in without wiring up extra props.

## Task 7 —  Build the Timed Exam screen
- Brief: Four-module timed exam with countdown, question navigation, and a scored results summary.
- What Claude proposed:  PantallaEnsayo owns a three-phase state machine (seleccion → examen → resultados); ExamenActivo holds the countdown in a single useEffect with refs to avoid stale-closure bugs; ResumenEnsayo shows score, time, and a per-question review.
- What I changed before approving:  Added correct-answer column (→ B) in the results review list, so you can see what the right answer was for every skipped or wrong question, not in the original plan.
- Verification: Start Matemáticas Módulo 2 (5 questions, ~5 min 50 sec shortest timer); skip through all 5 questions without answering; wait for 00:00 → app auto-submits, jumps to results showing 0 % and 0 / 5 correct. For a normal pass: answer some questions, click Fin del ensayo on the last one → results show your real score and time used.
- One thing I learned: setInterval inside a React effect captures the initial closure  without refs, the timer callback would always see an empty respuestas object even after the user answered questions; the ref pattern is the correct fix.

## Task 8 —   Build the Question Bank screen
- Brief: Filterable question bank — section pills, topic dropdown, difficulty pills — with a full question card detail view.
- What Claude proposed:  PantallaBanco owns filter state and a preguntaActiva toggle; TarjetaPrevia renders the preview card; DetallePregunta wraps the existing TarjetaPregunta with a back button; domain list recomputes from the section filter so Math domains never appear when R&W is selected.
- What I changed before approving: Domain dropdown resets automatically when you switch sections — avoids the dead state of "Álgebra" being stuck selected after switching to Lectura y Escritura (which has no Álgebra questions).
- Verification:  Home → Banco de Preguntas → tap Matemáticas pill → tap the domain dropdown → select Álgebra → count should read 13 preguntas and only Álgebra cards appear; tap any card's Practicar → → full question opens in active language with working answer flow; tap back → returns to filtered list.
- One thing I learned:  Computing the domain dropdown from the section-filtered pool (not the full pool) is the key detail — without it, selecting a section-specific domain like "Álgebra" while on "Todas las secciones" would show results, but switching sections would leave a now-invalid domain selected in the dropdown.

## Task 9 —  Build the Progress Tracker
- Brief: localStorage session persistence, streak/accuracy stats, and a 7-day bar chart Progress screen.
- What Claude proposed:  progreso.js handles all reads and writes (sessions array + cached racha key); guardarSesion is called inside TarjetaPregunta.handleEnviar and PantallaEnsayo.handleFinExamen; PantallaProgreso reads everything at render time (no state needed since localStorage is synchronous).
- What I changed before approving: Added a per-question score column (2/3) color-coded green/amber/red to the recent sessions list, so you can see quality at a glance without opening each session.
- Verification: Answer a daily R&W question → answer a Math exam module → refresh → open 📊 Mi Progreso: both sessions appear in recent list with correct scores; streak shows 🔥 1; accuracy cards show real percentages; home screen streak bar updates to 1; toggle to English — all labels swap including day abbreviations in the chart.
- One thing I learned: : new Date('YYYY-MM-DD') parses as UTC midnight, which shifts the displayed day by one in any negative-UTC timezone — appending T12:00:00 (local noon) before parsing is the reliable fix for all date display code.

## Task 10 —  Polish the UI with Tailwind and accessibility
- Brief: Global focus ring, all low-contrast gray text upgraded, ARIA labels/roles/live-regions added, streak confirmed correct.
- What Claude proposed: One global :focus-visible rule in index.css covers every interactive element; all text-gray-400 on white (2.7:1, fails AA) promoted to text-gray-500/text-gray-600; role="radiogroup" + aria-checked + role="radio" on answer choices; aria-live="polite" on result panel; aria-label on the domain <select>; role="status" on streak bar; timer switches to aria-live="assertive" when under 60 s.
- What I changed before approving: Disabled-button text (disabled:text-gray-400) left as-is — WCAG 1.4.3 explicitly exempts inactive UI components from contrast requirements, so changing it would be wrong.
- Verification: Tab through the full question flow without a mouse — every button, pill, select, and answer choice gets a visible blue ring. Lighthouse Accessibility should score ≥ 90 (contrast and label gaps were the dominant categories). Streak: answer a question, go back, home shows 🔥 1; open Mi Progreso, both sessions listed.
- One thing I learned:  text-gray-400 (#9CA3AF) on white is only 2.7:1 — it fails WCAG AA for both normal text (4.5:1) and large text (3:1), so it cannot be used for any meaningful content regardless of size; text-gray-500 (4.6:1) is the safe minimum.

## AI Workflow

**Planning:** Claude.ai (chat) was the starting point — I used it to visualize the idea, map out the feature list, and edit my task steps before committing to them. It was fast for talking through tradeoffs before any code existed.

**Executing:** Claude Code in VS Code handled every implementation task — scaffolding files, writing components, fixing bugs, and running terminal commands. Having it read the actual codebase made suggestions precise rather than generic.

**Polishing & reviewing:** GitHub Copilot handled small in-line refinements while I was actively editing — autocompleting repetitive Tailwind class patterns and filling in bilingual string pairs.

**One moment a tool clearly outperformed:** Claude Code during the daily-lock bug fix. It read `progreso.js`, `TarjetaPregunta`, and `PantallaPregunta` together, spotted that `guardarSesion` was firing inside the card on every re-render, and rewrote the callback architecture across three files at once. Chat would have given a direction; Copilot would have completed a line. Only Code could see the whole system.

**One mid-task switch:** I started describing the streak bug in Claude.ai chat, but explaining the localStorage schema in plain text was slow and error-prone. I switched to Claude Code so it could read `progreso.js` directly — the fix took one exchange instead of five.

## Task 11 —  Write README.md and document how to add questions1
- Brief:README with quick-start, bilingual architecture explanation, and a 6-step contributor guide for adding questions, with a common-mistakes table.
- What Claude proposed:  Write the README so it works standalone without reading CLAUDE.md; document the apostrophe-backtick rule prominently (the hardest pitfall we hit in Task 3); add a complete worked example directly in the file.
- What I changed before approving: : Added the worked example question (6266dc01, Zaha Hadid) directly to questions.js — this both proves the instructions work and leaves a real reference object contributors can copy-paste and modify.
- Verification:  Ran Date.now().toString(16).slice(-8) exactly as Step 1 says → got 6266dc01 → pasted it into the template from Step 4 → build passes → Node confirms all 12 fields load correctly in both languages → 31 total questions, 16 R&W.
- One thing I learned: Documenting the apostrophe rule visually is more useful than prose any contributor who misses the explanation will still catch it at a glance in the comparison block.
