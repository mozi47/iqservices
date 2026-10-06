import s from "@/content/site.json";
import Banner from "@/components/Banner";
export const metadata = { title: "Terms & Conditions | IQ Operations Ltd" };
export default function Page() {
  return (
    <>
      <Banner title="Terms & Conditions" />
      <section>
        <div className="w">
          <p className="lead" style={{ whiteSpace: "pre-wrap" }}>
            {s.legal.terms}
          </p>
        </div>
      </section>
    </>
  );
}
