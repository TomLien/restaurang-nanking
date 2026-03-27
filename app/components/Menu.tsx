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
    <section id="meny" className="section-pad" style={{ background: "var(--ink)" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="section-label section-label-light">— 菜單 —</p>
          <h2 className="section-title section-title-light">Meny</h2>
          <p className="menu-price-legend">Avhämtning / À la carte</p>
          {/* <div className="menu-heat-legend">
            {[
              { level: 1, label: "Lite stark" },
              { level: 2, label: "Mellanstark" },
              { level: 3, label: "Mycket stark" },
            ].map(({ level, label }) => (
              <span key={level} className="menu-heat-legend-item">
                {Array.from({ length: level }, (_, i) => (
                  <svg
                    key={i}
                    className="menu-heat-icon"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M161.597 850.945c120.85 24.006 216.772 10.323 272.34-2.196 46.539-10.488 284.518-69.271 386.371-273.361 22.555-45.201 62.66-125.529 29.375-202.718-39.863-92.386-151.961-113.417-163.063-115.306-22.577-3.844-102.128-13.87-163.986 33.175-81.68 62.166-54.127 164.468-97.088 283.167-28.661 79.187-94.836 182.732-263.949 277.237z" /><path d="M587.072 245.859c-10.686 26.356 34.219 74.092 79.703 97.098 64.219 32.494 149.897 25.851 161.043-3.547 10.828-28.552-58.201-53.545-55.554-111.682 1.911-42.684 40.335-63.637 29.386-101.545-3.909-13.573-14.935-31.165-26.861-31.023-24.248 0.297-19.92 69.71-68.415 109.507-49.010 40.225-108.166 13.771-119.302 41.192z" />
                  </svg>
                ))}
                {" "}= {label}
              </span>
            ))}
          </div> */}
          <p className="section-title-light" style={{ paddingTop: "3rem" }}>Menyn är för tillfället under konstruktion, återkommer inom kort!</p>
        </div>


        {/* Category tabs */}
        {/* <nav aria-label="Menykategorier" style={{ marginBottom: "2.5rem" }}>
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
        </nav> */}

        {/* Menu items grid */}
        {/* <div
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
                <div className="menu-title">
                  {item.title}
                  {item.heat > 0 && (
                    <span className="menu-heat" aria-label={`Styrka ${item.heat} av 3`}>
                      {Array.from({ length: item.heat }, (_, i) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: static identical icons, no reordering
                        <svg
                          key={i}
                          className="menu-heat-icon"
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M161.597 850.945c120.85 24.006 216.772 10.323 272.34-2.196 46.539-10.488 284.518-69.271 386.371-273.361 22.555-45.201 62.66-125.529 29.375-202.718-39.863-92.386-151.961-113.417-163.063-115.306-22.577-3.844-102.128-13.87-163.986 33.175-81.68 62.166-54.127 164.468-97.088 283.167-28.661 79.187-94.836 182.732-263.949 277.237z" /><path d="M587.072 245.859c-10.686 26.356 34.219 74.092 79.703 97.098 64.219 32.494 149.897 25.851 161.043-3.547 10.828-28.552-58.201-53.545-55.554-111.682 1.911-42.684 40.335-63.637 29.386-101.545-3.909-13.573-14.935-31.165-26.861-31.023-24.248 0.297-19.92 69.71-68.415 109.507-49.010 40.225-108.166 13.771-119.302 41.192z" />
                        </svg>
                      ))}
                    </span>
                  )}
                </div>
                <p className="menu-desc">{item.description}</p>
              </div>
              <span className="menu-price">
                {item.takeawayPrice} / {item.aLaCartePrice} kr
              </span>
            </div>
          ))}
        </div> */}

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
                    <span>
                      {item.takeawayPrice} / {item.aLaCartePrice} kr
                    </span>
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
