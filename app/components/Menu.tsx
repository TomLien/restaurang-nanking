"use client";

import { useState } from "react";
import type { MenuCategory } from "~/data/menu";

type Props = {
  categories: MenuCategory[];
  defaultCategoryId: string;
};

export default function Menu({ categories, defaultCategoryId }: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState(defaultCategoryId);
  const activeCategory = categories.find((c) => c.id === activeCategoryId) ?? categories[0];

  return (
    <section
      id="meny"
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="section-label section-label-light">— 菜單 —</p>
          <h2 className="section-title section-title-light">
            Vår Meny
            <span className="cn-sub">精選菜餚</span>
          </h2>
          <p className="menu-intro" style={{ marginTop: "1rem" }}>
            Över 100 rätter — autentiska smaker från Kina
          </p>
        </div>

        {/* Category tabs */}
        <nav aria-label="Menykategorier" style={{ marginBottom: "2.5rem" }}>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
              overflowX: "auto",
            }}
            role="tablist"
          >
            {categories.map((category) => (
              <li key={category.id} role="presentation" style={{ flexShrink: 0 }}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategoryId === category.id}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`menu-tab${activeCategoryId === category.id ? " active" : ""}`}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu items grid */}
        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0 2.5rem",
          }}
          className="menu-grid"
        >
          {activeCategory.items.map((item) => (
            <div key={item.number} className="menu-item">
              <span className="menu-num">{String(item.number).padStart(2, "0")}</span>
              <div>
                <div className="menu-title">{item.title}</div>
                <p className="menu-desc">{item.description}</p>
              </div>
              <span className="menu-price">{item.price} kr</span>
            </div>
          ))}
        </div>

        {/* SSR fallback for SEO */}
        <div className="sr-only" aria-hidden="true">
          {categories
            .filter((c) => c.id !== activeCategory.id)
            .map((category) => (
              <div key={category.id}>
                <h3>{category.label}</h3>
                {category.items.map((item) => (
                  <div key={item.number}>
                    <span>{item.number}</span>
                    <span>{item.title}</span>
                    <span>{item.description}</span>
                    <span>{item.price} kr</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .menu-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
