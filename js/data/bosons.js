/**
 * Standard Model - Bosons (Gauge and Scalar) Data Module
 * All values verified against Particle Data Group (PDG 2024 / Review of Particle Physics).
 */

export const bosons = [
  {
    id: "photon",
    name: "Photon",
    symbol: "γ",
    symbolLatex: "\\gamma",
    category: "gauge-boson",
    categoryLabel: "Gauge Boson",
    generation: null,
    canonicalGrid: { col: 5, row: 3 },
    mass: "0 (exact theoretical; experimental upper limit < 1 × 10⁻¹⁸ eV/c²)",
    massLatex: "0\\text{ (limit } < 1 \\times 10^{-18}\\text{ eV}/c^2)",
    charge: "0 (< 1 × 10⁻³⁵ e)",
    chargeLatex: "0",
    spin: "1",
    spinLatex: "1",
    colorCharge: "None (Color singlet)",
    weakIsospin: "0 (Electroweak gauge eigenstate Bμ / W³ mixture)",
    weakIsospinLatex: "0",
    hypercharge: "0",
    hyperchargeLatex: "0",
    structure: {
      isElementary: true,
      type: "Elementary Gauge Boson",
      constituents: "None (Point-like fundamental vector boson)",
      clarificationNote: "COMMON MISCONCEPTION: A photon is NOT made of quarks! It is a fundamental, elementary force carrier (gauge boson) of the electromagnetic force. Quarks make up hadrons (like protons, neutrons, and pions). Photons have no constituent particles, no quark contents, and no electric charge."
    },
    plainEnglish: {
      summary: "The quantum of light. The photon is the elementary particle that carries the electromagnetic force, which holds atoms together and gives us light, radio, WiFi, and X-rays.",
      roleInUniverse: "Everything we see is carried by photons. Photons mediate the electrostatic forces that prevent your hand from falling through a table and enable all chemistry and biology."
    },
    physicsDetails: {
      fieldTheoryContext: "The massless U(1)_EM gauge boson in Quantum Electrodynamics (QED). Arises after spontaneous symmetry breaking of SU(2)_L × U(1)_Y via the Weinberg angle: A_μ = B_μ cos θ_W + W³_μ sin θ_W.",
      keyProperties: "Massless vector boson (spin 1). Possesses two transverse polarization states (helicity ±1); longitudinal polarization is unphysical due to exact U(1) gauge invariance."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "Does not carry color charge." },
      { name: "Electromagnetic Force", acts: true, detail: "MEDIATES the electromagnetic force between all electrically charged particles (quarks, charged leptons, W bosons)." },
      { name: "Weak Force", acts: false, detail: "Uncharged under SU(2)_L at tree level, but mixes with neutral electroweak current." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Curves spacetime according to General Relativity (gravitational lensing of light). Does not couple directly to the Higgs field (no mass)." }
    ],
    decayAndProduction: {
      isStable: true,
      stabilityNote: "Completely stable in vacuum.",
      lifetime: "Infinite / Stable",
      lifetimeLatex: "\\tau = \\infty",
      decayModes: [
        {
          channel: "\\text{None (Massless)}",
          branchingRatio: "Stable",
          description: "A photon has zero rest mass and travels at the speed of light c; its proper time is zero."
        }
      ],
      production: "Emitted when electrons drop energy levels in atoms, in particle-antiparticle annihilation (e+ + e- -> 2γ), and in neutral pion decay (π⁰ -> 2γ)."
    },
    sources: [
      {
        title: "PDG Gauge Bosons: Photon",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-gauge-higgs-bosons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024 Summary Table of Gauge and Higgs Bosons."
      },
      {
        title: "HyperPhysics: The Photon",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/phpar.html",
        organization: "Georgia State University",
        attribution: "Dr. C.R. Nave."
      },
      {
        title: "CERN: The Standard Model",
        url: "https://home.cern/science/physics/standard-model",
        organization: "CERN",
        attribution: "CERN Public Physics Guide."
      }
    ]
  },
  {
    id: "gluon",
    name: "Gluon",
    symbol: "g",
    symbolLatex: "g",
    category: "gauge-boson",
    categoryLabel: "Gauge Boson",
    generation: null,
    canonicalGrid: { col: 5, row: 2 },
    mass: "0 (theoretical; experimental limit < a few MeV/c²)",
    massLatex: "0",
    charge: "0",
    chargeLatex: "0",
    spin: "1",
    spinLatex: "1",
    colorCharge: "Carries color + anticolor (8 distinct color states / color octet)",
    weakIsospin: "0",
    weakIsospinLatex: "0",
    hypercharge: "0",
    hyperchargeLatex: "0",
    structure: {
      isElementary: true,
      type: "Elementary Gauge Boson",
      constituents: "None (Point-like vector boson)",
      clarificationNote: "An elementary gauge boson that carries the strong force. Unlike photons (which carry no electric charge), gluons themselves carry the very color charge they mediate! This causes gluons to interact with other gluons, creating a powerful 'color rope' or flux tube that traps quarks permanently inside hadrons."
    },
    plainEnglish: {
      summary: "The subatomic 'glue' that binds quarks together inside protons and neutrons, and binds protons and neutrons inside atomic nuclei.",
      roleInUniverse: "Almost all the visible mass of your body and the universe is NOT from the Higgs field, but from the binding energy of gluons flitting between quarks inside protons and neutrons (E = mc²)."
    },
    physicsDetails: {
      fieldTheoryContext: "The eight massless gauge bosons associated with the unbroken SU(3)_color gauge symmetry in Quantum Chromodynamics (QCD). Non-Abelian gauge theory dictates self-interaction (3-gluon and 4-gluon vertices).",
      keyProperties: "Self-interaction leads to asymptotic freedom (interaction gets weaker at high energies / short distances) and color confinement (energy increases with separation, preventing isolated free quarks or gluons)."
    },
    forces: [
      { name: "Strong Force", acts: true, detail: "MEDIATES the strong force between quarks and gluons. Forms the strong nuclear force (residual color force) via pion exchange." },
      { name: "Electromagnetic Force", acts: false, detail: "Zero electric charge." },
      { name: "Weak Force", acts: false, detail: "Zero weak isospin." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Couples to gravity via stress-energy tensor. Zero mass, so no direct Higgs Yukawa coupling." }
    ],
    decayAndProduction: {
      isStable: true,
      stabilityNote: "Confined inside hadrons or emitted in high-energy collisions as hadronic jets.",
      lifetime: "Confined (does not exist as a free isolated particle)",
      lifetimeLatex: "\\text{Confined by QCD}",
      decayModes: [
        {
          channel: "g \\to q + \\bar{q} \\text{ or } g + g",
          branchingRatio: "Hadronization / Showering",
          description: "A high-energy gluon splits into quark-antiquark pairs or gluons, producing a jet of hadrons."
        }
      ],
      production: "Directly detected in 1979 at DESY (PETRA accelerator) via three-jet events in e+ e- annihilation (e+ e- -> q q̄ g)."
    },
    sources: [
      {
        title: "PDG Gauge Bosons: Gluon",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-gauge-higgs-bosons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "DESY: Discovery of the Gluon (1979)",
        url: "https://www.desy.de/research/facilities__projects/petra/gluon_discovery/index_eng.html",
        organization: "Deutsches Elektronen-Synchrotron (DESY)",
        attribution: "TASSO, MARK-J, PLUTO, and JADE collaborations at PETRA."
      }
    ]
  },
  {
    id: "w-boson",
    name: "W Boson",
    symbol: "W±",
    symbolLatex: "W^\\pm",
    category: "gauge-boson",
    categoryLabel: "Gauge Boson",
    generation: null,
    canonicalGrid: { col: 5, row: 5 },
    mass: "80.3692 ± 0.0131 GeV/c²",
    massLatex: "80.3692 \\pm 0.0131\\text{ GeV}/c^2",
    charge: "+1 e or -1 e",
    chargeLatex: "\\pm 1e",
    spin: "1",
    spinLatex: "1",
    colorCharge: "None",
    weakIsospin: "±1",
    weakIsospinLatex: "\\pm 1",
    hypercharge: "0",
    hyperchargeLatex: "0",
    structure: {
      isElementary: true,
      type: "Elementary Gauge Boson",
      constituents: "None (Fundamental massive vector boson)",
      clarificationNote: "An elementary carrier of the weak force. Because it is charged, it changes the flavor of quarks and leptons (e.g. converting a down quark into an up quark, or an electron into an electron neutrino)."
    },
    plainEnglish: {
      summary: "The heavy force carrier responsible for radioactive decay and initiating the nuclear fusion that makes the Sun shine.",
      roleInUniverse: "Without the W boson, the Sun could not burn hydrogen into helium, and nuclear beta decay could not occur. It weighs over 80 times more than a proton, making the weak force extremely short-ranged."
    },
    physicsDetails: {
      fieldTheoryContext: "Massive gauge bosons corresponding to the charged generators W¹ and W² of the electroweak SU(2)_L gauge symmetry. Acquires mass through the Brout-Englert-Higgs mechanism (M_W = 1/2 g v, where v ≈ 246 GeV).",
      keyProperties: "Mediates charged-current weak interactions. Strictly couples only to left-handed chiral fermions (and right-handed antifermions), maximizing parity violation."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "Zero color charge." },
      { name: "Electromagnetic Force", acts: true, detail: "Carries electric charge ±1 e; couples to photons." },
      { name: "Weak Force", acts: true, detail: "MEDIATES the charged weak force." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Directly couples to the Higgs field via gauge-Higgs covariant derivative terms." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Extremely heavy and short-lived; decays in 3 × 10⁻²⁵ seconds.",
      lifetime: "3.16 × 10⁻²⁵ seconds",
      lifetimeLatex: "\\tau \\approx 3.16 \\times 10^{-25}\\text{ s}",
      decayModes: [
        {
          channel: "W^+ \\to \\text{hadrons } (q \\bar{q}')",
          branchingRatio: "67.41 ± 0.27%",
          description: "Decays into quark-antiquark pairs (ud̄, cs̄)."
        },
        {
          channel: "W^+ \\to e^+ + \\nu_e",
          branchingRatio: "10.71 ± 0.16%",
          description: "Leptonic decay to positron."
        },
        {
          channel: "W^+ \\to \\mu^+ + \\nu_\\mu",
          branchingRatio: "10.63 ± 0.15%",
          description: "Leptonic decay to positive muon."
        },
        {
          channel: "W^+ \\to \\tau^+ + \\nu_\\tau",
          branchingRatio: "11.38 ± 0.21%",
          description: "Leptonic decay to tau."
        }
      ],
      production: "Discovered at CERN in 1983 by the UA1 and UA2 experiments at the Super Proton Synchrotron (SPS)."
    },
    sources: [
      {
        title: "PDG Gauge Bosons: W Boson",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-gauge-higgs-bosons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "Nobel Prize in Physics 1984: Discovery of W and Z",
        url: "https://www.nobelprize.org/prizes/physics/1984/summary/",
        organization: "Nobel Media",
        attribution: "Awarded to Carlo Rubbia and Simon van der Meer."
      }
    ]
  },
  {
    id: "z-boson",
    name: "Z Boson",
    symbol: "Z⁰",
    symbolLatex: "Z^0",
    category: "gauge-boson",
    categoryLabel: "Gauge Boson",
    generation: null,
    canonicalGrid: { col: 5, row: 4 },
    mass: "91.1876 ± 0.0021 GeV/c²",
    massLatex: "91.1876 \\pm 0.0021\\text{ GeV}/c^2",
    charge: "0",
    chargeLatex: "0",
    spin: "1",
    spinLatex: "1",
    colorCharge: "None",
    weakIsospin: "0 (Orthogonal mixture: W³ cos θ_W - Bμ sin θ_W)",
    weakIsospinLatex: "0",
    hypercharge: "0",
    hyperchargeLatex: "0",
    structure: {
      isElementary: true,
      type: "Elementary Gauge Boson",
      constituents: "None (Fundamental massive neutral vector boson)",
      clarificationNote: "An elementary carrier of the weak neutral current. Unlike the W boson, the Z boson does not carry electric charge, meaning it transfers momentum and energy without changing the flavor or charge of the particles involved."
    },
    plainEnglish: {
      summary: "The neutral partner of the W boson. It is heavy, neutral, and allows neutrinos to bounce off atomic nuclei without altering them.",
      roleInUniverse: "Measurements of the Z boson's width at LEP (CERN) proved conclusively that there are exactly THREE generations of light active neutrinos in our universe."
    },
    physicsDetails: {
      fieldTheoryContext: "Neutral weak gauge boson arising from the orthogonal linear combination of W³ and B fields: Z_μ = W³_μ cos θ_W - B_μ sin θ_W. Mass is related to W mass via M_Z = M_W / cos θ_W.",
      keyProperties: "Mediates weak neutral-current interactions. First observed in the Gargamelle bubble chamber at CERN in 1973."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "Zero color charge." },
      { name: "Electromagnetic Force", acts: false, detail: "Electrically neutral; no direct photon coupling." },
      { name: "Weak Force", acts: true, detail: "MEDIATES the neutral weak force." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Couples strongly to the Higgs field (M_Z = 1/2 √(g² + g'²) v)." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Extremely short-lived; total decay width Γ_Z = 2.4952 ± 0.0023 GeV.",
      lifetime: "2.64 × 10⁻²⁵ seconds",
      lifetimeLatex: "\\tau \\approx 2.64 \\times 10^{-25}\\text{ s}",
      decayModes: [
        {
          channel: "Z^0 \\to \\text{hadrons } (q \\bar{q})",
          branchingRatio: "69.91 ± 0.06%",
          description: "Decays into quark-antiquark pairs of all flavors except top."
        },
        {
          channel: "Z^0 \\to \\text{invisible } (\\sum \\nu \\bar{\\nu})",
          branchingRatio: "20.00 ± 0.06%",
          description: "Decays into three generations of neutrino pairs."
        },
        {
          channel: "Z^0 \\to e^+ + e^-",
          branchingRatio: "3.363 ± 0.004%",
          description: "Charged dielectron decay."
        },
        {
          channel: "Z^0 \\to \\mu^+ + \\mu^-",
          branchingRatio: "3.366 ± 0.007%",
          description: "Charged dimuon decay."
        },
        {
          channel: "Z^0 \\to \\tau^+ + \\tau^-",
          branchingRatio: "3.367 ± 0.008%",
          description: "Charged ditau decay."
        }
      ],
      production: "Resonantly produced at the Large Electron-Positron collider (LEP) and in pp collisions at the LHC."
    },
    sources: [
      {
        title: "PDG Gauge Bosons: Z Boson",
        url: "https://pdg.lbl.gov/2024/tables/rpp2024-sum-gauge-higgs-bosons.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024."
      },
      {
        title: "CERN LEP Experiments: Precision Electroweak Measurements",
        url: "https://home.cern/science/accelerators/large-electron-positron-collider",
        organization: "CERN",
        attribution: "ALEPH, DELPHI, L3, and OPAL collaborations."
      }
    ]
  },
  {
    id: "higgs-boson",
    name: "Higgs Boson",
    symbol: "H⁰",
    symbolLatex: "H^0",
    category: "scalar-boson",
    categoryLabel: "Scalar Boson",
    generation: null,
    canonicalGrid: { col: 6, row: 2 },
    mass: "125.25 ± 0.17 GeV/c²",
    massLatex: "125.25 \\pm 0.17\\text{ GeV}/c^2",
    charge: "0",
    chargeLatex: "0",
    spin: "0 (Scalar)",
    spinLatex: "0",
    colorCharge: "None",
    weakIsospin: "-1/2 (as part of the Higgs doublet)",
    weakIsospinLatex: "-\\frac{1}{2}",
    hypercharge: "+1",
    hyperchargeLatex: "+1",
    structure: {
      isElementary: true,
      type: "Elementary Scalar Boson",
      constituents: "None (Point-like spin-0 scalar boson)",
      clarificationNote: "The only elementary scalar particle (spin 0) known to physics. It is the physical excitation of the all-pervading Higgs field, which gives mass to elementary particles through spontaneous electroweak symmetry breaking."
    },
    plainEnglish: {
      summary: "The particle associated with the invisible Higgs field that permeates all of space. Discovered at CERN in 2012, completing the Standard Model.",
      roleInUniverse: "Without the Higgs field, electrons and quarks would be massless and travel at the speed of light. Atoms could never form, and chemistry, planets, and life would be impossible."
    },
    physicsDetails: {
      fieldTheoryContext: "The physical excitation remaining from the complex scalar doublet Φ after spontaneous symmetry breaking SU(2)_L × U(1)_Y → U(1)_EM. Three of the four degrees of freedom are 'eaten' by the W± and Z⁰ bosons to become their longitudinal polarizations (giving them mass).",
      keyProperties: "Couples to fermions proportionally to their mass (Yukawa coupling y_f = √2 m_f / v) and to vector bosons proportionally to their mass squared."
    },
    forces: [
      { name: "Strong Force", acts: false, detail: "Zero color charge (interacts with gluons only indirectly via top quark triangle loops)." },
      { name: "Electromagnetic Force", acts: false, detail: "Electrically neutral (interacts with photons via W and top loops: H -> γγ)." },
      { name: "Weak Force", acts: true, detail: "Couples directly to W± and Z⁰ bosons with high strength." },
      { name: "Gravity / Higgs Coupling", acts: true, detail: "Generates its own mass via self-interaction potential V(Φ) = μ²|Φ|² + λ|Φ|⁴." }
    ],
    decayAndProduction: {
      isStable: false,
      stabilityNote: "Decays almost immediately with a total width of ~4.1 MeV.",
      lifetime: "1.6 × 10⁻²² seconds",
      lifetimeLatex: "\\tau \\approx 1.6 \\times 10^{-22}\\text{ s}",
      decayModes: [
        {
          channel: "H^0 \\to b + \\bar{b}",
          branchingRatio: "58.2%",
          description: "Dominant decay mode because b is the heaviest kinematically accessible fermion."
        },
        {
          channel: "H^0 \\to W + W^*",
          branchingRatio: "21.4%",
          description: "Decay to real and virtual W bosons."
        },
        {
          channel: "H^0 \\to g + g",
          branchingRatio: "8.2%",
          description: "Decay to gluons via virtual quark loop."
        },
        {
          channel: "H^0 \\to \\tau^+ + \\tau^-",
          branchingRatio: "6.3%",
          description: "Decay to third-generation charged leptons."
        },
        {
          channel: "H^0 \\to Z + Z^* \\to 4\\ell",
          branchingRatio: "2.6%",
          description: "The 'golden channel' leading to four leptons, key to its discovery."
        },
        {
          channel: "H^0 \\to \\gamma + \\gamma",
          branchingRatio: "0.23%",
          description: "Distinctive two-photon resonance clean signal."
        }
      ],
      production: "Discovered on July 4, 2012 by ATLAS and CMS collaborations at CERN LHC, mainly via gluon-gluon fusion (ggF) and vector boson fusion (VBF)."
    },
    sources: [
      {
        title: "PDG Higgs Boson Review",
        url: "https://pdg.lbl.gov/2024/reviews/rpp2024-rev-higgs-boson.pdf",
        organization: "Particle Data Group",
        attribution: "PDG 2024 Comprehensive Higgs Boson Review."
      },
      {
        title: "CERN: The Higgs Boson Discovery",
        url: "https://home.cern/science/physics/higgs-boson",
        organization: "CERN",
        attribution: "ATLAS and CMS Collaborations, Phys. Lett. B 716 (2012)."
      },
      {
        title: "Nobel Prize in Physics 2013",
        url: "https://www.nobelprize.org/prizes/physics/2013/summary/",
        organization: "Nobel Media",
        attribution: "Awarded to François Englert and Peter W. Higgs."
      }
    ]
  }
];
