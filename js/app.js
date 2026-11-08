/**
 * Standard Model Learning Portal - Main Application Orchestrator
 * Coordinates search, filtering, URL deep linking, and UI rendering.
 */

import { allParticles, particleCategories, searchParticles, getParticlesByCategory, definitions, getDefinitionById } from "./data/index.js";
import { ParticleUI } from "./ui.js";

class App {
  constructor() {
    this.ui = new ParticleUI();
    this.currentQuery = "";
    this.currentCategory = "all";
    this.activeDefinitionId = "gluon"; // Gluon is first in the list
    this.isDefinitionsVisible = localStorage.getItem("sm_definitions_visible") !== "false";

    this.searchInput = document.getElementById("searchInput");
    this.searchClearBtn = document.getElementById("searchClearBtn");
    this.filterContainer = document.getElementById("filterPillsRow");
    this.smSection = document.getElementById("smSectionBlock");
    this.hadronsSection = document.getElementById("hadronsSectionBlock");
    this.emptyState = document.getElementById("emptyState");
    this.defToggleBtn = document.getElementById("defToggleBtn");
    this.definitionsSection = document.getElementById("definitionsSection");

    this.init();
  }

  init() {
    this.setupDefinitionsToggle();
    this.setupDefinitions();
    this.renderFilterPills();
    this.bindSearchEvents();
    this.renderViews();
    this.checkDeepLink();

    // Listen for hash changes
    window.addEventListener("hashchange", () => this.checkDeepLink());
  }

  setupDefinitionsToggle() {
    if (!this.defToggleBtn || !this.definitionsSection) return;

    const applyState = () => {
      this.definitionsSection.classList.toggle("is-collapsed", !this.isDefinitionsVisible);
      this.defToggleBtn.setAttribute("aria-expanded", this.isDefinitionsVisible ? "true" : "false");
      this.defToggleBtn.textContent = this.isDefinitionsVisible ? "Hide Definitions [-]" : "Show Definitions [+]";
    };

    applyState();

    this.defToggleBtn.addEventListener("click", () => {
      this.isDefinitionsVisible = !this.isDefinitionsVisible;
      localStorage.setItem("sm_definitions_visible", this.isDefinitionsVisible ? "true" : "false");
      applyState();
    });
  }

  setupDefinitions() {
    this.ui.renderDefinitionPills(definitions, this.activeDefinitionId, (defId) => {
      this.selectDefinition(defId);
    });
    const activeDef = getDefinitionById(this.activeDefinitionId);
    this.ui.renderDefinitionCard(activeDef, (pid) => {
      this.ui.openDrawer(pid);
    });
  }

  selectDefinition(defId) {
    this.activeDefinitionId = defId;
    this.ui.renderDefinitionPills(definitions, this.activeDefinitionId, (id) => this.selectDefinition(id));
    const def = getDefinitionById(defId);
    this.ui.renderDefinitionCard(def, (pid) => this.ui.openDrawer(pid));
  }

  renderFilterPills() {
    this.filterContainer.innerHTML = "";
    particleCategories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `filter-btn ${cat.id === this.currentCategory ? 'active' : ''}`;
      btn.textContent = cat.label;
      btn.dataset.category = cat.id;
      btn.title = cat.description;
      btn.addEventListener("click", () => {
        this.setCategory(cat.id);
      });
      this.filterContainer.appendChild(btn);
    });
  }

  setCategory(catId) {
    this.currentCategory = catId;
    // Update active pill
    document.querySelectorAll(".filter-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.category === catId);
    });
    this.renderViews();
  }

  bindSearchEvents() {
    this.searchInput.addEventListener("input", (e) => {
      this.currentQuery = e.target.value.trim();
      this.searchClearBtn.classList.toggle("visible", Boolean(this.currentQuery));
      this.renderViews();
    });

    this.searchClearBtn.addEventListener("click", () => {
      this.searchInput.value = "";
      this.currentQuery = "";
      this.searchClearBtn.classList.remove("visible");
      this.searchInput.focus();
      this.renderViews();
    });
  }

  checkDeepLink() {
    // Check URL hash, e.g. #photon, #proton
    const hash = window.location.hash.replace("#", "").trim().toLowerCase();
    if (hash) {
      this.ui.openDrawer(hash);
    }
  }

  renderViews() {
    let dataset = allParticles;

    // Apply category filter
    if (this.currentCategory !== "all") {
      dataset = getParticlesByCategory(this.currentCategory);
    }

    // Apply search query filter
    if (this.currentQuery) {
      const searchResults = searchParticles(this.currentQuery);
      dataset = dataset.filter(p => searchResults.some(r => r.id === p.id));
    }

    const smParticles = dataset.filter(p => p.structure.isElementary);
    const hadronParticles = dataset.filter(p => !p.structure.isElementary);

    const hasAnyResults = smParticles.length > 0 || hadronParticles.length > 0;

    if (!hasAnyResults) {
      this.smSection.style.display = "none";
      this.hadronsSection.style.display = "none";
      this.emptyState.style.display = "block";
      return;
    }

    this.emptyState.style.display = "none";

    // Standard Model Grid
    if (smParticles.length > 0) {
      this.smSection.style.display = "block";
      const isCanonical = (this.currentCategory === "all" || this.currentCategory === "fundamental") && !this.currentQuery;
      this.ui.renderStandardModelGrid(smParticles, isCanonical);
    } else {
      this.smSection.style.display = "none";
    }

    // Composite Hadrons Grid
    if (hadronParticles.length > 0) {
      this.hadronsSection.style.display = "block";
      this.ui.renderHadronsGrid(hadronParticles);
    } else {
      this.hadronsSection.style.display = "none";
    }
  }
}

// Bootstrap when DOM ready
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
