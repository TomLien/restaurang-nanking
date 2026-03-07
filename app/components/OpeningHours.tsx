const openingHours = [
  { days: "Måndag", hours: "11.00–21.00" },
  { days: "Tisdag", hours: "Stängt" },
  { days: "Onsdag–Fredag", hours: "11.00–21.00" },
  { days: "Lördag–Söndag", hours: "12.00–21.00" },
];

export default function OpeningHours() {
  return (
    <section id="oppettider" className="section-pad" style={{ background: "var(--ink)" }}>
      <div style={{ maxWidth: "40rem", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label section-label-light">— 營業時間 —</p>
          <h2 className="section-title section-title-light">Öppettider</h2>
        </div>

        <div className="ornament-line ornament-line-light">
          <span className="orn">✦</span>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {openingHours.map(({ days, hours }) => (
              <tr key={days} style={{ borderBottom: "1px solid rgba(245,239,228,0.15)" }}>
                <td
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    fontSize: "0.92rem",
                    color: "var(--paper-warm)",
                    padding: "0.9rem 0.5rem 0.9rem 0",
                  }}
                >
                  {days}
                </td>
                <td
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    textAlign: "right",
                    padding: "0.9rem 0",
                  }}
                >
                  {hours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
