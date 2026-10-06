export default function Banner({ title, sub }) {
  return (
    <div className="hero">
      <div className="w">
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </div>
  );
}
