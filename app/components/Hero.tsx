const LanternSVG = () => (
  <svg width="22" height="74" viewBox="0 0 22 74" fill="none" aria-hidden="true">
    <line x1="11" y1="0" x2="11" y2="10" stroke="#c9933a" strokeWidth="1.5" />
    <rect x="2" y="10" width="18" height="46" rx="9" fill="#c0392b" opacity="0.88" />
    <rect x="6" y="14" width="10" height="38" rx="5" fill="#e04030" opacity="0.55" />
    <line x1="11" y1="56" x2="11" y2="64" stroke="#c9933a" strokeWidth="1.5" />
    <ellipse cx="11" cy="64" rx="3.5" ry="5" fill="#c9933a" opacity="0.65" />
  </svg>
);

export default function Hero() {
  return (
    <header
      style={{
        position: "relative",
        minHeight: "560px",
        height: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background with Ken Burns zoom */}
      <div
        className="hero-bg"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(/hero-image.jpg)",
        }}
      />

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(26,16,8,0.62) 0%, rgba(26,16,8,0.22) 42%, rgba(26,16,8,0.74) 100%)",
        }}
      />

      {/* Left decorative stripe + lantern */}
      <div aria-hidden="true" className="hero-stripe" style={{ left: "10%" }} />
      <div aria-hidden="true" className="hero-lantern" style={{ left: "calc(10% - 11px)" }}>
        <LanternSVG />
      </div>

      {/* Right decorative stripe + lantern */}
      <div aria-hidden="true" className="hero-stripe" style={{ right: "10%" }} />
      <div
        aria-hidden="true"
        className="hero-lantern hero-lantern-right"
        style={{ right: "calc(10% - 11px)" }}
      >
        <LanternSVG />
      </div>

      {/* Content */}
      <div className="hero-content">
        <p className="hero-eyebrow"></p>

        <h1 className="hero-name">Restaurang Nanking</h1>

        <p className="hero-cn">南京故店</p>

        <div className="hero-divider">
          <span />
          <div className="diamond" />
          <span />
        </div>

        <div className="hero-taglines">
          <p className="hero-tagline">Äkta kinesisk mat sedan 1993</p>
          <p className="hero-tagline">i Göteborg</p>
        </div>


        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#meny" className="btn-primary">
            Se vår meny
          </a>
          <a href="#hitta-hit" className="btn-lacquer">
            Hitta hit
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          stroke="rgba(201,147,58,0.7)"
          strokeWidth="1.5"
          role="img"
          aria-label="Scrolla ner"
        >
          <path d="M1 1l5 5 5-5" />
        </svg>
      </div>
    </header>
  );
}
