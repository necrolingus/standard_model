/**
 * Standard Model - Quarks Data Module
 * All values verified against Particle Data Group (PDG 2024 / Review of Particle Physics).
 */

export const quarks = [
  {
    id: "up-quark",
    name: "Up Quark",
    symbol: "u",
    symbolLatex: "u",
    category: "quark",
    categoryLabel: "Quark",
    generation: 1,
    canonicalGrid: { col: 2, row: 2 },
    mass: "2.16 +0.49/-0.26 MeV/c²",
    massLatex: "2.16^{+0.49}_{-0.26}\\text{ MeV}/c^2",
    charge: "+2/3 e",
    chargeLatex: "+\\frac{2}{3}e",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "Carries color (red, green, or blue)",
    weakIsospin: "+1/2",
    weakIsospinLatex: "+\\frac{1}{2}",
    hypercharge: "+1/3",
    hyperchargeLatex: "+\\frac{1}{3}",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like fundamental fermion)",
      clarificationNote: "The up quark is an indivisible, elementary building block. It is not composed of smaller particles. Together with down quarks, it forms protons (uud) and neutrons (udd)."
    },
    plainEnglish: {
      summary: "The lightest of all quarks. Along with down quarks, up quarks make up almost all normal matter in the universe because they form the protons and neutrons inside atomic nuclei.",
      roleInUniverse: "Every atom in your body, the Earth, and the stars contains up quarks. A proton consists of two up quarks and one down quark (uud). If the up quark were significantly heavier, atoms as we know them could not exist."
    },
    physicsDetails: {
      fieldTheoryContext: "A spin-1/2 Dirac fermion subject to all four fundamental interactions, governed primarily by Quantum Chromodynamics (QCD) through color charge. Exhibits asymptotic freedom at high energies and color confinement at low energies.",
      keyProperties: "First-generation up-type quark. Because of QCD confinement, free quarks are never observed in isolation at low energies; they always hadronize into color-neutral baryons (qqq) or mesons (q q̄)."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Carries color charge; bound tightly inside hadrons by gluons via QCD." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries fractional electric charge +2/3 e; couples directly to photons." },
      { name: "Weak Force", acts: true, detail: "Couples to W± and Z⁰ bosons; participates in flavor-changing charged currents (e.g., CKM matrix transitions)." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Acquires mass through Yukawa coupling to the Higgs field." }
    ],
    decayAndProduction: {
      isStable: true,
      stabilityNote: "Stable within stable hadrons (such as the proton). Free isolated quarks do not exist at observable energies.",
      lifetime: "Stable inside proton (> 10³⁴ years)",
      lifetimeLatex: "\\tau > 10^{34}\\text{ years (in proton)}",
      decayModes: [
        {
          channel: "u \\to d + e^+ + \\nu_e",
          branchingRatio: "Via weak interaction in bound nuclei",
          description: "In proton-rich unstable nuclei, an up quark can transform into a down quark via positron emission (beta-plus decay)."
        }
      ],
      production: "Abundantly present in all primordial baryonic matter. Also produced in high-energy particle collisions (e.g., Large Hadron Collider) as part of quark-gluon jets."
    },
    sources: [
      {
        title: "PDG Review of Particle Physics: Quarks",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-quarks.pdf",
        organization: "Particle Data Group (Lawrence Berkeley National Laboratory)",
        attribution: "R.L. Workman et al. (Particle Data Group), Prog. Theor. Exp. Phys. 2022, 083C01 (2022) and 2024 update."
      },
      {
        title: "CERN: The Standard Model - Quarks",
        url: "https://home.cern/science/physics/standard-model",
        organization: "European Organization for Nuclear Research (CERN)",
        attribution: "CERN Science Communication."
      },
      {
        title: "HyperPhysics: The Quark Substructure of Hadrons",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/Particles/quark.html",
        organization: "Georgia State University",
        attribution: "Dr. C.R. Nave, HyperPhysics project."
      }
    ]
  },
  {
    id: "down-quark",
    name: "Down Quark",
    symbol: "d",
    symbolLatex: "d",
    category: "quark",
    categoryLabel: "Quark",
    generation: 1,
    canonicalGrid: { col: 2, row: 3 },
    mass: "4.67 +0.48/-0.17 MeV/c²",
    massLatex: "4.67^{+0.48}_{-0.17}\\text{ MeV}/c^2",
    charge: "-1/3 e",
    chargeLatex: "-\\frac{1}{3}e",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "Carries color (red, green, or blue)",
    weakIsospin: "-1/2",
    weakIsospinLatex: "-\\frac{1}{2}",
    hypercharge: "+1/3",
    hyperchargeLatex: "+\\frac{1}{3}",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like fundamental fermion)",
      clarificationNote: "The down quark is an indivisible, elementary building block. It is slightly heavier than the up quark, which is why a free neutron (udd) decays into a proton (uud), making stable atomic chemistry possible."
    },
    plainEnglish: {
      summary: "The second-lightest quark. Together with the up quark, it is a primary constituent of everyday matter. Two down quarks plus one up quark make a neutron.",
      roleInUniverse: "Down quarks are essential for stable nuclei. Because the down quark is slightly heavier than the up quark, free neutrons undergo beta decay into protons, electrons, and antineutrinos."
    },
    physicsDetails: {
      fieldTheoryContext: "First-generation down-type quark with weak isospin T3 = -1/2. Interacts via all fundamental gauge interactions. Transitions to up-type quarks are governed by the V_ud matrix element of the Cabibbo-Kobayashi-Maskawa (CKM) matrix (~0.9737).",
      keyProperties: "Subject to color confinement and chiral symmetry breaking in QCD. Current-quark mass is determined through lattice QCD simulations and chiral perturbation theory."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Carries color charge; bound inside hadrons by gluon exchange." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries electric charge -1/3 e; couples to photons." },
      { name: "Weak Force", acts: true, detail: "Undergoes flavor transition to up quark via emission of a W- boson (basis of nuclear beta-minus decay)." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Receives mass from Yukawa interaction with the Higgs doublet." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "A free down quark in an unstable hadron decays to an up quark via the weak interaction. Within a stable proton, it does not decay.",
      lifetime: "Free neutron lifetime: ~878.4 seconds",
      lifetimeLatex: "\\tau_n \\approx 878.4\\text{ s}",
      decayModes: [
        {
          channel: "d \\to u + e^- + \\bar{\\nu}_e",
          branchingRatio: "~100% (in free neutron beta decay)",
          description: "Responsible for neutron beta decay: n (udd) -> p (uud) + e- + ν̄_e."
        }
      ],
      production: "Primordial constituent of all neutrons and protons; created in pair production at colliders."
    },
    sources: [
      {
        title: "PDG Review of Particle Physics: Quarks",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-quarks.pdf",
        organization: "Particle Data Group",
        attribution: "R.L. Workman et al. (PDG), Prog. Theor. Exp. Phys. 2022, 083C01 (2022)."
      },
      {
        title: "HyperPhysics: Down Quark",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/Particles/quark.html#c3",
        organization: "Georgia State University",
        attribution: "Dr. C.R. Nave."
      }
    ]
  },
  {
    id: "charm-quark",
    name: "Charm Quark",
    symbol: "c",
    symbolLatex: "c",
    category: "quark",
    categoryLabel: "Quark",
    generation: 2,
    canonicalGrid: { col: 3, row: 2 },
    mass: "1.27 ± 0.02 GeV/c²",
    massLatex: "1.27 \\pm 0.02\\text{ GeV}/c^2",
    charge: "+2/3 e",
    chargeLatex: "+\\frac{2}{3}e",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "Carries color (red, green, or blue)",
    weakIsospin: "+1/2",
    weakIsospinLatex: "+\\frac{1}{2}",
    hypercharge: "+1/3",
    hyperchargeLatex: "+\\frac{1}{3}",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like fundamental fermion)",
      clarificationNote: "A second-generation fundamental particle. Its existence was predicted by the GIM mechanism in 1970 to explain why flavor-changing neutral currents are suppressed, and confirmed by the 'November Revolution' in 1974 with the discovery of the J/ψ meson (c c̄)."
    },
    plainEnglish: {
      summary: "A heavier, unstable cousin of the up quark. Discovered in 1974, proving that quarks come in paired generations.",
      roleInUniverse: "Because of its high mass (~1.27 GeV, heavier than a whole proton), it does not exist in stable everyday matter. It appears briefly in high-energy collisions or cosmic ray impacts before decaying."
    },
    physicsDetails: {
      fieldTheoryContext: "Second-generation up-type quark. Completes the second quark doublet (c, s) alongside the lepton doublet (ν_μ, μ), eliminating quantum anomalies in the electroweak Standard Model.",
      keyProperties: "Undergoes weak decay predominantly to the strange quark due to the large CKM matrix element |V_cs| ≈ 0.975."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Subject to QCD binding; forms charmed mesons (D mesons) and charmed baryons (Λ_c)." },
      { name: "Electromagnetic Force", acts: true, detail: "Couples to photons with charge +2/3 e." },
      { name: "Weak Force", acts: true, detail: "Decays predominantly into strange quarks via W+ emission." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Higher Yukawa coupling than up quark, yielding ~500 times greater mass." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Highly unstable; decays in picoseconds inside charmed hadrons.",
      lifetime: "~10⁻¹² seconds (in D mesons)",
      lifetimeLatex: "\\tau \\approx 10^{-12}\\text{ s}",
      decayModes: [
        {
          channel: "c \\to s + W^{+*} \\to s + e^+ + \\nu_e",
          branchingRatio: "Dominant (~95% CKM favored)",
          description: "Cabibbo-favored decay into a strange quark."
        },
        {
          channel: "c \\to d + W^{+*}",
          branchingRatio: "Cabibbo-suppressed (~5%)",
          description: "Suppressed decay into a down quark governed by |V_cd| ≈ 0.225."
        }
      ],
      production: "Produced in electron-positron colliders or proton-proton collisions (e.g. LHCb) via gluon-gluon fusion and quark-antiquark annihilation."
    },
    sources: [
      {
        title: "PDG Review: Charm Quark",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-quarks.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024 summary table."
      },
      {
        title: "Nobel Prize in Physics 1976: Discovery of the J/psi",
        url: "https://www.nobelprize.org/prizes/physics/1976/summary/",
        organization: "Nobel Media",
        attribution: "Awarded to Burton Richter and Samuel Ting."
      }
    ]
  },
  {
    id: "strange-quark",
    name: "Strange Quark",
    symbol: "s",
    symbolLatex: "s",
    category: "quark",
    categoryLabel: "Quark",
    generation: 2,
    canonicalGrid: { col: 3, row: 3 },
    mass: "93.4 +8.6/-3.4 MeV/c²",
    massLatex: "93.4^{+8.6}_{-3.4}\\text{ MeV}/c^2",
    charge: "-1/3 e",
    chargeLatex: "-\\frac{1}{3}e",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "Carries color (red, green, or blue)",
    weakIsospin: "-1/2",
    weakIsospinLatex: "-\\frac{1}{2}",
    hypercharge: "+1/3",
    hyperchargeLatex: "+\\frac{1}{3}",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like fundamental fermion)",
      clarificationNote: "An elementary particle of the second generation. Named 'strange' because particles containing it (like Kaons) had unusually long lifetimes before decaying, which puzzled physicists until the quark model explained strangeness conservation in strong interactions."
    },
    plainEnglish: {
      summary: "The third-lightest quark. It earned the name 'strange' because hadrons containing it took an unexpectedly long time to decay.",
      roleInUniverse: "Does not exist in ordinary atoms today, but is studied inside Kaons and hyperons. Physicists hypothesize that dense neutron star cores might form 'strange quark matter'."
    },
    physicsDetails: {
      fieldTheoryContext: "Second-generation down-type quark with quantum strangeness S = -1. Strong interactions conserve strangeness; only weak interactions violate strangeness, explaining the long lifetimes of strange hadrons.",
      keyProperties: "Transitions to the up quark via CKM element |V_us| ≈ 0.2243 (the sine of the Cabibbo angle)."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Forms strange hadrons (Kaons, Lambda hyperon) via color confinement." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries electric charge -1/3 e." },
      { name: "Weak Force", acts: true, detail: "Decays into up quarks via W- boson; source of CP violation in the neutral kaon system." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Intermediate Yukawa coupling." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Decays via the weak interaction with a lifetime typical of weak decays (~10⁻⁸ to 10⁻¹⁰ seconds).",
      lifetime: "~1.2 × 10⁻⁸ seconds (in K⁺ meson)",
      lifetimeLatex: "\\tau \\approx 1.2 \\times 10^{-8}\\text{ s}",
      decayModes: [
        {
          channel: "s \\to u + W^{-*} \\to u + e^- + \\bar{\\nu}_e",
          branchingRatio: "Governed by Cabibbo angle sin(θ_c) ≈ 0.225",
          description: "Flavor-changing charged current converting strangeness to non-strange hadrons."
        }
      ],
      production: "Associated production in strong collisions (e.g., π⁻ + p → K⁰ + Λ), ensuring strangeness is conserved at production."
    },
    sources: [
      {
        title: "PDG Quarks Review",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-quarks.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "HyperPhysics: Strange Particles",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/Particles/strange.html",
        organization: "Georgia State University",
        attribution: "Dr. C.R. Nave."
      }
    ]
  },
  {
    id: "top-quark",
    name: "Top Quark",
    symbol: "t",
    symbolLatex: "t",
    category: "quark",
    categoryLabel: "Quark",
    generation: 3,
    canonicalGrid: { col: 4, row: 2 },
    mass: "172.69 ± 0.30 GeV/c²",
    massLatex: "172.69 \\pm 0.30\\text{ GeV}/c^2",
    charge: "+2/3 e",
    chargeLatex: "+\\frac{2}{3}e",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "Carries color (red, green, or blue)",
    weakIsospin: "+1/2",
    weakIsospinLatex: "+\\frac{1}{2}",
    hypercharge: "+1/3",
    hyperchargeLatex: "+\\frac{1}{3}",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like fundamental fermion)",
      clarificationNote: "The top quark is the heaviest known elementary particle in the universe—roughly as heavy as an entire gold atom! Because it decays faster than the time it takes for the strong force to bind it, it NEVER forms hadrons."
    },
    plainEnglish: {
      summary: "The titan of the subatomic world. It weighs about 173 GeV, making it nearly 184 times heavier than a proton, yet it is a single point-like elementary particle.",
      roleInUniverse: "Its immense mass gives it a uniquely strong coupling to the Higgs boson (Yukawa coupling ≈ 1), making it a sensitive testing ground for stability of the Higgs vacuum and electroweak symmetry breaking."
    },
    physicsDetails: {
      fieldTheoryContext: "Third-generation up-type quark. Its decay width is ~1.42 GeV, corresponding to a lifetime of ~5 × 10⁻²⁵ seconds. Since this is shorter than the hadronization timescale (1/Λ_QCD ≈ 3 × 10⁻²⁴ s), it decays as a bare quark, allowing direct study of bare quark properties.",
      keyProperties: "Decays almost exclusively into a W boson and a bottom quark (CKM element |V_tb| ≈ 0.999)."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Carries color charge, but decays before forming bound hadrons." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries electric charge +2/3 e." },
      { name: "Weak Force", acts: true, detail: "Decays via the weak interaction into a real W+ boson and b quark." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Has the largest Yukawa coupling of any particle (y_t ≈ 0.99), directly linked to the Higgs mechanism." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Extremely short-lived; the fastest decaying fundamental particle known.",
      lifetime: "~5 × 10⁻²⁵ seconds",
      lifetimeLatex: "\\tau \\approx 5 \\times 10^{-25}\\text{ s}",
      decayModes: [
        {
          channel: "t \\to W^+ + b",
          branchingRatio: "99.1 ± 0.5%",
          description: "Dominates almost completely due to CKM matrix unitarity."
        },
        {
          channel: "t \\to W^+ + s \\text{ or } d",
          branchingRatio: "< 1%",
          description: "Heavily CKM-suppressed channels."
        }
      ],
      production: "Discovered at Fermilab (Tevatron) in 1995; produced copiously in pairs (t t̄) via gluon fusion at the Large Hadron Collider (LHC)."
    },
    sources: [
      {
        title: "PDG Review: Top Quark",
        url: "https://pdg.lbl.gov/2024/reviews/rpp2024-rev-top-quark.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024 Comprehensive Top Quark Review."
      },
      {
        title: "Fermilab: Discovery of the Top Quark",
        url: "https://news.fnal.gov/1995/03/physicists-discover-top-quark-at-fermilab/",
        organization: "Fermi National Accelerator Laboratory",
        attribution: "CDF and D0 Collaborations (March 1995)."
      }
    ]
  },
  {
    id: "bottom-quark",
    name: "Bottom Quark",
    symbol: "b",
    symbolLatex: "b",
    category: "quark",
    categoryLabel: "Quark",
    generation: 3,
    canonicalGrid: { col: 4, row: 3 },
    mass: "4.18 +0.03/-0.02 GeV/c²",
    massLatex: "4.18^{+0.03}_{-0.02}\\text{ GeV}/c^2",
    charge: "-1/3 e",
    chargeLatex: "-\\frac{1}{3}e",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "Carries color (red, green, or blue)",
    weakIsospin: "-1/2",
    weakIsospinLatex: "-\\frac{1}{2}",
    hypercharge: "+1/3",
    hyperchargeLatex: "+\\frac{1}{3}",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like fundamental fermion)",
      clarificationNote: "An elementary third-generation quark (sometimes historically called 'beauty'). Bound states of b and anti-b quarks form the Upsilon (ϒ) meson, discovered at Fermilab in 1977."
    },
    plainEnglish: {
      summary: "A heavy third-generation quark. It is famous in particle physics because studying how it decays helps scientists explain why the universe has more matter than antimatter.",
      roleInUniverse: "B mesons (particles containing a bottom quark) exhibit matter-antimatter asymmetry (CP violation), which is central to understanding why everything we see is made of matter."
    },
    physicsDetails: {
      fieldTheoryContext: "Third-generation down-type quark. Because the CKM transition to the top quark is kinematically forbidden (the top is heavier), it must decay across generations to charm (|V_cb| ≈ 0.041) or up (|V_ub| ≈ 0.0038). These small values give B-hadrons a remarkably long lifetime for their mass.",
      keyProperties: "Crucial for precision CP violation measurements at B-factories (Belle II, BaBar, LHCb)."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Forms B-mesons and b-baryons through QCD confinement." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries charge -1/3 e." },
      { name: "Weak Force", acts: true, detail: "Decays into charm or up quarks through off-diagonal CKM transitions." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Yukawa coupling gives it a mass of ~4.18 GeV." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Decays weakly; its long lifetime allows modern detectors to resolve displaced decay vertices (b-tagging).",
      lifetime: "~1.5 × 10⁻¹² seconds (in B mesons)",
      lifetimeLatex: "\\tau \\approx 1.5 \\times 10^{-12}\\text{ s}",
      decayModes: [
        {
          channel: "b \\to c + W^{-*} \\to c + \\ell^- + \\bar{\\nu}_\\ell",
          branchingRatio: "~99%",
          description: "Dominant decay pathway into charm hadrons."
        },
        {
          channel: "b \\to u + W^{-*}",
          branchingRatio: "~1%",
          description: "CKM-suppressed transition measuring |V_ub|."
        }
      ],
      production: "Produced in high energy colliders via e+ e- -> b b̄ (at the ϒ(4S) resonance) or pp -> b b̄ + X."
    },
    sources: [
      {
        title: "PDG Review: Bottom Quark",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-quarks.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "LHCb Experiment at CERN: Beauty Physics",
        url: "https://lhcb-public.web.cern.ch/",
        organization: "CERN",
        attribution: "LHCb Collaboration Outreach."
      }
    ]
  }
];
