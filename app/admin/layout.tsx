"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav: [string, string][] = [
  ["Dashboard", "/admin/dashboard"],
  ["Company", "/admin/company"],
  ["Hero", "/admin/hero"],
  ["Services", "/admin/services"],
  ["Intro", "/admin/intro"],
  ["Why Choose Us", "/admin/why"],
  ["Process", "/admin/process"],
  ["CTA", "/admin/cta"],
  ["About", "/admin/about"],
  ["Legal", "/admin/legal"],
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // login page: no sidebar
  if (pathname?.startsWith("/admin/login")) return <>{children}</>;

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      <aside className="w-60 shrink-0 border-r border-slate-200 bg-white p-4 flex flex-col">
        <div className="font-bold mb-6 text-slate-900">IQ Admin</div>
        <nav className="space-y-1 text-sm flex-1">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="block rounded px-3 py-2 hover:bg-slate-100"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          onClick={logout}
          className="w-full rounded px-3 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
        >
          Log out
        </button>
      </aside>
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
