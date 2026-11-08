/**
 * Standard Model - Conceptual Definitions & Terminology Module
 * Ordered pedagogically starting with Gluon as #1, Quarks, Spin, Strong Force, Weak Force, etc.
 * Written in Plain English for first-year students and enthusiasts.
 */

export const definitions = [
  {
    id: "gluon",
    term: "Gluon",
    level: 1,
    scaleLabel: "Strong Force Mediator",
    category: "Gauge Boson (Spin 1)",
    summary: "The elementary messenger particle of the strong force that acts as the subatomic 'glue' permanently binding quarks together. Unlike photons (which carry no electric charge), gluons themselves carry the very 'color charge' they transmit! Because gluons attract other gluons, they form tight, unbreakable 'ropes' of energy (flux tubes) that prevent quarks from ever escaping on their own.",
    commonMisconceptions: [
      "Misconception: Gluons have mass because they hold heavy protons together. Reality: Free gluons are massless (spin-1 vector bosons). The immense mass of protons comes from the kinetic and potential energy of the gluon field inside (E = mc²).",
      "Misconception: Gluons can travel across a room like photons. Reality: Because gluons interact with themselves and carry color charge, their range is strictly confined to the diameter of an atomic nucleus (~1 femtometer)."
    ],
    relationships: "Gluons mediate the Strong Force between Quarks. They bind quarks into Hadrons (Baryons like protons/neutrons and Mesons like pions). Quarks and Gluons are the only fundamental particles that carry Color Charge.",
    discovery: {
      year: "1979",
      discoverers: "TASSO, MARK-J, PLUTO, and JADE collaborations at the PETRA electron-positron storage ring at DESY in Hamburg, Germany.",
      context: "Discovered experimentally through 'three-jet events' (electron + positron -> quark + antiquark + radiated gluon), where the radiated gluon produced a third visible spray of hadrons."
    },
    relatedParticleIds: ["gluon", "up-quark", "down-quark", "proton", "neutron"]
  },
  {
    id: "quark",
    term: "Quark",
    level: 2,
    scaleLabel: "Fundamental Building Block",
    category: "Elementary Fermion (Spin 1/2)",
    summary: "The tiniest indivisible building blocks of matter that carry 'color charge' and form atomic nuclei. Quarks have fractional electric charges (+2/3 or -1/3) and come in six 'flavors': Up and Down (which build all stable matter), Charm and Strange (heavier, unstable second generation), and Top and Bottom (heavy third generation). Quarks are held together so tightly by gluons that a single, isolated quark can never exist in nature.",
    commonMisconceptions: [
      "Misconception: You can isolate a single quark in a laboratory detector. Reality: Because of 'color confinement', if you try to pull two quarks apart, the energy in the gluon field creates a new quark-antiquark pair before they can separate.",
      "Misconception: Most of a proton's weight comes from its quarks. Reality: The up and down quarks inside a proton only account for about 1% to 2% of its mass; roughly 98% comes from the kinetic and binding energy of the gluons."
    ],
    relationships: "Quarks are bound together by Gluons to form Hadrons. Three quarks combine to form a Baryon (such as a Proton [uud] or Neutron [udd]), while a quark and an antiquark form a Meson (such as a Pion [u d̄]).",
    discovery: {
      year: "1964 (theoretical prediction) / 1968 (experimental confirmation)",
      discoverers: "Murray Gell-Mann and George Zweig (theory); confirmed experimentally at SLAC (Stanford Linear Accelerator Center).",
      context: "Named by Murray Gell-Mann from a passage in James Joyce's 'Finnegans Wake' ('Three quarks for Muster Mark!'). SLAC deep inelastic scattering proved protons had three hard, point-like centers inside."
    },
    relatedParticleIds: ["up-quark", "down-quark", "charm-quark", "strange-quark", "top-quark", "bottom-quark"]
  },
  {
    id: "spin",
    term: "Spin (Quantum Angular Momentum)",
    level: 3,
    scaleLabel: "Fundamental Quantum Property",
    category: "Quantum Number",
    summary: "An intrinsic, unchangeable form of angular momentum built into every elementary particle. Despite its name, a particle is NOT physically spinning like a little toy top! (If an electron physically spun, its outer surface would have to travel faster than light). Instead, spin is a permanent quantum label that dictates whether a particle behaves as matter (fermion) or as a force/field (boson).",
    commonMisconceptions: [
      "Misconception: An electron is spinning on its axis like the Earth. Reality: An electron is a point-like particle with no measurable physical radius; its spin is an intrinsic mathematical quantum number of spacetime rotations.",
      "Misconception: Spin is only relevant in theoretical physics. Reality: Spin is responsible for the solid structure of atoms, everyday refrigerator magnetism, and MRI machines in hospitals."
    ],
    spinSpectrum: [
      {
        spinValue: "Spin 0 (Scalar)",
        meaning: "Invariant under all rotations; looks completely identical from every angle (like a featureless sphere with no orientation). Does not have directionality.",
        examples: "Higgs Boson (H⁰), Pions (π⁺, π⁰)."
      },
      {
        spinValue: "Spin 1/2 (Fermion / Matter)",
        meaning: "The defining spin of matter. Requires TWO full 360° rotations (720° in total!) to return to its original quantum mathematical phase. Strictly obeys the Pauli Exclusion Principle.",
        examples: "All Quarks, Electron, Muon, Tau, all Neutrinos, Proton, Neutron."
      },
      {
        spinValue: "Spin 1 (Vector Boson / Force Carrier)",
        meaning: "Requires ONE full 360° rotation to return to its original state. Transmits directional forces between particles and carries polarization states.",
        examples: "Photon (electromagnetism), Gluon (strong force), W⁺, W⁻, and Z⁰ bosons (weak force)."
      },
      {
        spinValue: "Spin 2 (Tensor / Gravity)",
        meaning: "Symmetric under a 180° rotation (half a turn). In quantum field theory, a massless spin-2 field is mathematically guaranteed to generate the attractive curvature of spacetime described by Einstein's General Relativity.",
        examples: "Hypothesized Graviton (mediator of quantum gravity)."
      }
    ],
    relationships: "Half-integer spins (1/2, 3/2...) are Fermions (matter particles that cannot overlap). Integer spins (0, 1, 2...) are Bosons (force carriers and fields that can pile together in unlimited numbers).",
    discovery: {
      year: "1925",
      discoverers: "Samuel Goudsmit and George Uhlenbeck; formulated mathematically by Wolfgang Pauli.",
      context: "Introduced to explain why the spectral emission lines of hydrogen split into doublets when placed in a magnetic field (anomalous Zeeman effect)."
    },
    relatedParticleIds: ["higgs-boson", "electron", "up-quark", "photon", "gluon"]
  },
  {
    id: "strong-force",
    term: "Strong Force",
    level: 4,
    scaleLabel: "Fundamental Force",
    category: "Fundamental Interaction",
    summary: "The strongest of all four fundamental forces in nature—roughly 137 times stronger than electromagnetism and 10³⁸ times stronger than gravity! It operates in two tiers: (1) At the fundamental scale, it glues quarks together inside protons and neutrons via gluon exchange (Quantum Chromodynamics). (2) At the nuclear scale, a 'residual' leak of this force holds positive protons and neutrons together inside atomic nuclei, overcoming the massive electrostatic repulsion between protons.",
    commonMisconceptions: [
      "Misconception: Protons in a nucleus stay together because they attract each other electrically. Reality: Protons repel each other fiercely via electromagnetism! The residual strong force is what overpowers this repulsion and holds the nucleus together.",
      "Misconception: The strong force gets weaker with distance like gravity or magnetism. Reality: Quarks feel the exact opposite! At extremely close distances, quarks move almost freely ('asymptotic freedom'). But as they are pulled apart, the strong force remains constant and strong, like stretching an unbreakable rubber band until it snaps and creates new particles."
    ],
    relationships: "Mediated by Gluons. Acts exclusively on particles carrying Color Charge (Quarks and Gluons). Generates ~98% of the visible mass in the universe through QCD binding energy.",
    discovery: {
      year: "1935 (Yukawa nuclear theory) / 1973 (QCD formulated)",
      discoverers: "Hideki Yukawa (residual pion force); David Gross, Frank Wilczek, and David Politzer (Asymptotic freedom in QCD, 2004 Nobel Prize).",
      context: "Discovered to explain why atomic nuclei don't instantly blow themselves apart from positive proton-proton electric repulsion."
    },
    relatedParticleIds: ["gluon", "up-quark", "down-quark", "pion-plus", "proton", "neutron"]
  },
  {
    id: "weak-force",
    term: "Weak Force",
    level: 5,
    scaleLabel: "Fundamental Force",
    category: "Fundamental Interaction",
    summary: "The subtle force responsible for radioactivity, nuclear beta decay, and initiating the nuclear fusion reactions that make the Sun shine. It is the ONLY fundamental force capable of changing the 'flavor' of particles—converting a down quark into an up quark (turning a neutron into a proton), or converting an electron into a neutrino.",
    commonMisconceptions: [
      "Misconception: The weak force is called 'weak' because it does nothing important. Reality: Without the weak force, the Sun could not convert hydrogen into helium, and stars (along with all life on Earth) could not exist.",
      "Misconception: The weak force acts over long distances. Reality: Because its force carriers (W and Z bosons) are extremely heavy (~80 to 91 GeV), the weak force has an ultra-short range of less than 0.1% the diameter of a proton (10⁻¹⁸ meters)."
    ],
    relationships: "Mediated by the massive W⁺, W⁻, and Z⁰ gauge bosons. Acts on all left-handed fermions (quarks and leptons). Unified with electromagnetism into the Electroweak Theory by Glashow, Weinberg, and Salam.",
    discovery: {
      year: "1896 (Becquerel radioactivity) / 1934 (Fermi beta-decay theory) / 1983 (W/Z bosons discovered)",
      discoverers: "Enrico Fermi (Weak interaction theory); Sheldon Glashow, Steven Weinberg, and Abdus Salam (Electroweak unification, 1979 Nobel Prize).",
      context: "Formulated to explain the continuous energy spectrum of beta decay, which led to the realization that a tiny neutral particle (the neutrino) was escaping undetected."
    },
    relatedParticleIds: ["w-boson", "z-boson", "down-quark", "electron-neutrino", "neutron"]
  },
  {
    id: "lepton",
    term: "Lepton",
    level: 6,
    scaleLabel: "Fundamental Matter Particle",
    category: "Elementary Fermion (Spin 1/2)",
    summary: "A family of six elementary matter particles that do NOT feel the strong nuclear force. The most familiar lepton is the electron, which orbits atomic nuclei and drives electricity and chemistry. Leptons come in three charged versions (electron, muon, tau) and three neutral 'ghost' versions (electron neutrino, muon neutrino, tau neutrino).",
    commonMisconceptions: [
      "Misconception: Leptons are made of quarks. Reality: Leptons are fundamental, point-like particles with zero internal substructure and zero quarks inside them.",
      "Misconception: All leptons are lightweight. Reality: While 'lepton' comes from the Greek word for 'light' (due to the featherweight electron), the tau lepton is nearly twice as heavy as an entire proton!"
    ],
    relationships: "Leptons feel the Weak force, Gravity, and (for charged leptons) Electromagnetism. They have zero color charge, so they never interact via the Strong force.",
    discovery: {
      year: "1897 (Electron) to 2000 (Tau Neutrino)",
      discoverers: "J.J. Thomson (Electron, 1897); Anderson & Neddermeyer (Muon, 1936); Perl (Tau, 1975); Reines & Cowan (Neutrino, 1956).",
      context: "The electron was the first subatomic particle ever discovered, found via cathode ray tubes in Cambridge, UK."
    },
    relatedParticleIds: ["electron", "electron-neutrino", "muon", "muon-neutrino", "tau", "tau-neutrino"]
  },
  {
    id: "gauge-boson",
    term: "Gauge Boson (Force Carrier)",
    level: 7,
    scaleLabel: "Fundamental Force Messenger",
    category: "Vector Boson (Spin 1)",
    summary: "The messenger particles that carry the fundamental forces between particles of matter. When two electrons repel, they exchange virtual photons; when quarks bind, they exchange gluons. The four gauge bosons are: Photons (electromagnetism), Gluons (strong force), and W and Z bosons (weak force).",
    commonMisconceptions: [
      "Misconception: A photon is made of quarks. Reality: A photon is an elementary gauge boson with no internal substructure and zero quarks. Only hadrons are made of quarks.",
      "Misconception: Forces act instantaneously across empty space. Reality: Quantum mechanics proves that forces travel through space as discrete boson wave-packets at or below the speed of light."
    ],
    relationships: "Gauge bosons mediate forces between fermions: Gluons act on Quarks; Photons act on all electrically charged particles; W and Z bosons act on all left-handed fermions.",
    discovery: {
      year: "1905 (Photon theory by Einstein) to 1983 (W and Z at CERN)",
      discoverers: "Albert Einstein (Photon); DESY PETRA teams (Gluon, 1979); Rubbia & Van der Meer (W/Z, 1983).",
      context: "Einstein won his 1921 Nobel Prize for proving light comes in discrete force packets (photons) through the photoelectric effect."
    },
    relatedParticleIds: ["photon", "gluon", "w-boson", "z-boson"]
  },
  {
    id: "scalar-boson",
    term: "Scalar Boson (Higgs)",
    level: 8,
    scaleLabel: "Mass Generation Quanta",
    category: "Scalar Boson (Spin 0)",
    summary: "A unique particle with zero spin that represents an excitation of the invisible Higgs field that permeates all of space. As elementary particles travel through this field, their interaction gives them rest mass—similar to how moving through thick syrup slows you down.",
    commonMisconceptions: [
      "Misconception: The Higgs boson generates all the mass in the universe. Reality: The Higgs field gives mass to elementary particles (like electrons and quarks). Over 98% of your body's mass comes from strong force binding energy inside protons and neutrons, not the Higgs mechanism!",
      "Misconception: The Higgs boson carries an attractive or repulsive force like a photon. Reality: It is a scalar field excitation (spin 0), not a vector gauge boson (spin 1)."
    ],
    relationships: "Couples to fermions via Yukawa interactions (giving them mass) and to the W and Z gauge bosons via spontaneous electroweak symmetry breaking.",
    discovery: {
      year: "2012 (Observed at CERN LHC)",
      discoverers: "Predicted in 1964 by Peter Higgs, François Englert, and Robert Brout; discovered by ATLAS and CMS collaborations at CERN.",
      context: "Announced on July 4, 2012, confirming the final predicted piece of the Standard Model and earning the 2013 Nobel Prize in Physics."
    },
    relatedParticleIds: ["higgs-boson"]
  },
  {
    id: "fermion",
    term: "Fermion (Matter Particle)",
    level: 9,
    scaleLabel: "Matter Classification",
    category: "Fundamental Matter",
    summary: "Any particle with half-integer spin (1/2, 3/2...). All matter in the universe is made of fermions (quarks and leptons). Fermions are strictly antisocial particles: they obey the Pauli Exclusion Principle, meaning no two identical fermions can occupy the exact same quantum state at the same time.",
    commonMisconceptions: [
      "Misconception: Fermions are only elementary particles. Reality: Any composite particle with half-integer total spin (like a proton or neutron, both spin 1/2) is also a fermion and obeys the exclusion principle.",
      "Misconception: Matter feels solid because particles touch. Reality: Matter feels solid because atomic electrons are fermions that refuse to collapse into the same quantum state."
    ],
    relationships: "Fermions include all 6 Quarks, all 6 Leptons, and composite Baryons (Protons and Neutrons). They interact by exchanging Bosons.",
    discovery: {
      year: "1926 (Fermi-Dirac Statistics)",
      discoverers: "Named after Enrico Fermi; formulated independently by Enrico Fermi and Paul Dirac.",
      context: "Explains electron atomic orbitals and the entire periodic table of chemical elements."
    },
    relatedParticleIds: ["up-quark", "down-quark", "electron", "proton", "neutron"]
  },
  {
    id: "boson",
    term: "Boson (Force & Field Quanta)",
    level: 10,
    scaleLabel: "Force & Field Classification",
    category: "Quantum Messenger",
    summary: "Any particle with integer spin (0, 1, 2...). Unlike fermions, bosons are extremely social particles: unlimited numbers of identical bosons can crowd into the exact same quantum state simultaneously. This allows photons to form intense laser beams and allows atoms to form Bose-Einstein condensates.",
    commonMisconceptions: [
      "Misconception: Bosons are only force carriers. Reality: While gauge bosons carry forces, composite particles with integer spin (like pions, spin 0, or helium-4 atoms) are also bosons.",
      "Misconception: Bosons cannot have mass. Reality: W and Z bosons are among the heaviest elementary particles known, and the Higgs boson is 133 times heavier than a proton."
    ],
    relationships: "Bosons include Gauge Bosons (photon, gluon, W, Z), Scalar Bosons (Higgs), and composite Mesons (pions, kaons).",
    discovery: {
      year: "1924 (Bose-Einstein Statistics)",
      discoverers: "Named after Indian physicist Satyendra Nath Bose, who collaborated with Albert Einstein.",
      context: "Bose derived Planck's quantum radiation law by treating light as indistinguishable particles capable of sharing states."
    },
    relatedParticleIds: ["photon", "gluon", "w-boson", "z-boson", "higgs-boson", "pion-plus"]
  },
  {
    id: "color-charge",
    term: "Color Charge",
    level: 11,
    scaleLabel: "Strong Force Charge",
    category: "Quantum Number (QCD)",
    summary: "The special property that makes particles feel the strong force, analogous to how electric charge causes electromagnetism. Physicists picked the names 'red', 'green', and 'blue' purely as a visual metaphor: just as mixing red, green, and blue light produces colorless white light, combining three colored quarks produces a color-neutral hadron.",
    commonMisconceptions: [
      "Misconception: Quarks have actual visual colors. Reality: 'Color' is purely a metaphor for an SU(3) gauge symmetry. Subatomic particles are vastly smaller than the wavelength of light.",
      "Misconception: Leptons or photons carry color charge. Reality: Leptons and photons are colorless and completely immune to the strong force."
    ],
    relationships: "Quarks carry color (red, green, blue). Gluons carry a color and an anticolor. Everything observed freely in nature must be color-neutral ('white').",
    discovery: {
      year: "1964 - 1965",
      discoverers: "Oscar W. Greenberg, Moo-Young Han, and Yoichiro Nambu.",
      context: "Resolved a paradox where three identical up quarks with parallel spins existed in the Delta++ baryon without violating Pauli exclusion."
    },
    relatedParticleIds: ["gluon", "up-quark", "down-quark", "proton"]
  },
  {
    id: "hadron",
    term: "Hadron (Quark Composite)",
    level: 12,
    scaleLabel: "Composite Particle Family",
    category: "Composite Matter",
    summary: "Any subatomic particle made of two or more quarks bound by gluons via the strong force. From the Greek 'hadros' meaning 'stout' or 'bulky'. Hadrons are divided into two main families: Baryons (like protons and neutrons, made of 3 quarks) and Mesons (like pions, made of 1 quark and 1 antiquark).",
    commonMisconceptions: [
      "Misconception: Hadrons are fundamental elementary particles. Reality: Hadrons have internal structure, physical size (~1 femtometer), and constituent quarks.",
      "Misconception: A photon is a hadron. Reality: A photon is an elementary gauge boson, completely distinct from hadrons."
    ],
    relationships: "Hadrons are built from Quarks and Gluons. They feel the strong force. The most stable hadron in the universe is the proton.",
    discovery: {
      year: "1917 (Proton by Rutherford) through modern particle accelerators",
      discoverers: "Term coined by Lev Okun in 1962.",
      context: "Coined to organize the 'particle zoo' of hundreds of new resonances discovered in bubble chambers."
    },
    relatedParticleIds: ["proton", "neutron", "pion-plus", "pion-zero", "kaon-plus"]
  },
  {
    id: "baryon",
    term: "Baryon (3-Quark Hadron)",
    level: 13,
    scaleLabel: "Composite Matter (Fermion)",
    category: "Composite Baryon",
    summary: "A heavy composite hadron built from THREE bound quarks (qqq). Because each quark has spin 1/2, three quarks combine to produce half-integer spin (1/2 or 3/2), making all baryons fermions. Protons (uud) and neutrons (udd) are the baryons that make up almost all atomic matter in our universe.",
    commonMisconceptions: [
      "Misconception: Protons and neutrons are solid, static spheres. Reality: Inside every proton and neutron is a violent, swirling sea of quarks and virtual gluons constantly exchanging color.",
      "Misconception: All baryons are stable. Reality: The proton is the ONLY stable baryon in isolation. Free neutrons decay in ~15 minutes, and all other baryons decay in tiny fractions of a second."
    ],
    relationships: "Baryons are a sub-family of Hadrons. Three quarks make a Baryon; three antiquarks make an Antibaryon (like an antiproton).",
    discovery: {
      year: "1917 (Proton) / 1932 (Neutron)",
      discoverers: "Ernest Rutherford (Proton); James Chadwick (Neutron).",
      context: "Chadwick proved the neutron was an uncharged particle with almost the exact mass of a proton."
    },
    relatedParticleIds: ["proton", "neutron"]
  },
  {
    id: "meson",
    term: "Meson (Quark-Antiquark Pair)",
    level: 14,
    scaleLabel: "Composite Force Messenger (Boson)",
    category: "Composite Meson",
    summary: "A composite hadron built from ONE quark and ONE antiquark (q q̄). Because it pairs two spin-1/2 particles, their spins combine into integer spin (0 or 1), making all mesons bosons! Mesons act as the messenger particles that transmit the residual strong nuclear force between protons and neutrons inside atomic nuclei.",
    commonMisconceptions: [
      "Misconception: Mesons are fundamental bosons like photons. Reality: Mesons are composite hadrons made of bound quark-antiquark pairs.",
      "Misconception: Mesons can be stable. Reality: Every known meson is unstable and decays quickly, because matter and antimatter quarks in the same particle eventually annihilate or decay weakly."
    ],
    relationships: "Mesons are a sub-family of Hadrons. Exchange of pions between protons and neutrons creates the residual strong force that holds atomic nuclei together.",
    discovery: {
      year: "1935 (Predicted by Yukawa) / 1947 (Discovered in cosmic rays)",
      discoverers: "Hideki Yukawa (theory); Powell, Lattes, and Occhialini (discovery of the pion).",
      context: "Yukawa received Japan's first Nobel Prize in 1949 for predicting the pion to explain how atomic nuclei stay bound."
    },
    relatedParticleIds: ["pion-plus", "pion-zero", "kaon-plus"]
  },
  {
    id: "antimatter",
    term: "Antiparticle & Antimatter",
    level: 15,
    scaleLabel: "Cosmic Mirror",
    category: "Quantum Property",
    summary: "For every fundamental particle of matter, nature produces an antiparticle with the exact same mass and spin, but opposite electric charge, color charge, and magnetic properties. When a particle meets its antiparticle, they annihilate each other into pure energy (photons).",
    commonMisconceptions: [
      "Misconception: Antimatter has negative mass or negative gravity. Reality: Antimatter has positive mass and falls downward in Earth's gravity exactly like ordinary matter, as proven directly at CERN in 2023.",
      "Misconception: Antimatter is science fiction. Reality: Positrons (anti-electrons) are used every day in hospitals worldwide for PET (Positron Emission Tomography) medical scans!"
    ],
    relationships: "Every particle has an antiparticle: Electron -> Positron (e⁺); Up quark -> Anti-up quark (ū); Proton -> Antiproton (p̄). Some neutral bosons (like Photon and Z boson) are their own antiparticles.",
    discovery: {
      year: "1928 (Dirac equation prediction) / 1932 (Positron discovered)",
      discoverers: "Paul Dirac (theoretical prediction); Carl D. Anderson (experimental discovery).",
      context: "Dirac's relativistic electron equation mathematically required negative energy solutions, predicting the positron before it was seen in cloud chambers."
    },
    relatedParticleIds: ["electron", "up-quark", "down-quark", "photon"]
  }
];

export function getDefinitionById(id) {
  return definitions.find(d => d.id === id) || null;
}
