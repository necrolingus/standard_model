/**
 * Standard Model - Central Data Registry & Query API
 * Integrates quarks, leptons, gauge bosons, scalar bosons, and composite hadrons.
 */

import { quarks } from "./quarks.js";
import { leptons } from "./leptons.js";
import { bosons } from "./bosons.js";
import { composites } from "./composites.js";
import { definitions, getDefinitionById } from "./definitions.js";

export { definitions, getDefinitionById };

export const allParticles = [
  ...quarks,
  ...leptons,
  ...bosons,
  ...composites
];

export const particleCategories = [
  { id: "all", label: "All Components", description: "All fundamental particles and composite hadrons" },
  { id: "fundamental", label: "Fundamental Only", description: "The 17 elementary building blocks of the Standard Model" },
  { id: "quark", label: "Quarks", description: "Elementary fermions carrying color charge (up, down, charm, strange, top, bottom)" },
  { id: "lepton", label: "Leptons", description: "Elementary fermions with no color charge (electron, muon, tau, and neutrinos)" },
  { id: "boson", label: "Bosons", description: "Force carriers (gauge bosons: γ, g, W, Z) and scalar field quanta (Higgs)" },
  { id: "hadron-baryon", label: "Composite: Baryons", description: "Hadrons composed of three bound quarks (proton, neutron)" },
  { id: "hadron-meson", label: "Composite: Mesons", description: "Hadrons composed of a quark-antiquark pair (pions, kaons)" }
];

export function getParticleById(id) {
  return allParticles.find(p => p.id === id) || null;
}

export function getParticlesByCategory(catId) {
  if (!catId || catId === "all") return allParticles;
  if (catId === "fundamental") {
    return allParticles.filter(p => p.structure.isElementary);
  }
  if (catId === "boson") {
    return allParticles.filter(p => p.category === "gauge-boson" || p.category === "scalar-boson");
  }
  return allParticles.filter(p => p.category === catId);
}

export function searchParticles(query) {
  if (!query || !query.trim()) return allParticles;
  const q = query.trim().toLowerCase();
  return allParticles.filter(p => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.symbol.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      (p.structure.constituents && p.structure.constituents.toLowerCase().includes(q)) ||
      p.plainEnglish.summary.toLowerCase().includes(q)
    );
  });
}
