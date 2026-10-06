export const metadata = { title: "Admin", robots: { index: false, follow: false } };

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
      <p className="text-slate-600">
        Pick a section on the left to edit it. Changes go live as soon as you press Save.
      </p>
      <a href="/" target="_blank" className="inline-block mt-4 underline text-sm">
        View live site ↗
      </a>
    </div>
  );
}