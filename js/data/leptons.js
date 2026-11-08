/**
 * Standard Model - Leptons Data Module
 * All values verified against Particle Data Group (PDG 2024 / Review of Particle Physics).
 */

export const leptons = [
  {
    id: "electron",
    name: "Electron",
    symbol: "e⁻",
    symbolLatex: "e^-",
    category: "lepton",
    categoryLabel: "Lepton",
    generation: 1,
    canonicalGrid: { col: 2, row: 4 },
    mass: "0.510998950 MeV/c² (9.10938 × 10⁻³¹ kg)",
    massLatex: "0.510998950\\text{ MeV}/c^2",
    charge: "-1 e",
    chargeLatex: "-1e",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "None (Color singlet / does not feel the strong force)",
    weakIsospin: "-1/2 (left-handed) / 0 (right-handed)",
    weakIsospinLatex: "-\\frac{1}{2}\\text{ (LH)}",
    hypercharge: "-1 (left-handed) / -2 (right-handed)",
    hyperchargeLatex: "-1\\text{ (LH)}",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like fundamental lepton)",
      clarificationNote: "The electron is a fundamental lepton. It has no known substructure or internal quarks (experimental upper limit on electron radius is < 10⁻¹⁸ meters)."
    },
    plainEnglish: {
      summary: "The most familiar fundamental particle. Electrons orbit atomic nuclei and carry electricity, chemical bonds, and all modern electronics.",
      roleInUniverse: "Without electrons, chemistry could not exist. Atoms bond together by sharing or transferring electrons. The flow of electrons powers every electrical circuit."
    },
    physicsDetails: {
      fieldTheoryContext: "First-generation charged lepton described by the Dirac equation in Quantum Electrodynamics (QED). Its anomalous magnetic dipole moment (g-2) has been calculated and measured to better than one part in a trillion, representing the most precise prediction in science.",
      keyProperties: "Carries electric charge -1 e, lepton number L_e = +1. Does not participate in strong (QCD) interactions."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "Color singlet; completely exempt from the strong interaction." },
      { name: "Electromagnetic Force", acts: true, detail: "Exchanges photons; dictates atomic orbital structure and chemistry." },
      { name: "Weak Force", acts: true, detail: "Couples to W± and Z⁰ bosons; pairs with electron neutrino in weak SU(2)_L doublets." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Gains mass through Yukawa coupling to the Higgs field." }
    ],
    decayAndProduction: {
      isStable: true,
      stabilityNote: "The lightest charged particle in existence; strictly forbidden from decaying by electric charge conservation.",
      lifetime: "Stable (mean life > 9.3 × 10²⁸ years)",
      lifetimeLatex: "\\tau > 9.3 \\times 10^{28}\\text{ years}",
      decayModes: [
        {
          channel: "\\text{None (Conserved)}",
          branchingRatio: "Stable",
          description: "No lighter particle exists that carries electric charge, so it cannot decay without violating charge conservation."
        }
      ],
      production: "Abundant in all atoms; produced in beta decays (n -> p + e- + ν̄_e) and pair production (γ + γ -> e+ + e-)."
    },
    sources: [
      {
        title: "PDG Leptons Summary: Electron",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-leptons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024 summary table."
      },
      {
        title: "NIST Reference on Constants, Units, and Uncertainty",
        url: "https://physics.nist.gov/cgi-bin/cuu/Value?me",
        organization: "National Institute of Standards and Technology",
        attribution: "CODATA Recommended Values of the Fundamental Physical Constants."
      }
    ]
  },
  {
    id: "electron-neutrino",
    name: "Electron Neutrino",
    symbol: "νₑ",
    symbolLatex: "\\nu_e",
    category: "lepton",
    categoryLabel: "Lepton",
    generation: 1,
    canonicalGrid: { col: 2, row: 5 },
    mass: "< 0.8 eV/c² (KATRIN 2022 limit)",
    massLatex: "< 0.8\\text{ eV}/c^2",
    charge: "0",
    chargeLatex: "0",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "None",
    weakIsospin: "+1/2 (left-handed)",
    weakIsospinLatex: "+\\frac{1}{2}",
    hypercharge: "-1",
    hyperchargeLatex: "-1",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like neutral lepton)",
      clarificationNote: "A ghost-like fundamental particle that has neither electric charge nor color charge. It only feels the weak force and gravity."
    },
    plainEnglish: {
      summary: "Nearly massless 'ghost' particle emitted by nuclear fusion inside the Sun and in nuclear reactors. Trillions pass harmlessly through your body every second.",
      roleInUniverse: "Crucial for stellar nucleosynthesis and supernovae explosions. When stars burn hydrogen into helium, electron neutrinos carry away energy directly from the core."
    },
    physicsDetails: {
      fieldTheoryContext: "Weak interaction eigenstate paired with the electron. A superposition of mass eigenstates (ν₁, ν₂, ν₃) governed by the PMNS mixing matrix, leading to neutrino flavor oscillations.",
      keyProperties: "Only left-handed chiral neutrinos participate in standard electroweak interactions (V-A theory). Mass is non-zero, requiring an extension to the minimal Standard Model (such as the See-Saw mechanism)."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "No color charge; completely inert to QCD." },
      { name: "Electromagnetic Force", acts: false, detail: "Electrically neutral; no tree-level electromagnetic coupling." },
      { name: "Weak Force", acts: true, detail: "Interacts exclusively via charged-current (W±) and neutral-current (Z⁰) weak interactions." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Feels gravity; origin of mass is an active area of neutrino physics research." }
    ],
    decayAndProduction: {
      isStable: true,
      stabilityNote: "Stable against decay in vacuum, though it oscillates into muon and tau neutrino flavors as it travels.",
      lifetime: "Effectively stable (> 10²⁰ seconds for radiative decay limits)",
      lifetimeLatex: "\\tau > 10^{20}\\text{ s}",
      decayModes: [
        {
          channel: "\\nu_e \\leftrightarrow \\nu_\\mu \\leftrightarrow \\nu_\\tau",
          branchingRatio: "Flavor oscillation",
          description: "Undergoes quantum mechanical flavor oscillation during propagation in matter (MSW effect) and vacuum."
        }
      ],
      production: "Solar pp-chain fusion, nuclear fission reactors, supernova core collapse, and beta-plus decays."
    },
    sources: [
      {
        title: "KATRIN Experiment: Direct Neutrino Mass Limit",
        url: "https://www.katrin.kit.edu/",
        organization: "Karlsruhe Institute of Technology",
        attribution: "KATRIN Collaboration, Nature Physics 18 (2022)."
      },
      {
        title: "PDG Neutrino Review",
        url: "https://pdg.lbl.gov/2024/reviews/rpp2024-rev-neutrino-mixing.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024 Neutrino Masses and Mixing Review."
      }
    ]
  },
  {
    id: "muon",
    name: "Muon",
    symbol: "μ⁻",
    symbolLatex: "\\mu^-",
    category: "lepton",
    categoryLabel: "Lepton",
    generation: 2,
    canonicalGrid: { col: 3, row: 4 },
    mass: "105.658375 MeV/c²",
    massLatex: "105.658375\\text{ MeV}/c^2",
    charge: "-1 e",
    chargeLatex: "-1e",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "None",
    weakIsospin: "-1/2 (left-handed)",
    weakIsospinLatex: "-\\frac{1}{2}",
    hypercharge: "-1",
    hyperchargeLatex: "-1",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like fundamental lepton)",
      clarificationNote: "A second-generation cousin of the electron. It is exactly like an electron, but 207 times heavier, which causes it to decay quickly."
    },
    plainEnglish: {
      summary: "A heavy copy of the electron. Discovered in 1936 in cosmic rays, prompting physicist I.I. Rabi to famously ask, 'Who ordered that?'",
      roleInUniverse: "Cosmic rays colliding with Earth's upper atmosphere continuously generate high-speed muons. Because of Einstein's special relativity (time dilation), they survive long enough to reach the ground and pass through us."
    },
    physicsDetails: {
      fieldTheoryContext: "Second-generation charged lepton. Decays purely through the electroweak V-A interaction into an electron and two neutrinos. Its precision lifetime and magnetic anomaly provide benchmark tests of the Standard Model.",
      keyProperties: "Lifetime τ ≈ 2.197 μs is exceptionally long on particle timescales because the weak force is weak and the mass is relatively small."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "Zero color charge." },
      { name: "Electromagnetic Force", acts: true, detail: "Interacts like an electron; can form 'muonic atoms' by replacing orbital electrons." },
      { name: "Weak Force", acts: true, detail: "Decays into an electron via virtual W- boson emission." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Yukawa coupling ~207 times larger than that of the electron." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Unstable; mean lifetime of ~2.2 microseconds.",
      lifetime: "2.1969811 μs (2.197 × 10⁻⁶ s)",
      lifetimeLatex: "\\tau = (2.1969811 \\pm 0.0000022) \\times 10^{-6}\\text{ s}",
      decayModes: [
        {
          channel: "\\mu^- \\to e^- + \\bar{\\nu}_e + \\nu_\\mu",
          branchingRatio: "≈ 100%",
          description: "Standard three-body leptonic weak decay."
        },
        {
          channel: "\\mu^- \\to e^- + \\bar{\\nu}_e + \\nu_\\mu + \\gamma",
          branchingRatio: "1.4 ± 0.4%",
          description: "Radiative muon decay with internal bremsstrahlung."
        }
      ],
      production: "Charged pion decay (π⁻ -> μ⁻ + ν̄_μ) in cosmic ray showers and accelerator beamlines."
    },
    sources: [
      {
        title: "PDG Leptons Summary: Muon",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-leptons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "Fermilab Muon g-2 Experiment",
        url: "https://muon-g-2.fnal.gov/",
        organization: "Fermi National Accelerator Laboratory",
        attribution: "Muon g-2 Collaboration."
      }
    ]
  },
  {
    id: "muon-neutrino",
    name: "Muon Neutrino",
    symbol: "ν_μ",
    symbolLatex: "\\nu_\\mu",
    category: "lepton",
    categoryLabel: "Lepton",
    generation: 2,
    canonicalGrid: { col: 3, row: 5 },
    mass: "< 0.19 MeV/c² (kinematic bound)",
    massLatex: "< 0.19\\text{ MeV}/c^2",
    charge: "0",
    chargeLatex: "0",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "None",
    weakIsospin: "+1/2 (left-handed)",
    weakIsospinLatex: "+\\frac{1}{2}",
    hypercharge: "-1",
    hyperchargeLatex: "-1",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like neutral lepton)",
      clarificationNote: "A fundamental neutral lepton paired with the muon. Led to the 1988 Nobel Prize in Physics when Leon Lederman, Melvin Schwartz, and Jack Steinberger proved it was distinct from the electron neutrino."
    },
    plainEnglish: {
      summary: "The second-generation neutral neutrino. Produced in huge quantities by cosmic rays in the atmosphere and in accelerator beam dumps.",
      roleInUniverse: "Essential in the discovery of neutrino oscillations: measurements of atmospheric muon neutrinos disappearing on their way through Earth proved neutrinos have non-zero mass."
    },
    physicsDetails: {
      fieldTheoryContext: "Flavor eigenstate paired with the muon in SU(2)_L doublets. Interacts through W± and Z⁰ exchanges.",
      keyProperties: "Atmospheric muon neutrino disappearance was famously confirmed by Super-Kamiokande in Japan (1998)."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "No strong interaction." },
      { name: "Electromagnetic Force", acts: false, detail: "No charge." },
      { name: "Weak Force", acts: true, detail: "Exclusively interacts through weak currents." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Gravitational interaction only." }
    ],
    decayAndProduction: {
      isStable: true,
      stabilityNote: "Oscillates into tau and electron neutrino states.",
      lifetime: "Stable against free vacuum decay",
      lifetimeLatex: "\\tau > 10^{20}\\text{ s}",
      decayModes: [
        {
          channel: "\\nu_\\mu \\leftrightarrow \\nu_\\tau",
          branchingRatio: "Oscillation",
          description: "Primary atmospheric neutrino oscillation channel."
        }
      ],
      production: "Decays of charged pions (π+ -> μ+ + ν_μ) and kaons."
    },
    sources: [
      {
        title: "Super-Kamiokande Neutrino Oscillation Evidence",
        url: "http://www-sk.icrr.u-tokyo.ac.jp/sk/index-e.html",
        organization: "Institute for Cosmic Ray Research, Univ. of Tokyo",
        attribution: "Super-Kamiokande Collaboration, Phys. Rev. Lett. 81, 1562 (1998)."
      },
      {
        title: "PDG Leptons Summary: Neutrinos",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-leptons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      }
    ]
  },
  {
    id: "tau",
    name: "Tau",
    symbol: "τ⁻",
    symbolLatex: "\\tau^-",
    category: "lepton",
    categoryLabel: "Lepton",
    generation: 3,
    canonicalGrid: { col: 4, row: 4 },
    mass: "1776.86 ± 0.12 MeV/c²",
    massLatex: "1776.86 \\pm 0.12\\text{ MeV}/c^2",
    charge: "-1 e",
    chargeLatex: "-1e",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "None",
    weakIsospin: "-1/2 (left-handed)",
    weakIsospinLatex: "-\\frac{1}{2}",
    hypercharge: "-1",
    hyperchargeLatex: "-1",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like fundamental lepton)",
      clarificationNote: "A third-generation fundamental lepton discovered in 1975 by Martin Perl at SLAC. It is the only lepton heavy enough to decay into hadrons (mesons)."
    },
    plainEnglish: {
      summary: "The heavyweight champion of leptons. It weighs nearly 3,500 times more than an electron (almost twice as heavy as a proton), but lives for less than a trillionth of a second.",
      roleInUniverse: "Because of its huge mass, it is the only lepton that can decay into quarks (hadrons like pions), bridging leptonic and hadronic physics."
    },
    physicsDetails: {
      fieldTheoryContext: "Third-generation charged lepton. Decays via virtual W- emission into either lighter leptons or quark-antiquark pairs (which manifest as pions, kaons, or rho mesons).",
      keyProperties: "Tests lepton universality (the principle that the weak force treats e, μ, and τ with identical coupling strengths)."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "Is a lepton; does not carry color charge." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries electric charge -1 e." },
      { name: "Weak Force", acts: true, detail: "Mediates rapid decay into lighter leptons or hadrons." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Substantial Yukawa coupling (giving 1.777 GeV mass)." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Extremely short-lived.",
      lifetime: "2.903 × 10⁻¹³ seconds",
      lifetimeLatex: "\\tau = (2.903 \\pm 0.005) \\times 10^{-13}\\text{ s}",
      decayModes: [
        {
          channel: "\\tau^- \\to \\text{hadrons} + \\nu_\\tau",
          branchingRatio: "64.8%",
          description: "Decays into mesons (π⁻, π⁻π⁰, 3π) + tau neutrino."
        },
        {
          channel: "\\tau^- \\to e^- + \\bar{\\nu}_e + \\nu_\\tau",
          branchingRatio: "17.8%",
          description: "Leptonic decay to electron."
        },
        {
          channel: "\\tau^- \\to \\mu^- + \\bar{\\nu}_\\mu + \\nu_\\tau",
          branchingRatio: "17.4%",
          description: "Leptonic decay to muon."
        }
      ],
      production: "Produced in e+ e- colliders (SPEAR at SLAC, Belle II) and proton colliders (LHC) via Z⁰ or photon exchange."
    },
    sources: [
      {
        title: "PDG Leptons Summary: Tau",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-leptons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "Nobel Prize in Physics 1995: Discovery of Tau Lepton",
        url: "https://www.nobelprize.org/prizes/physics/1995/summary/",
        organization: "Nobel Media",
        attribution: "Awarded to Martin L. Perl."
      }
    ]
  },
  {
    id: "tau-neutrino",
    name: "Tau Neutrino",
    symbol: "ν_τ",
    symbolLatex: "\\nu_\\tau",
    category: "lepton",
    categoryLabel: "Lepton",
    generation: 3,
    canonicalGrid: { col: 4, row: 5 },
    mass: "< 18.2 MeV/c² (kinematic bound)",
    massLatex: "< 18.2\\text{ MeV}/c^2",
    charge: "0",
    chargeLatex: "0",
    spin: "1/2",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "None",
    weakIsospin: "+1/2 (left-handed)",
    weakIsospinLatex: "+\\frac{1}{2}",
    hypercharge: "-1",
    hyperchargeLatex: "-1",
    structure: {
      isElementary: true,
      type: "Elementary (Fundamental Particle)",
      constituents: "None (Point-like neutral lepton)",
      clarificationNote: "The final fundamental fermion of the Standard Model to be directly observed, confirmed by the DONUT experiment at Fermilab in 2000."
    },
    plainEnglish: {
      summary: "The third neutrino flavor. It was the last particle of matter in the Standard Model to be detected in an experiment.",
      roleInUniverse: "Completes the third generation of fundamental fermions, confirming the three-family structure of the universe required to explain matter-antimatter differences."
    },
    physicsDetails: {
      fieldTheoryContext: "Third-generation neutral lepton weak eigenstate. Detected by observing the distinctive kink created when it interacts with an atomic nucleus to produce a tau lepton, which decays in millimeters.",
      keyProperties: "Participates solely in electroweak weak-neutral and weak-charged current interactions."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "Zero color charge." },
      { name: "Electromagnetic Force", acts: false, detail: "No charge." },
      { name: "Weak Force", acts: true, detail: "Interacts via W± and Z⁰ exchanges." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Gravitational interaction." }
    ],
    decayAndProduction: {
      isStable: true,
      stabilityNote: "Stable against free vacuum decay; undergoes flavor oscillation.",
      lifetime: "Stable against free decay",
      lifetimeLatex: "\\tau > 10^{20}\\text{ s}",
      decayModes: [
        {
          channel: "\\nu_\\tau \\leftrightarrow \\nu_\\mu \\leftrightarrow \\nu_e",
          branchingRatio: "Oscillation",
          description: "Neutrino flavor oscillation."
        }
      ],
      production: "Tau lepton decays (τ- -> ν_τ + X) and D_s meson decays in high energy collisions."
    },
    sources: [
      {
        title: "DONUT Experiment: Direct Observation of the Tau Neutrino",
        url: "https://news.fnal.gov/2000/07/physicists-find-first-direct-evidence-for-tau-neutrino-at-fermilab/",
        organization: "Fermi National Accelerator Laboratory",
        attribution: "DONUT Collaboration, Phys. Lett. B 504 (2001)."
      },
      {
        title: "PDG Leptons Summary",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-leptons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      }
    ]
  }
];
