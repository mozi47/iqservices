import Link from "next/link";
import s from "@/content/site.json";
import "./globals.css";
export const metadata={title:`${s.company.name} | Facility, Digital & Administrative Support`,description:s.hero.sub};
const nav=[["Home","/"],["About Us","/about"],["Services","/services"],["Client Portal","/client-portal"],["Contact Us","/contact"]];
export default function Layout({children}){const c=s.company;
const quick=[...nav.slice(0,4),["Privacy Policy","/privacy"],["Terms & Conditions","/terms"]];
return(<html lang="en-GB"><body>
<header><div className="w nav"><Link href="/" className="logo">{c.short}</Link><nav>{nav.map(([t,h])=><Link key={h} href={h}>{t}</Link>)}</nav><Link href="/contact" className="btn">Request Consultation</Link></div></header>
<main>{children}</main>
<footer><div className="w">
<p>{c.name} is registered in {c.region}.<br/>Company Registration Number: {c.crn}<br/>Registered Office Address: {c.address}<br/>Email: <a href={`mailto:${c.email}`}>{c.email}</a><br/>Phone: {c.phone}</p>
<p>Quick Links: {quick.map(([t,h],i)=><span key={h}>{i?" | ":""}<Link href={h}>{t}</Link></span>)}</p>
<p><em>{c.slogan}</em></p>
<p>© {new Date().getFullYear()} {c.name}. All rights reserved.</p>
</div></footer></body></html>)}
