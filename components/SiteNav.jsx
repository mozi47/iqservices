"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Contact Us", "/contact"],
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      <nav
        id="primary-nav"
        className={`primary-nav ${open ? "is-open" : ""}`}
      >
        {nav.map(([t, h]) => (
          <Link key={h} href={h} onClick={() => setOpen(false)}>
            {t}
          </Link>
        ))}
      </nav>
    </>
  );
}