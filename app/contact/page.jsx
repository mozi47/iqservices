import s from "@/content/site.json";
import Banner from "@/components/Banner";
export const metadata = { title: "Contact Us | IQ Operations Ltd" };
export default function Contact() {
  const c = s.company;
  return (
    <>
      <Banner title="Contact Us" sub={s.cta.sub} />
      <section>
        <div className="w">
          <div className="grid">
            <div className="card">
              <h3>Email</h3>
              <p className="contact-email">
                <a href={`mailto:${c.email}`}>{c.email}</a>
                <a href={`mailto:${c.email2}`}>{c.email2}</a>
              </p>
            </div>
            <div className="card">
              <h3>Phone</h3>
              <p>{c.phone}</p>
            </div>
            <div className="card">
              <h3>Registered Office</h3>
              <p>{c.address}</p>
            </div>
            <div className="card">
              <h3>Company Registration Number</h3>
              <p>{c.crn}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
