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
        <a href="#" className="nav-logo" aria-label="Restaurang Nanking">
          <span className="nav-logo-cn">南京故店</span>
          <span className="nav-logo-en">Restaurang Nanking</span>
        </a>

        <div className="nav-desktop-links">
          <a href="#meny" className="nav-desktop-link">Meny</a>
          <a href="#om-oss" className="nav-desktop-link">Om oss</a>
          <a href="#hitta-hit" className="nav-desktop-link">Hitta hit</a>
        </div>

        <div className="nav-right">
          <a
            href="https://www.foodora.se/restaurant/b7ae/restaurang-nanking"
            className="btn-lacquer nav-reserve-desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beställ
          </a>
          <button
            type="button"
            className={`nav-hamburger${open ? " open" : ""}`}
            onClick={toggle}
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${open ? " open" : ""}`} aria-hidden={!open}>
        <a href="#meny" className="nav-drawer-link" onClick={close}>Meny</a>
        <a href="#om-oss" className="nav-drawer-link" onClick={close}>Om oss</a>
        <a href="#hitta-hit" className="nav-drawer-link" onClick={close}>Hitta hit</a>
        <a
          href="https://www.foodora.se/restaurant/b7ae/restaurang-nanking"
          className="btn-lacquer"
          onClick={close}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "0.8rem" }}
        >
          Beställ
        </a>
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
