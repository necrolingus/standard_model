/**
 * UI Renderer and Interaction Controller
 * Manages DOM generation for cards, drawer rendering, and KaTeX math processing.
 */

import { getParticleById } from "./data/index.js";

export class ParticleUI {
  constructor() {
    this.drawerBackdrop = document.getElementById("drawerBackdrop");
    this.drawerPanel = document.getElementById("drawerPanel");
    this.drawerBody = document.getElementById("drawerBody");
    this.drawerTitle = document.getElementById("drawerTitle");
    this.drawerSymbol = document.getElementById("drawerSymbol");
    this.drawerCategory = document.getElementById("drawerCategory");
    this.drawerCloseBtn = document.getElementById("drawerCloseBtn");
    
    this.smGridContainer = document.getElementById("smGridContainer");
    this.hadronsGridContainer = document.getElementById("hadronsGridContainer");
    this.emptyState = document.getElementById("emptyState");
    this.defPillsBar = document.getElementById("defPillsBar");
    this.defDisplayCard = document.getElementById("defDisplayCard");
    this.activeFilter = "all";
    this.currentParticleId = null;

    this.bindEvents();
  }

  bindEvents() {
    // Drawer close events
    this.drawerCloseBtn.addEventListener("click", () => this.closeDrawer());
    this.drawerBackdrop.addEventListener("click", () => this.closeDrawer());

    // Keyboard ESC to close drawer
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isDrawerOpen()) {
        this.closeDrawer();
      }
    });

    // Reset button in empty state
    const resetBtn = document.getElementById("btnResetSearch");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
          searchInput.value = "";
          searchInput.dispatchEvent(new Event("input"));
        }
      });
    }
  }

  isDrawerOpen() {
    return this.drawerPanel.classList.contains("active");
  }

  openDrawer(particleId) {
    const particle = getParticleById(particleId);
    if (!particle) return;

    this.currentParticleId = particleId;
    this.renderDrawerContent(particle);

    this.drawerBackdrop.classList.add("active");
    this.drawerPanel.classList.add("active");
    this.drawerPanel.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scroll

    // Trigger KaTeX math rendering inside the drawer
    this.renderKaTeX(this.drawerPanel);

    // Set focus to close button for accessibility
    this.drawerCloseBtn.focus();
  }

  closeDrawer() {
    this.drawerBackdrop.classList.remove("active");
    this.drawerPanel.classList.remove("active");
    this.drawerPanel.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Return focus to active particle card if possible
    if (this.currentParticleId) {
      const card = document.querySelector(`[data-particle-id="${this.currentParticleId}"]`);
      if (card) card.focus();
    }
  }

  renderKaTeX(element) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(element, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn("KaTeX rendering notice:", err);
      }
    }
  }

  createCardElement(particle) {
    const card = document.createElement("article");
    card.className = `particle-card cat-${particle.category}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${particle.name}, ${particle.categoryLabel}`);
    card.dataset.particleId = particle.id;

    // Structure hint for hadrons or bosons
    let structureSnippet = "";
    if (!particle.structure.isElementary) {
      structureSnippet = `<span class="card-structure-hint">Quarks: $${particle.structure.constituentsLatex || particle.structure.constituents}$</span>`;
    } else if (particle.category === "gauge-boson" || particle.category === "scalar-boson") {
      structureSnippet = `<span class="card-structure-hint" style="background:#fef3c7;color:#92400e;">Fundamental Boson</span>`;
    }

    card.innerHTML = `
      <div class="card-header-row">
        <span class="card-symbol">$${particle.symbolLatex || particle.symbol}$</span>
        <span class="card-category-badge">${particle.categoryLabel.replace("Composite: ", "")}</span>
      </div>
      <div class="card-name">${particle.name}</div>
      ${structureSnippet}
      <div class="card-metrics">
        <div class="card-metric-row">
          <span class="card-metric-label">Mass:</span>
          <span class="card-metric-val">$${particle.massLatex || particle.mass}$</span>
        </div>
        <div class="card-metric-row">
          <span class="card-metric-label">Charge:</span>
          <span class="card-metric-val">$${particle.chargeLatex || particle.charge}$</span>
        </div>
        <div class="card-metric-row">
          <span class="card-metric-label">Spin:</span>
          <span class="card-metric-val">$${particle.spinLatex || particle.spin}$</span>
        </div>
      </div>
    `;

    // Event listeners for open
    card.addEventListener("click", () => this.openDrawer(particle.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.openDrawer(particle.id);
      }
    });

    return card;
  }

  renderStandardModelGrid(particles, isCanonical = true) {
    this.smGridContainer.innerHTML = "";

    if (isCanonical && particles.length >= 17) {
      this.smGridContainer.classList.add("canonical-mode");
      this.smGridContainer.classList.remove("fluid-mode");

      // Column headers (Row 1)
      const colHeaders = [
        { class: "header-rowlabels", text: "Family" },
        { class: "header-gen1", text: "Generation I" },
        { class: "header-gen2", text: "Generation II" },
        { class: "header-gen3", text: "Generation III" },
        { class: "header-gauge", text: "Gauge Bosons" },
        { class: "header-scalar", text: "Scalar Bosons" }
      ];

      colHeaders.forEach(h => {
        const headerEl = document.createElement("div");
        headerEl.className = `grid-col-header ${h.class}`;
        headerEl.textContent = h.text;
        this.smGridContainer.appendChild(headerEl);
      });

      // Row headers (Column 1)
      const rowHeaders = [
        { class: "row-up-quarks", title: "Quarks", sub: "+2/3 e" },
        { class: "row-down-quarks", title: "Quarks", sub: "-1/3 e" },
        { class: "row-charged-leptons", title: "Leptons", sub: "-1 e" },
        { class: "row-neutral-leptons", title: "Neutrinos", sub: "0 e" }
      ];

      rowHeaders.forEach(r => {
        const rowEl = document.createElement("div");
        rowEl.className = `grid-row-header ${r.class}`;
        rowEl.innerHTML = `
          <span class="grid-row-header-title">${r.title}</span>
          <span class="grid-row-header-sub">${r.sub}</span>
        `;
        this.smGridContainer.appendChild(rowEl);
      });

      // Render cards with explicit grid coordinates
      particles.forEach(p => {
        const card = this.createCardElement(p);
        if (p.canonicalGrid) {
          card.style.gridColumn = p.canonicalGrid.col;
          card.style.gridRow = p.canonicalGrid.row;
        }
        this.smGridContainer.appendChild(card);
      });
    } else {
      // Fluid mode when filtered or searched
      this.smGridContainer.classList.remove("canonical-mode");
      this.smGridContainer.classList.add("fluid-mode");

      particles.forEach(p => {
        const card = this.createCardElement(p);
        card.style.gridColumn = "";
        card.style.gridRow = "";
        this.smGridContainer.appendChild(card);
      });
    }

    this.renderKaTeX(this.smGridContainer);
  }

  renderHadronsGrid(composites) {
    this.hadronsGridContainer.innerHTML = "";
    composites.forEach(p => {
      const card = this.createCardElement(p);
      this.hadronsGridContainer.appendChild(card);
    });
    this.renderKaTeX(this.hadronsGridContainer);
  }

  renderDefinitionPills(definitionsList, activeId, onSelect) {
    if (!this.defPillsBar) return;
    this.defPillsBar.innerHTML = "";

    definitionsList.forEach(def => {
      const btn = document.createElement("button");
      btn.className = `def-pill-btn ${def.id === activeId ? 'active' : ''}`;
      btn.setAttribute("type", "button");
      btn.setAttribute("aria-pressed", def.id === activeId ? "true" : "false");
      btn.innerHTML = `<span class="def-pill-num">${def.level}</span> ${def.term}`;
      btn.addEventListener("click", () => {
        onSelect(def.id);
      });
      this.defPillsBar.appendChild(btn);
    });
  }

  renderDefinitionCard(def, onJumpToParticle) {
    if (!this.defDisplayCard || !def) return;

    // Format misconceptions
    const misconceptionsHtml = def.commonMisconceptions.map(m => {
      const formatted = m
        .replace(/^(Misconception:)/i, "<strong>$1</strong>")
        .replace(/(Reality:)/i, "<strong>$1</strong>");
      return `<li class="def-misconception-item">${formatted}</li>`;
    }).join("");

    // Jump buttons for related particles
    let jumpButtonsHtml = "";
    if (def.relatedParticleIds && def.relatedParticleIds.length > 0) {
      const buttons = def.relatedParticleIds.map(pid => {
        const p = getParticleById(pid);
        const label = p ? p.name : pid;
        return `<button type="button" class="def-jump-btn" data-particle-id="${pid}">Inspect ${label}</button>`;
      }).join("");
      jumpButtonsHtml = `
        <div class="def-block-item" style="margin-top: 0.25rem;">
          <span class="def-block-label">Explore Related Particles in Standard Model:</span>
          <div class="def-jump-pills-row">
            ${buttons}
          </div>
        </div>
      `;
    }

    this.defDisplayCard.innerHTML = `
      <div class="def-card-top-row">
        <div>
          <h3 class="def-card-term-name">${def.term}</h3>
        </div>
        <div class="def-card-badges">
          <span class="def-badge-scale">Step ${def.level} • ${def.scaleLabel}</span>
          <span class="def-badge-cat">${def.category}</span>
        </div>
      </div>

      <!-- Plain English Definition -->
      <div class="def-block-item">
        <span class="def-block-label">Plain English Meaning:</span>
        <p class="def-summary-text">${def.summary}</p>
      </div>

      ${def.spinSpectrum ? `
        <!-- Spin Spectrum Breakdown -->
        <div class="def-block-item">
          <span class="def-block-label">Spin Classifications & Physical Meaning:</span>
          <div class="def-spin-table">
            ${def.spinSpectrum.map(s => `
              <div class="def-spin-card">
                <div class="def-spin-val">${s.spinValue}</div>
                <div class="def-spin-meaning">${s.meaning}</div>
                <div class="def-spin-examples"><strong>Examples:</strong> ${s.examples}</div>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ''}

      <!-- Common Misconceptions -->
      <div class="def-block-item">
        <span class="def-block-label">Common Student Misconceptions & Reality:</span>
        <div class="def-misconceptions-box">
          <ul class="def-misconceptions-list">
            ${misconceptionsHtml}
          </ul>
        </div>
      </div>

      <!-- Relationships -->
      <div class="def-block-item">
        <span class="def-block-label">How It Relates to Other Components:</span>
        <div class="def-relationships-text">${def.relationships}</div>
      </div>

      <!-- Discovery & Historical Context -->
      <div class="def-history-box">
        <div class="def-history-row">
          <strong>Discovery:</strong>
          <span>${def.discovery.year} • ${def.discovery.discoverers}</span>
        </div>
        <div style="font-size: 0.8125rem; line-height: 1.45; margin-top: 0.2rem;">
          ${def.discovery.context}
        </div>
      </div>

      ${jumpButtonsHtml}
    `;

    // Bind jump buttons
    this.defDisplayCard.querySelectorAll(".def-jump-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const pid = btn.dataset.particleId;
        if (onJumpToParticle) {
          onJumpToParticle(pid);
        } else {
          this.openDrawer(pid);
        }
      });
    });
  }

  renderDrawerContent(particle) {
    this.drawerTitle.textContent = particle.name;
    this.drawerSymbol.innerHTML = `$${particle.symbolLatex || particle.symbol}$`;
    this.drawerCategory.textContent = particle.categoryLabel + (particle.generation ? ` • Generation ${particle.generation}` : "");

    // Structure badge
    const structureClass = particle.structure.isElementary ? "elementary" : "composite";
    const structureTitle = particle.structure.type;
    const constituentsText = particle.structure.constituentsLatex
      ? `$${particle.structure.constituentsLatex}$`
      : particle.structure.constituents;

    // Forces list items
    const forcesHtml = particle.forces.map(f => `
      <div class="force-item">
        <div class="force-item-header">
          <span class="force-name">${f.name}</span>
          <span class="force-status-tag ${f.acts ? 'active' : 'inactive'}">
            ${f.acts ? (f.detail.includes("MEDIATES") ? "Mediates Force" : "Interacts") : "No Interaction"}
          </span>
        </div>
        <div class="force-desc">${f.detail}</div>
      </div>
    `).join("");

    // Decay channels
    const decayChannelsHtml = particle.decayAndProduction.decayModes.map(d => `
      <tr>
        <td class="decay-channel-eq">$${d.channel}$</td>
        <td>${d.branchingRatio}</td>
        <td>${d.description}</td>
      </tr>
    `).join("");

    // Sources list
    const sourcesHtml = particle.sources.map(s => `
      <li class="source-item">
        <a class="source-link" href="${s.url}" target="_blank" rel="noopener noreferrer">
          ${s.title}
        </a>
        <div class="source-org">${s.organization}</div>
        <div class="source-attribution">Attribution: ${s.attribution}</div>
      </li>
    `).join("");

    this.drawerBody.innerHTML = `
      <!-- Structure & Substructure Section -->
      <section class="structure-box">
        <div class="structure-box-header">
          <span class="structure-type-tag ${structureClass}">${structureTitle}</span>
          <span style="font-size: 0.75rem; color: var(--text-dim); font-family: var(--font-mono);">
            ${particle.structure.isElementary ? "Fundamental (Point-like)" : "Bound State"}
          </span>
        </div>
        <div class="structure-constituents">
          <strong>Internal Composition:</strong> ${constituentsText}
        </div>
        <div class="structure-clarification">
          <strong>Note for Students:</strong> ${particle.structure.clarificationNote}
        </div>
      </section>

      <!-- Plain English Explanation (1st-Year Student Friendly) -->
      <section class="detail-section">
        <h3 class="detail-section-title">
          1. Plain English Explanation
          <span class="section-label-sub">Conceptual Guide</span>
        </h3>
        <p class="plain-text-p">${particle.plainEnglish.summary}</p>
        <div class="plain-role-box">
          <strong>Why it matters:</strong> ${particle.plainEnglish.roleInUniverse}
        </div>
      </section>

      <!-- Real Deal Physics -->
      <section class="detail-section">
        <h3 class="detail-section-title">
          2. Rigorous Physics
          <span class="section-label-sub">Quantum Numbers & Field Theory</span>
        </h3>
        <table class="quantum-table">
          <tbody>
            <tr>
              <th>Rest Mass</th>
              <td>$${particle.massLatex || particle.mass}$</td>
            </tr>
            <tr>
              <th>Electric Charge (Q)</th>
              <td>$${particle.chargeLatex || particle.charge}$</td>
            </tr>
            <tr>
              <th>Spin & Parity (J^P)</th>
              <td>$${particle.spinLatex || particle.spin}$</td>
            </tr>
            <tr>
              <th>Color Charge (QCD)</th>
              <td>${particle.colorCharge}</td>
            </tr>
            <tr>
              <th>Weak Isospin (T₃)</th>
              <td>$${particle.weakIsospinLatex || particle.weakIsospin}$</td>
            </tr>
            <tr>
              <th>Weak Hypercharge (Y)</th>
              <td>$${particle.hyperchargeLatex || particle.hypercharge}$</td>
            </tr>
          </tbody>
        </table>
        <p class="plain-text-p" style="margin-top: 0.5rem; font-size: 0.875rem;">
          <strong>Field Theory Context:</strong> ${particle.physicsDetails.fieldTheoryContext}
        </p>
        <p class="plain-text-p" style="margin-top: 0.25rem; font-size: 0.875rem;">
          <strong>Key Quantum Behavior:</strong> ${particle.physicsDetails.keyProperties}
        </p>
      </section>

      <!-- Fundamental Forces & Interactions -->
      <section class="detail-section">
        <h3 class="detail-section-title">
          3. Forces & Interactions
          <span class="section-label-sub">Coupling & Mediation</span>
        </h3>
        <div class="forces-list">
          ${forcesHtml}
        </div>
      </section>

      <!-- Decay Modes & Transformations -->
      <section class="detail-section">
        <h3 class="detail-section-title">
          4. Decay Modes & Production
          <span class="section-label-sub">Transformations & Stability</span>
        </h3>
        <div class="decay-meta-row">
          <div class="decay-meta-item">
            <strong>Stability:</strong> ${particle.decayAndProduction.isStable ? "Stable" : "Unstable"}
          </div>
          <div class="decay-meta-item">
            <strong>Mean Lifetime:</strong> $${particle.decayAndProduction.lifetimeLatex || particle.decayAndProduction.lifetime}$
          </div>
        </div>
        <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.5rem;">
          ${particle.decayAndProduction.stabilityNote}
        </p>
        
        <table class="decay-channels-table">
          <thead>
            <tr>
              <th>Channel / Decay Mode</th>
              <th>Branching Ratio</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            ${decayChannelsHtml}
          </tbody>
        </table>

        <div class="production-box">
          <strong>Production / Origin:</strong> ${particle.decayAndProduction.production}
        </div>
      </section>

      <!-- Sources & Academic Attribution -->
      <section class="detail-section">
        <h3 class="detail-section-title">
          5. Sources & Further Reading
          <span class="section-label-sub">Attributed References</span>
        </h3>
        <p style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: 0.5rem;">
          Direct reference links to peer-reviewed data compilations and official laboratory publications:
        </p>
        <ul class="sources-list">
          ${sourcesHtml}
        </ul>
      </section>
    `;
  }
}
