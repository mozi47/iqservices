import Link from "next/link";
import s from "@/content/site.json";
import Banner from "@/components/Banner";
export const metadata={title:"Client Portal | IQ Operations Ltd"};
export default function Portal(){return(<>
<Banner title="Client Portal" sub="For existing IQ Operations clients."/>
<section><div className="w"><p className="lead">To request portal access or support, contact our team at <a href={`mailto:${s.company.email}`}><strong>{s.company.email}</strong></a>.</p><div className="row"><Link href="/contact" className="btn">Contact Us</Link></div></div></section></>)}
