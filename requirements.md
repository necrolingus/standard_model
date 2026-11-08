# Standard Model Interactive Learning Portal - Requirements Specification

## 1. Overview & Goal
An interactive, client-side, vanilla web application designed for a first-year student learning quantum physics and the Standard Model. The app helps learners disambiguate physics terminology by providing:
- A collapsible **Foundational Definitions & Terminology** section with plain-English guides arranged in ascending scale from the smallest elementary components upward.
- An interactive **Canonical 2D Standard Model Matrix** with family row labels and generation columns.
- An interactive **Common Composite Hadrons** section (baryons and mesons).
- A **Slide-over side drawer** providing dual plain-English and rigorous physics details for each component.

---

## 2. Technical & Architecture Requirements
- **Stack**: Pure Vanilla HTML5, CSS3, Modern JavaScript (ES Modules).
- **Hosting / Environment**: 100% static, client-side code; ready for Cloudflare Pages, GitHub Pages, or any static host. No backend/server requirements.
- **Math Rendering**: KaTeX via CDN for textbook-quality mathematical expressions ($J^P$, spin, charges, decay equations).
- **Modularity**:
  - Independent ES data modules:
    - `js/data/quarks.js` (6 Quarks)
    - `js/data/leptons.js` (6 Leptons)
    - `js/data/bosons.js` (4 Gauge Bosons + 1 Higgs Boson)
    - `js/data/composites.js` (Proton, Neutron, Pions, Kaon)
    - `js/data/definitions.js` (Gluon, Quark, Spin [0, 1/2, 1, 2], Strong Force, Weak Force, Leptons, etc.)
    - `js/data/index.js` (Central registry & search API)
  - Modular stylesheets:
    - `css/main.css` (Resets, typography, layout, variables)
    - `css/grid.css` (Canonical 2D matrix, fluid filtered views, cards)
    - `css/drawer.css` (Slide-over side drawer)
    - `css/definitions.css` (Conceptual definition pills, collapsible toggle, and misconception boxes)
  - UI controller (`js/ui.js`) and app entrypoint (`js/app.js`).

---

## 3. UI / UX & Aesthetic Requirements
- **Theme**: Plain white, academic, minimalist aesthetic. High readability.
- **Strict Restrictions**:
  - **No emojis** anywhere in the interface, icons, or text.
  - **No neon** colors, fluorescent glows, or cyber-dark themes.
  - Crisp typography (system sans-serif / monospace for data), subtle borders (`#e2e8f0`, `#cbd5e1`), structured layout, muted semantic accents solely for classification grouping.
- **Collapsible Definitions Section**:
  - Includes a clear `[Hide Definitions] / [Show Definitions]` toggle button.
  - When collapsed, compacts neatly so the search bar and filter controls sit immediately adjacent to the Standard Model grid.
  - Preserves collapse/expand state via `localStorage`.
- **Pedagogical Definitions Sequence**:
  1. **Gluon** (Must be first: subatomic glue & strong force mediator)
  2. **Quark** (Fundamental building blocks carrying color charge)
  3. **Spin (Quantum Angular Momentum)** (Placed right next to Quarks; explains what spin means conceptually and breaks down Spin 0, Spin 1/2, Spin 1, and Spin 2)
  4. **Strong Force** (Color force & nuclear binding)
  5. **Weak Force** (Radioactivity, flavor changing & solar fusion)
  6. **Lepton** (Electrons, neutrinos; fundamental matter without color charge)
  7. **Gauge Boson (Force Carrier)** (Vector bosons carrying interactions)
  8. **Scalar Boson (Higgs)** (Spin 0 field excitation & mass generation)
  9. **Fermion (Matter Particle)** (Half-integer spin matter & Pauli exclusion)
  10. **Boson (Force & Field Quanta)** (Integer spin force quanta)
  11. **Color Charge** (Strong interaction charge: red, green, blue)
  12. **Hadron (Quark Composite)** (Bound states formed by quarks and gluons)
  13. **Baryon (3-Quark Hadron)** (Protons and neutrons)
  14. **Meson (Quark-Antiquark Pair)** (Pions and kaons)
  15. **Antiparticle & Antimatter** (Equal mass, opposite charges)

---

## 4. Verification & Quality Checklist
- [x] Initial requirements captured in `requirements.md`
- [x] Canonical 2D Standard Model matrix implemented with explicit `canonicalGrid: { col, row }`
- [x] Add toggle button to show/hide the Definitions section to save vertical space
- [x] Add Gluon as #1 in the definitions list
- [x] Place Spin right next to Quarks with clear plain-English breakdown of Spin 0, Spin 1/2, Spin 1, and Spin 2
- [x] Add Strong Force and Weak Force to the definitions list
- [x] Verify in browser with 0 console errors and test show/hide toggle behavior
