import Link from "next/link";
import s from "@/content/site.json";
import Cards from "@/components/Cards";
import Cta from "@/components/Cta";
export default function Home(){const h=s.hero;return(<>
<div className="hero"><div className="w"><h1>{h.headline}</h1><p>{h.sub}</p><div className="row"><Link href="/services" className="btn">{h.cta1}</Link><Link href="/contact" className="btn o">{h.cta2}</Link></div></div></div>
<section><div className="w"><Cards items={s.services.map(x=>({title:x.title,text:x.short}))}/></div></section>
<section className="alt"><div className="w"><h2>{s.intro.title}</h2><p className="lead">{s.intro.body}</p><div className="row"><Link href="/about" className="btn">{s.intro.button}</Link></div></div></section>
<section><div className="w"><h2>Why Partner With Us?</h2><Cards items={s.why}/></div></section>
<section className="alt"><div className="w"><h2>How We Work</h2><Cards items={s.process} num/></div></section>
<Cta c={s.cta}/></>)}
