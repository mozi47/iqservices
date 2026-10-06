"use client";

export default function LogoutButton() {
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }
  return (
    <button
      onClick={logout}
      className="w-full rounded px-3 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
    >
      Log out
    </button>
  );
}
