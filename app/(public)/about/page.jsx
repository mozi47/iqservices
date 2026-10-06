import s from "@/content/site.json";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Cta from "@/components/Cta";
export const metadata = { title: "About Us | IQ Operations Ltd" };
export default function About() {
  const a = s.about;
  return (
    <>
      <Banner title={a.title} sub={a.sub} />
      <section>
        <div className="w">
          <h2>Company Overview & Mission</h2>
          {a.overview.map((p) => (
            <p className="lead" key={p}>
              {p}
            </p>
          ))}
          <p>
            <em>{s.company.slogan}</em>
          </p>
        </div>
      </section>
      <section className="alt">
        <div className="w">
          <h2>Our Operational Pillars</h2>
          <Cards
            items={s.services.map((x) => ({ title: x.title, text: x.detail }))}
          />
        </div>
      </section>
      <section>
        <div className="w">
          <h2>Real-World Project Scope</h2>
          <Cards items={a.projects} />
        </div>
      </section>
      <section className="alt">
        <div className="w">
          <h2>Why Partner With IQ Operations?</h2>
          <Cards items={a.why} />
        </div>
      </section>
      <Cta c={a.cta} />
    </>
  );
}
