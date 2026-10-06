import Link from "next/link";
export default function Cta({ c }) {
  return (
    <section className="cta">
      <div className="w">
        <h2>{c.headline}</h2>
        <p>{c.sub}</p>
        <Link href="/contact" className="btn">
          {c.button}
        </Link>
      </div>
    </section>
  );
}
