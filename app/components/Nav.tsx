"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden";
      return !prev;
    });
  };

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav className="nav-bar">
        <a href="/" className="nav-logo" aria-label="Restaurang Nanking">
          <span className="nav-logo-cn">南京故店</span>
          <span className="nav-logo-en">Restaurang Nanking</span>
        </a>

        <div className="nav-desktop-links">
          <a href="#meny" className="nav-desktop-link">
            Meny
          </a>
          <a href="#om-oss" className="nav-desktop-link">
            Om oss
          </a>
          <a href="#oppettider" className="nav-desktop-link">
            Öppettider
          </a>
          <a href="#hitta-hit" className="nav-desktop-link">
            Hitta hit
          </a>
        </div>
      </nav>

      <div className={`nav-drawer${open ? " open" : ""}`} aria-hidden={!open}>
        {/* biome-ignore lint/a11y/useValidAnchor: hash navigation link that also closes drawer */}
        <a href="#meny" className="nav-drawer-link" onClick={close}>
          Meny
        </a>
        {/* biome-ignore lint/a11y/useValidAnchor: hash navigation link that also closes drawer */}
        <a href="#om-oss" className="nav-drawer-link" onClick={close}>
          Om oss
        </a>
        {/* biome-ignore lint/a11y/useValidAnchor: hash navigation link that also closes drawer */}
        <a href="#oppettider" className="nav-drawer-link" onClick={close}>
          Öppettider
        </a>
        {/* biome-ignore lint/a11y/useValidAnchor: hash navigation link that also closes drawer */}
        <a href="#hitta-hit" className="nav-drawer-link" onClick={close}>
          Hitta hit
        </a>
        {/* biome-ignore lint/a11y/useValidAnchor: hash navigation link that also closes drawer */}
        <a
          href="#hitta-hit"
          className="btn-lacquer"
          onClick={close}
          style={{ marginTop: "0.4rem" }}
        >
          Boka bord
        </a>
      </div>
    </>
  );
}
