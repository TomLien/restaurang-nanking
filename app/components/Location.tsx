export default function Location() {
  return (
    <section id="hitta-hit" className="section-pad" style={{ background: "var(--paper-warm)" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">— 位置 —</p>
          <h2 className="section-title">Hitta hit</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="location-grid"
        >
          {/* Info column */}
          <address style={{ fontStyle: "normal" }}>
            <div className="location-row">
              <svg
                className="loc-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="loc-label">Adress</p>
                <p className="loc-value">
                  Lantmätaregatan 12
                  <br />
                  417 06 Göteborg
                </p>
              </div>
            </div>

            <div className="location-row">
              <svg
                className="loc-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="loc-label">Telefon</p>
                <p className="loc-value">
                  <a href="tel:+4631230391">031-23 03 91</a>
                </p>
              </div>
            </div>

            <div className="location-row">
              <svg
                className="loc-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="loc-label">E-post</p>
                <p className="loc-value">
                  <a href="mailto:info@restaurangnanking.se">info@restaurangnanking.se</a>
                </p>
              </div>
            </div>
          </address>

          {/* Map column */}
          <div className="map-container">
            <div className="map-overlay-label">Göteborg, Sverige</div>
            <iframe
              title="Karta över Restaurang Nanking"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.6681596748485!2d11.9420144!3d57.7220943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff4a8d7fb1641%3A0xccfc04f35d594ef!2sRestaurang%20Nanking!5e0!3m2!1ssv!2sse!4v1772919511032!5m2!1ssv!2sse"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .location-grid {
            grid-template-columns: 1fr 1.55fr !important;
          }
        }
      `}</style>
    </section>
  );
}
