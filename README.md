# Standard Model and Quantum Physics Portal

An interactive, responsive learning portal designed for students and enthusiasts of quantum mechanics and particle physics. It helps learners disambiguate physics terminology, inspect the elementary and composite components of the universe, and explore dual plain-English and rigorous physics descriptions.

Repository: [https://github.com/necrolingus/standard_model](https://github.com/necrolingus/standard_model)

---

## What This App Does

- **Canonical 2D Standard Model Matrix**: Displays all 17 fundamental particles (quarks, leptons, gauge bosons, and the Higgs boson) organized in their canonical periodic columns (Generation I, II, III, Gauge Bosons, Scalar Bosons) and family rows (up-type quarks, down-type quarks, charged leptons, neutrinos).
- **Composite Hadrons Section**: Highlights common composite particles (Baryons like protons $[uud]$ and neutrons $[udd]$, and Mesons like pions and kaons) to clarify the difference between fundamental particles and bound quark states.
- **Foundational Definitions & Terminology (Collapsible)**:
  - Pedagogically ordered from the smallest scale upward: **1. Gluon**, **2. Quark**, **3. Spin**, **4. Strong Force**, **5. Weak Force**, and beyond.
  - Features an intuitive breakdown of **Spin** (Spin 0 scalar, Spin 1/2 matter fermion, Spin 1 vector gauge boson, Spin 2 tensor gravity).
  - Includes a one-click **Hide Definitions / Show Definitions** toggle to keep the search bar and Standard Model matrix right next to each other.
- **Detailed Slide-Over Side Drawer**:
  - **Plain English Explanation**: Intuitive conceptual summary and real-world significance.
  - **"Real Deal" Physics**: Exact quantum numbers (mass, charge, spin & parity $J^P$, color charge, weak isospin $T_3$, weak hypercharge $Y$) rendered in KaTeX LaTeX notation, alongside field theory context (QED, QCD, Electroweak).
  - **Forces & Interactions**: Clear breakdown of which of the 4 fundamental forces act on or are mediated by the particle.
  - **Decay & Production**: Stability status, mean lifetime $\tau$, decay channels with branching ratios, and production mechanisms.
  - **Authoritative Sources & Attribution**: Direct links to the Particle Data Group (PDG 2024 *Review of Particle Physics*), CERN, HyperPhysics, and NIST CODATA.
- **Search & Filter System**: Real-time search by particle name, symbol (e.g. $u, \gamma, p$), quark composition (e.g. $uud$), or property, plus category filter pills.
- **Academic Minimalist Design**: Crisp plain white layout, high contrast, zero neon styling, and zero emojis.

---

## 100% Client-Side & Zero Build Tools

This project is built entirely with **pure vanilla HTML5, CSS3, and modern JavaScript (ES Modules)**:
- **No Node.js or npm build step required**
- **No heavy frontend frameworks** (no React, Vue, or Angular)
- **Zero backend or server dependencies**
- Fast mathematical typography powered by **KaTeX** via CDN

Because it is 100% static, it can be deployed effortlessly to:
- **Cloudflare Pages** (just connect your GitHub repository; no build command required)
- **GitHub Pages** (enable in repository Settings $\to$ Pages)
- **Netlify / Vercel** (static deploy with publish directory set to root `.`)
- Any Apache, Nginx, or Caddy web server

---

## Project Structure

```
standard_model/
├── index.html             # Clean HTML5 shell and KaTeX scripts
├── favicon.svg            # Minimalist vector icon
├── README.md              # Project overview and deployment guide
├── requirements.md        # Living specification tracking all requirements
├── css/
│   ├── main.css           # Global typography, resets, header, toolbar, footer
│   ├── grid.css           # Canonical 2D matrix, fluid filtered views, cards
│   ├── drawer.css         # Slide-over detail drawer
│   └── definitions.css    # Conceptual definitions section, pills, and spin cards
└── js/
    ├── app.js             # Application orchestrator, search, filters, deep-linking
    ├── ui.js              # DOM generator, drawer renderer, KaTeX trigger
    └── data/
        ├── quarks.js      # 6 Quarks dataset (PDG 2024)
        ├── leptons.js     # 6 Leptons dataset
        ├── bosons.js      # 4 Gauge Bosons + 1 Higgs Boson
        ├── composites.js  # Hadrons (Proton, Neutron, Pions, Kaon)
        ├── definitions.js # Conceptual terminology (Gluon, Quark, Spin, Forces, etc.)
        └── index.js       # Central data registry and search API
```

---

## Running Locally

Any static web server can serve this project. For example:

### Using Python 3:
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Using Node / npx:
```bash
npx serve .
```

---

## Sources & Academic Attribution

All particle properties, masses, lifetimes, branching ratios, and quantum numbers are verified against:
- **Particle Data Group (PDG)** — *Review of Particle Physics (2024)* (Lawrence Berkeley National Laboratory)
- **CERN** — European Organization for Nuclear Research
- **HyperPhysics** — Department of Physics & Astronomy, Georgia State University
- **NIST** — Reference on Constants, Units, and Uncertainty (CODATA)

---

## License

This project is licensed under the [MIT License](LICENSE). Physical facts and constants of nature are public scientific data credited to the Particle Data Group (PDG) and NIST CODATA. Free to use, inspect, fork, or host for educational and personal purposes.
