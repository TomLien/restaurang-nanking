const openingHours = [
  { days: "Måndag", hours: "11.00–21.00" },
  { days: "Tisdag", hours: "Stängt" },
  { days: "Onsdag–Fredag", hours: "11.00–21.00" },
  { days: "Lördag–Söndag", hours: "12.00–21.00" },
];

export default function About() {
  return (
    <section
      id="om-oss"
      className="section-pad"
      style={{ background: "var(--paper-warm)" }}
    >
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">— 關於我們 —</p>
          <h2 className="section-title">
            Om oss
            <span className="cn-sub">我們的故事</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Image column */}
          <div className="about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900"
              alt="Restaurang Nanking interiör"
              width={900}
              height={600}
            />
            <div className="about-cn-stamp">南</div>
          </div>

          {/* Text column */}
          <div>
            <div className="ornament-line">
              <span className="orn">✦</span>
            </div>

            <p className="about-body-lead">
              Hos restaurang Nanking serverar vi mat för alla smaker. Restaurang Nanking är en
              familjeägd restaurang som grundades för över 30 år sedan.
            </p>
            <p className="about-body">
              Med målet att lämna kunderna nöjda vill vi servera väl tillagade kinesiska och
              thailändska maträtter för våra kunder. Restaurangen är belägen ungefär 10 minuter
              från centrala Göteborg.
            </p>
            <p className="about-body">
              Vi önskar er varmt välkomna!
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-num">37</span>
                <span className="stat-label">År i drift</span>
              </div>
              <div className="stat">
                <span className="stat-num">3</span>
                <span className="stat-label">Generationer</span>
              </div>
              <div className="stat">
                <span className="stat-num">80+</span>
                <span className="stat-label">Rätter på menyn</span>
              </div>
            </div>

            {/* Opening hours */}
            <div style={{ marginTop: "2.4rem" }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--lacquer)",
                  marginBottom: "0.75rem",
                }}
              >
                — Öppettider —
              </p>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {openingHours.map(({ days, hours }) => (
                    <tr
                      key={days}
                      style={{ borderBottom: "1px solid rgba(107,94,82,0.18)" }}
                    >
                      <td
                        style={{
                          fontFamily: "'Libre Baskerville', Georgia, serif",
                          fontSize: "0.82rem",
                          color: "var(--ash)",
                          padding: "0.7rem 0.5rem 0.7rem 0",
                        }}
                      >
                        {days}
                      </td>
                      <td
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "0.96rem",
                          fontWeight: 600,
                          color: "var(--ink)",
                          textAlign: "right",
                          padding: "0.7rem 0",
                        }}
                      >
                        {hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: "1.2rem" }}>
                <a href="#hitta-hit" className="btn-primary">
                  Boka bord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
