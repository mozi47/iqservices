import "./globals.css";
import Link from "next/link";
import s from "@/content/site.json";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";

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
              <Image
                src="/logo.svg"
                alt="IQ Operations"
                width={150}
                height={60}
                className="logo-image"
                priority
              />
            </Link>

            <SiteNav />
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="w footer-grid">
            <div className="footer-col">
              <Image
                src="/logo.svg"
                alt={c.name}
                width={230}
                height={80}
                className="logo-image"
              />
              <p className="footer-slogan">{c.slogan}</p>
              <p className="footer-region">Registered in {c.region}</p>
            </div>

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