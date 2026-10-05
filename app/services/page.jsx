import s from "@/content/site.json";
import Banner from "@/components/Banner";
import Cta from "@/components/Cta";
export const metadata={title:"Services | IQ Operations Ltd"};
export default function Services(){return(<>
<Banner title="Our Services" sub="Four service divisions, one accountable management team."/>
<section><div className="w"><div className="grid">{s.services.map(x=><div className="card" key={x.title}><h3>{x.title}</h3><p><strong>What we do:</strong> {x.what}</p><p className="ex"><strong>Example project:</strong> {x.example}</p></div>)}</div></div></section>
<Cta c={s.cta}/></>)}
