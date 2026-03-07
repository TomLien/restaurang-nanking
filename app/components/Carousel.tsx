import { useCallback, useEffect, useRef, useState } from "react";

interface CarouselSlide {
  imageUrl: string;
  title: string;
  description: string;
  tag?: string;
}

const slides: CarouselSlide[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dagens Lunch 135:-",
    description: "Välj fritt från lunchmenyn mellan kyckling, biff, fläsk & vegetariska rätter. Inklusive sallad, valfri dryck & kaffe. Avhämtning 120:- (exklusive dricka & sallad).",
    tag: "Erbjudande",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1605291569092-5cbe5ded7b60?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Foodora",
    description: "Vi finns på Foodora!",
    tag: "Nyhet",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function Carousel() {
  const items = slides;
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((i) => (i + 1) % items.length);
    }, AUTOPLAY_INTERVAL);
  }, [items.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, resetTimer]);

  function prev() {
    setCurrent((i) => (i - 1 + items.length) % items.length);
  }
  function next() {
    setCurrent((i) => (i + 1) % items.length);
  }

  const slide = items[current];

  return (
    <section
      aria-label="Erbjudanden och nyheter"
      style={{ background: "var(--paper-warm)", padding: "7rem 0" }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 1.2rem",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
          <p className="section-label section-label-light">Aktuellt</p>
          <h2 className="section-title">
            Erbjudanden &amp; Nyheter
          </h2>
        </div>

        {/* Slide area */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Image + overlay */}
          <div
            key={current}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 7",
              overflow: "hidden",
              animation: "slideIn 0.9s ease both",
            }}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "sepia(10%) contrast(1.05)",
              }}
            />
            {/* Dark gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(26,16,8,0.88) 0%, rgba(26,16,8,0.28) 55%, transparent 100%)",
              }}
            />
            {/* Text content */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.6rem 1.4rem",
              }}
            >
              {slide.tag && (
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "0.62rem",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    background: "var(--gold)",
                    padding: "0.22rem 0.7rem",
                    marginBottom: "0.7rem",
                  }}
                >
                  {slide.tag}
                </span>
              )}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
                  fontWeight: 600,
                  color: "var(--paper)",
                  lineHeight: 1.15,
                  margin: "0 0 0.4rem",
                }}
              >
                {slide.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  fontSize: "clamp(0.8rem, 2.2vw, 0.92rem)",
                  color: "rgba(245,239,228,0.82)",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "52ch",
                }}
              >
                {slide.description}
              </p>
            </div>
          </div>

          {/* Prev button */}
          <button
            type="button"
            onClick={prev}
            className="carousel-btn"
            style={{ left: "0.6rem" }}
            aria-label="Föregående bild"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={next}
            className="carousel-btn"
            style={{ right: "0.6rem" }}
            aria-label="Nästa bild"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.6rem",
            marginTop: "1.2rem",
          }}
          role="tablist"
          aria-label="Bildväljare"
        >
          {items.map((_, i) => (
            <button
              // biome-ignore lint/suspicious/noArrayIndexKey: index is stable for static slides
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Bild ${i + 1} av ${items.length}`}
              onClick={() => setCurrent(i)}
              className={`carousel-dot${i === current ? " active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { slides as carouselSlides };
