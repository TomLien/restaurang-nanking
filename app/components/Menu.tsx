"use client";

import { useRef, useState } from "react";
import type { MenuCategory } from "~/data/menu";

type PriceMode = "takeaway" | "alaCarte";

type Props = {
  categories: MenuCategory[];
  defaultCategoryId: string;
};

function formatPrice(takeaway: string, alaCarte: string, mode: PriceMode) {
  const price = mode === "takeaway" ? takeaway : alaCarte;
  if (price && price !== "0") return `${price} kr`;
  return "";
}

export default function Menu({ categories, defaultCategoryId }: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState(defaultCategoryId);
  const [priceMode, setPriceMode] = useState<PriceMode>("takeaway");
  const activeCategory = categories.find((c) => c.id === activeCategoryId) ?? categories[0];
  const menuGridRef = useRef<HTMLDivElement>(null);

  return (
    <section id="meny" className="section-pad" style={{ background: "var(--ink)" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="section-label section-label-light">— 菜單 —</p>
          <h2 className="section-title section-title-light">Meny</h2>
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
            }}
            role="tablist"
          >
            {categories.map((category) => (
              <li key={category.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategoryId === category.id}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => {
                    setActiveCategoryId(category.id);
                    const el = menuGridRef.current;
                    if (el) {
                      const navHeight =
                        document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
                      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                  className={`menu-tab${activeCategoryId === category.id ? " active" : ""}`}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div ref={menuGridRef} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="menu-price-toggle">
            <button
              type="button"
              className={`menu-price-toggle-btn${priceMode === "takeaway" ? " active" : ""}`}
              onClick={() => setPriceMode("takeaway")}
            >
              Avhämtning
            </button>
            <button
              type="button"
              className={`menu-price-toggle-btn${priceMode === "alaCarte" ? " active" : ""}`}
              onClick={() => setPriceMode("alaCarte")}
            >
              À la carte
            </button>
          </div>
          <div className="menu-heat-legend">
            {[
              { level: 1, label: "Lite stark" },
              { level: 2, label: "Mellanstark" },
              { level: 3, label: "Mycket stark" },
            ].map(({ level, label }) => (
              <span key={level} className="menu-heat-legend-item">
                {Array.from({ length: level }, (_, i) => (
                  <img
                    key={i}
                    src="/chili-icon.svg"
                    alt=""
                    className="menu-heat-icon"
                    aria-hidden="true"
                  />
                ))}{" "}
                = {label}
              </span>
            ))}
          </div>
        </div>

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
          {activeCategory.items
            .filter((item) => {
              const price = priceMode === "takeaway" ? item.takeawayPrice : item.aLaCartePrice;
              return price && price !== "0";
            })
            .map((item, index) => (
              <div key={item.number ?? `item-${index}`} className="menu-item">
                {item.number && <span className="menu-num">{item.number}.</span>}
                <div>
                  <div className="menu-title">{item.title}</div>
                  <p className="menu-desc">{item.description}</p>
                </div>
                <div className="menu-price-col">
                  <span className="menu-price">
                    {formatPrice(item.takeawayPrice, item.aLaCartePrice, priceMode)}
                  </span>
                  {item.heat > 0 && (
                    <span className="menu-heat" aria-label={`Styrka ${item.heat} av 3`}>
                      {Array.from({ length: item.heat }, (_, i) => (
                        <img
                          key={i}
                          src="/chili-icon.svg"
                          alt=""
                          className="menu-heat-icon"
                          aria-hidden="true"
                        />
                      ))}
                    </span>
                  )}
                </div>
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
                {category.items.map((item, index) => (
                  <div key={item.number ?? `ssr-${index}`}>
                    {item.number && <span>{item.number}</span>}
                    <span>{item.title}</span>
                    <span>{item.description}</span>
                    <span>{formatPrice(item.takeawayPrice, item.aLaCartePrice, priceMode)}</span>
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
