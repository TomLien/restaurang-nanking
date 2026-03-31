export default function About() {
  return (
    <section id="om-oss" className="section-pad" style={{ background: "var(--paper-warm)" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">— 關於我們 —</p>
          <h2 className="section-title">Om oss</h2>
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
            <img src="/anka.jpg" alt="Restaurang Nanking interiör" width={243} height={304} />
            <div className="about-cn-stamp">南</div>
          </div>

          {/* Text column */}
          <div>
            <p className="about-body-lead">
              Hos restaurang Nanking serverar vi mat för alla smaker. Restaurang Nanking är en
              familjeägd restaurang som grundades för över 30 år sedan.
            </p>
            <p className="about-body">
              Med målet att lämna kunderna nöjda vill vi servera väl tillagade kinesiska och
              thailändska maträtter för våra kunder. Restaurangen är belägen ungefär 10 minuter från
              centrala Göteborg.
            </p>
            <p className="about-body">Vi önskar er varmt välkomna!</p>
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
