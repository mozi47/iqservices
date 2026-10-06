import "./globals.css";
import Link from "next/link";
import s from "@/content/site.json";

const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Contact Us", "/contact"],
];

const footerServices = [
  ["Facility Oversight", "/services"],
  ["Digital Solutions", "/services"],
  ["Remote Monitoring", "/services"],
  ["Admin Resources", "/services"],
];

export default function PublicLayout({ children }) {
  const c = s.company;
  const year = new Date().getFullYear();

  return (
    <html lang="en-GB">
      <body suppressHydrationWarning>
        <header>
          <div className="w nav">
            <Link href="/" className="logo">
              {c.short}
            </Link>
            <nav>
              {nav.map(([t, h]) => (
                <Link key={h} href={h}>
                  {t}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="w footer-grid">
            {/* Column 1: Brand + slogan */}
            <div className="footer-col">
              <h4 className="footer-brand">{c.short}</h4>
              <p className="footer-slogan">{c.slogan}</p>
              <p className="footer-region">Registered in {c.region}</p>
            </div>

            {/* Column 2: Quick links */}
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                {nav.map(([t, h]) => (
                  <li key={h}>
                    <Link href={h}>{t}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                {footerServices.map(([t, h]) => (
                  <li key={t}>
                    <Link href={h}>{t}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-col">
              <h5>Contact</h5>
              <ul className="footer-contact">
                <li>
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </li>
                <li>{c.phone}</li>
                <li>{c.address}</li>
                <li>CRN: {c.crn}</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="w footer-bottom-inner">
              <p>
                © {year} {c.name}. All rights reserved.
              </p>
              <p className="footer-legal">
                <Link href="/privacy">Privacy Policy</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/terms">Terms &amp; Conditions</Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
