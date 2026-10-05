import s from "@/content/site.json";
import Banner from "@/components/Banner";
export const metadata={title:"Privacy Policy | IQ Operations Ltd"};
export default function Page(){return(<><Banner title="Privacy Policy"/><section><div className="w"><p className="lead" style={{whiteSpace:"pre-wrap"}}>{s.legal.privacy}</p></div></section></>)}
