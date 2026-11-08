/**
 * Standard Model - Composite Particles / Hadrons Module
 * Includes Baryons (3 quarks) and Mesons (quark + antiquark).
 * All values verified against Particle Data Group (PDG 2024).
 */

export const composites = [
  {
    id: "proton",
    name: "Proton",
    symbol: "p / p⁺",
    symbolLatex: "p",
    category: "hadron-baryon",
    categoryLabel: "Composite: Baryon",
    generation: null,
    mass: "938.272088 MeV/c² (1.67262 × 10⁻²⁷ kg)",
    massLatex: "938.272088\\text{ MeV}/c^2",
    charge: "+1 e",
    chargeLatex: "+1e",
    spin: "1/2 (Fermion)",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "Color neutral (Color singlet: red + green + blue = white)",
    weakIsospin: "+1/2 (Nucleon isospin doublet)",
    weakIsospinLatex: "+\\frac{1}{2}",
    hypercharge: "+1",
    hyperchargeLatex: "+1",
    structure: {
      isElementary: false,
      type: "Composite Hadron (Baryon)",
      constituents: "uud (Two up quarks + one down quark)",
      constituentsLatex: "uud",
      clarificationNote: "COMPOSITE PARTICLE: The proton is NOT elementary. It has an internal radius of ~0.84 femtometers. Its charge (+1 e) arises from summing its valence quarks: (+2/3) + (+2/3) + (-1/3) = +1. Most of its mass (938 MeV) does NOT come from the quarks themselves (which only add up to ~9 MeV), but from the relativistic kinetic energy and color field energy of the gluons binding them together."
    },
    plainEnglish: {
      summary: "The positively charged nucleus of hydrogen and the anchor of all chemical elements. The atomic number of an element is the number of protons in its nucleus.",
      roleInUniverse: "Protons are the only stable composite baryons in isolation. Without stable protons, atoms could not exist, and the universe would be a featureless soup of radiation."
    },
    physicsDetails: {
      fieldTheoryContext: "A color-singlet bound state of valence quarks uud immersed in a 'sea' of virtual gluons and quark-antiquark pairs. The structure function is mapped via deep inelastic scattering (DIS).",
      keyProperties: "Baryon number B = 1. Conserved under Standard Model interactions; Grand Unified Theories (GUTs) predict proton decay, but experiment has confirmed its stability to extreme precision."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Valence quarks held together by color gluons; exerts residual nuclear force on other nucleons via pion exchange." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries net charge +1 e; repels other protons via Coulomb force." },
      { name: "Weak Force", acts: true, detail: "Participates in weak nuclear reactions (e.g., pp solar fusion: p + p -> d + e+ + ν_e)." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Has gravitational mass ~1.67 × 10⁻²⁷ kg; quark constituent masses come from Higgs, but 99% of proton mass is QCD binding energy." }
    ],
    decayAndProduction: {
      isStable: true,
      stabilityNote: "Completely stable as a free particle.",
      lifetime: "Stable (experimental lower limit > 1.6 × 10³⁴ years for p -> e+ π⁰)",
      lifetimeLatex: "\\tau > 1.6 \\times 10^{34}\\text{ years}",
      decayModes: [
        {
          channel: "\\text{None (Stable in Standard Model)}",
          branchingRatio: "Stable",
          description: "Baryon number conservation forbids decay into lighter particles (since the proton is the lightest baryon)."
        }
      ],
      production: "Formed during primordial Big Bang baryogenesis / quark-gluon plasma freeze-out (~10 microseconds after the Big Bang)."
    },
    sources: [
      {
        title: "PDG Baryons Summary: Proton",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-baryons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "HyperPhysics: The Proton",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/Particles/proton.html",
        organization: "Georgia State University",
        attribution: "Dr. C.R. Nave."
      }
    ]
  },
  {
    id: "neutron",
    name: "Neutron",
    symbol: "n / n⁰",
    symbolLatex: "n",
    category: "hadron-baryon",
    categoryLabel: "Composite: Baryon",
    generation: null,
    mass: "939.565420 MeV/c² (1.67493 × 10⁻²⁷ kg)",
    massLatex: "939.565420\\text{ MeV}/c^2",
    charge: "0 (< -2 × 10⁻²⁶ e)",
    chargeLatex: "0",
    spin: "1/2 (Fermion)",
    spinLatex: "\\frac{1}{2}",
    colorCharge: "Color neutral (Color singlet)",
    weakIsospin: "-1/2 (Nucleon isospin doublet)",
    weakIsospinLatex: "-\\frac{1}{2}",
    hypercharge: "+1",
    hyperchargeLatex: "+1",
    structure: {
      isElementary: false,
      type: "Composite Hadron (Baryon)",
      constituents: "udd (One up quark + two down quarks)",
      constituentsLatex: "udd",
      clarificationNote: "COMPOSITE PARTICLE: The neutron is electrically neutral, but it has internal electric structure! Its quarks are (+2/3) + (-1/3) + (-1/3) = 0. Because it has charged quarks moving inside it, it possesses a magnetic moment (μ_n ≈ -1.91 μ_N), proving it is NOT a simple elementary point particle."
    },
    plainEnglish: {
      summary: "The neutral building block inside atomic nuclei. Together with protons, neutrons form atomic nuclei, providing the 'nuclear glue' that overcomes the electrostatic repulsion between protons.",
      roleInUniverse: "Inside a stable nucleus, neutrons live forever. But when separated on its own outside a nucleus, a free neutron is unstable and decays in about 15 minutes."
    },
    physicsDetails: {
      fieldTheoryContext: "First-generation isospin partner to the proton (I = 1/2, I3 = -1/2). Slightly heavier than the proton (by ~1.293 MeV), which kinematically permits beta decay in vacuum.",
      keyProperties: "Beta decay: one of its down quarks emits a virtual W- boson and turns into an up quark, converting the neutron into a proton, an electron, and an antineutrino."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Quarks bound by gluons; transmits strong nuclear force to neighboring protons and neutrons." },
      { name: "Electromagnetic Force", acts: true, detail: "Net charge is zero, but has a non-zero magnetic dipole moment due to constituent quark charges and currents." },
      { name: "Weak Force", acts: true, detail: "Responsible for beta decay of free neutrons and unstable isotopes." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Gravitational mass is ~1.29 MeV heavier than the proton." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Unstable in vacuum (decays in ~14.6 minutes); stable inside many bound atomic nuclei.",
      lifetime: "878.4 ± 0.5 seconds (~14.6 minutes)",
      lifetimeLatex: "\\tau = 878.4 \\pm 0.5\\text{ s}",
      decayModes: [
        {
          channel: "n \\to p + e^- + \\bar{\\nu}_e",
          branchingRatio: "100%",
          description: "Beta-minus decay converting udd to uud."
        }
      ],
      production: "Produced in nuclear reactors, spallation neutron sources, and cosmic ray air showers."
    },
    sources: [
      {
        title: "PDG Baryons Summary: Neutron",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-baryons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "HyperPhysics: The Neutron",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/Particles/neutron.html",
        organization: "Georgia State University",
        attribution: "Dr. C.R. Nave."
      }
    ]
  },
  {
    id: "pion-plus",
    name: "Positive Pion",
    symbol: "π⁺",
    symbolLatex: "\\pi^+",
    category: "hadron-meson",
    categoryLabel: "Composite: Meson",
    generation: null,
    mass: "139.57039 ± 0.00018 MeV/c²",
    massLatex: "139.57039\\text{ MeV}/c^2",
    charge: "+1 e",
    chargeLatex: "+1e",
    spin: "0 (Pseudoscalar Boson, J^P = 0⁻)",
    spinLatex: "0^-",
    colorCharge: "Color neutral (Color singlet: color + anticolor)",
    weakIsospin: "+1 (Pion isospin triplet I = 1)",
    weakIsospinLatex: "+1",
    hypercharge: "0",
    hyperchargeLatex: "0",
    structure: {
      isElementary: false,
      type: "Composite Hadron (Meson)",
      constituents: "u d̄ (Up quark + anti-down quark)",
      constituentsLatex: "u\\bar{d}",
      clarificationNote: "COMPOSITE MESON: Mesons are made of a quark and an antiquark. The positive pion has an up quark (+2/3) and an anti-down quark (charge -(-1/3) = +1/3), giving total charge +1. Because it is a quark-antiquark bound state, its total spin is 0 (a boson!)."
    },
    plainEnglish: {
      summary: "The lightest meson. In 1935, Hideki Yukawa predicted its existence as the 'messenger particle' that carries the residual strong nuclear force binding protons and neutrons together in atomic nuclei.",
      roleInUniverse: "Acts as the mediator of the residual strong nuclear force at distances around 1 femtometer, allowing atomic nuclei to stay together against electrostatic repulsion."
    },
    physicsDetails: {
      fieldTheoryContext: "The pseudo-Goldstone boson of spontaneous chiral symmetry breaking in QCD. If the up and down quarks were strictly massless, the pion would be strictly massless.",
      keyProperties: "Decays weakly into a muon and a muon neutrino due to helicity suppression, which strongly disfavors decay into an electron."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Made of quarks bound by gluons; acts as the exchange particle of the nuclear force." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries electric charge +1 e." },
      { name: "Weak Force", acts: true, detail: "Mediates its decay into leptons." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Gravitational mass is ~139.6 MeV." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Unstable; decays via the weak interaction.",
      lifetime: "2.6033 × 10⁻⁸ seconds (26.03 ns)",
      lifetimeLatex: "\\tau = (2.6033 \\pm 0.0005) \\times 10^{-8}\\text{ s}",
      decayModes: [
        {
          channel: "\\pi^+ \\to \\mu^+ + \\nu_\\mu",
          branchingRatio: "99.9877%",
          description: "Dominant decay pathway due to helicity suppression of electron mode."
        },
        {
          channel: "\\pi^+ \\to e^+ + \\nu_e",
          branchingRatio: "0.0123%",
          description: "Helicity-suppressed electron channel."
        }
      ],
      production: "Produced in proton-proton collisions in accelerators and cosmic ray impacts on atmospheric nuclei (p + p -> p + n + π+)."
    },
    sources: [
      {
        title: "PDG Mesons Summary: Pions",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-mesons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "HyperPhysics: Pions",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/Particles/pion.html",
        organization: "Georgia State University",
        attribution: "Dr. C.R. Nave."
      }
    ]
  },
  {
    id: "pion-zero",
    name: "Neutral Pion",
    symbol: "π⁰",
    symbolLatex: "\\pi^0",
    category: "hadron-meson",
    categoryLabel: "Composite: Meson",
    generation: null,
    mass: "134.9768 ± 0.0005 MeV/c²",
    massLatex: "134.9768 \\pm 0.0005\\text{ MeV}/c^2",
    charge: "0",
    chargeLatex: "0",
    spin: "0 (Pseudoscalar Boson, J^PC = 0⁻⁺)",
    spinLatex: "0^{-+}",
    colorCharge: "Color neutral",
    weakIsospin: "0 (I = 1, I3 = 0)",
    weakIsospinLatex: "0",
    hypercharge: "0",
    hyperchargeLatex: "0",
    structure: {
      isElementary: false,
      type: "Composite Hadron (Meson)",
      constituents: "(u ū - d d̄) / √2 (Quantum superposition)",
      constituentsLatex: "\\frac{u\\bar{u} - d\\bar{d}}{\\sqrt{2}}",
      clarificationNote: "COMPOSITE MESON: A neutral quark-antiquark pair. Because it is its own antiparticle, it does NOT need to decay through the weak force; it annihilates rapidly into two photons via the electromagnetic interaction."
    },
    plainEnglish: {
      summary: "The neutral partner of the charged pion. It is the shortest-lived composite hadron in everyday physics, decaying into two photons in less than a tenth of a femtosecond.",
      roleInUniverse: "Primary source of high-energy gamma rays from deep space: when cosmic rays collide with interstellar gas clouds, they produce π⁰ mesons that instantly decay into gamma-ray photons."
    },
    physicsDetails: {
      fieldTheoryContext: "Decays electromagnetically via the Adler-Bell-Jackiw (ABJ) chiral anomaly in QED (π⁰ -> γγ), which historically provided the first experimental proof that quarks have 3 color charges (the decay rate is proportional to N_c² = 9).",
      keyProperties: "Neutral pseudoscalar with J^PC = 0⁻⁺."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Binds quarks; mediates nuclear forces." },
      { name: "Electromagnetic Force", acts: true, detail: "Drives rapid two-photon annihilation decay via the ABJ triangle anomaly." },
      { name: "Weak Force", acts: false, detail: "Electromagnetic decay dominates by many orders of magnitude." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Gravitational mass is ~135 MeV." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Decays electromagnetically in 8.4 × 10⁻¹⁷ seconds.",
      lifetime: "8.43 × 10⁻¹⁷ seconds (0.084 fs)",
      lifetimeLatex: "\\tau = (8.43 \\pm 0.13) \\times 10^{-17}\\text{ s}",
      decayModes: [
        {
          channel: "\\pi^0 \\to \\gamma + \\gamma",
          branchingRatio: "98.823%",
          description: "Electromagnetic annihilation into two gamma photons."
        },
        {
          channel: "\\pi^0 \\to e^+ + e^- + \\gamma",
          branchingRatio: "1.174% (Dalitz decay)",
          description: "Internal photon conversion into an electron-positron pair."
        }
      ],
      production: "Universal product of high-energy hadronic collisions and cosmic ray atmospheric cascades."
    },
    sources: [
      {
        title: "PDG Mesons Summary: Neutral Pion",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-mesons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "HyperPhysics: Neutral Pion Decay",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/Particles/pion.html#c3",
        organization: "Georgia State University",
        attribution: "Dr. C.R. Nave."
      }
    ]
  },
  {
    id: "kaon-plus",
    name: "Positive Kaon",
    symbol: "K⁺",
    symbolLatex: "K^+",
    category: "hadron-meson",
    categoryLabel: "Composite: Meson",
    generation: null,
    mass: "493.677 ± 0.016 MeV/c²",
    massLatex: "493.677 \\pm 0.016\\text{ MeV}/c^2",
    charge: "+1 e",
    chargeLatex: "+1e",
    spin: "0 (Pseudoscalar Boson, J^P = 0⁻)",
    spinLatex: "0^-",
    colorCharge: "Color neutral",
    weakIsospin: "+1/2 (Isospin doublet with K⁰)",
    weakIsospinLatex: "+\\frac{1}{2}",
    hypercharge: "+1 (Strangeness S = +1)",
    hyperchargeLatex: "+1",
    structure: {
      isElementary: false,
      type: "Composite Hadron (Meson)",
      constituents: "u s̄ (Up quark + anti-strange quark)",
      constituentsLatex: "u\\bar{s}",
      clarificationNote: "COMPOSITE STRANGE MESON: Contains a strange antiquark (s̄ has strangeness +1 and electric charge +1/3). Together with the up quark (+2/3), total charge is +1. Historical study of kaon decays led to the groundbreaking discovery that nature violates parity (mirror symmetry) and CP symmetry."
    },
    plainEnglish: {
      summary: "A meson carrying the 'strange' property. Kaons were the key that unlocked fundamental surprises in physics, proving that nature treats left and right differently, and matter and antimatter differently.",
      roleInUniverse: "Crucial experimental laboratory for quantum mechanics: the θ-τ puzzle in kaons revealed parity violation in 1956, and neutral kaons revealed CP violation in 1964."
    },
    physicsDetails: {
      fieldTheoryContext: "Pseudoscalar meson containing one second-generation quark. Decays via the weak interaction converting the strange quark to an up quark through CKM matrix element V_us.",
      keyProperties: "Parity violation was proved by C.S. Wu and suggested by Lee and Yang from Kaon decays into both 2 pions (parity +) and 3 pions (parity -)."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "Bound by color force; produced via strong interaction (conserving strangeness)." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries electric charge +1 e." },
      { name: "Weak Force", acts: true, detail: "Mediates decay (violates strangeness: ΔS = 1)." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Mass is ~493.7 MeV." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Decays via the weak interaction with a 12.38 ns lifetime.",
      lifetime: "1.2380 × 10⁻⁸ seconds (12.38 ns)",
      lifetimeLatex: "\\tau = (1.2380 \\pm 0.0020) \\times 10^{-8}\\text{ s}",
      decayModes: [
        {
          channel: "K^+ \\to \\mu^+ + \\nu_\\mu",
          branchingRatio: "63.56%",
          description: "Leptonic decay analogous to pion decay."
        },
        {
          channel: "K^+ \\to \\pi^+ + \\pi^0",
          branchingRatio: "20.67%",
          description: "Hadronic two-body decay."
        },
        {
          channel: "K^+ \\to \\pi^+ + \\pi^+ + \\pi^-",
          branchingRatio: "5.58%",
          description: "Three-body hadronic decay."
        }
      ],
      production: "Associated production in high energy collisions: π⁻ + p -> K⁺ + Σ⁻."
    },
    sources: [
      {
        title: "PDG Mesons Summary: Strange Mesons (Kaons)",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-mesons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "HyperPhysics: Kaons",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/Particles/kaon.html",
        organization: "Georgia State University",
        attribution: "Dr. C.R. Nave."
      }
    ]
  }
];
