"use client";
import { useState } from "react";

export default function Login() {
  const [err, setErr] = useState("");

  async function submit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: f.get("username"),
        password: f.get("password"),
      }),
    });
    if (r.ok) window.location.href = "/admin";
    else setErr((await r.json()).error || "Login failed");
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-lg shadow w-80 space-y-4"
      >
        <h1 className="text-xl font-semibold">Admin Login</h1>
        <input
          name="username"
          placeholder="Username"
          autoComplete="username"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="w-full border rounded px-3 py-2"
          required
        />
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button className="w-full bg-black text-white rounded py-2">
          Sign in
        </button>
      </form>
    </div>
  );
}
