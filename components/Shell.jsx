"use client";
import Link from "next/link";
import { useSite } from "@/components/Site";
import Logo from "@/components/Logo";
const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Client Portal", "/client-portal"],
  ["Contact Us", "/contact"],
];
export default function Shell({ children }) {
  const c = useSite().company;
  return (
    <>
      <header>
        <div className="w nav">
          <Link href="/" aria-label="IQ Operations home">
            <Logo />
          </Link>
          <nav>
            {nav.map(([t, h]) => (
              <Link key={h} href={h}>
                {t}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn">
            Request Consultation
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="w fgrid">
          <div>
            <Logo />
            <p className="slogan">{c.slogan}</p>
          </div>
          <div>
            <h4>Company</h4>
            {nav.slice(0, 4).map(([t, h]) => (
              <Link key={h} href={h}>
                {t}
              </Link>
            ))}
          </div>
          <div>
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
        <div className="w fbar">
          <span>
            © {new Date().getFullYear()} {c.name}. All rights reserved.
          </span>
          <span>
            Registered in {c.region}. Company No. {c.crn}
          </span>
        </div>
      </footer>
    </>
  );
}
