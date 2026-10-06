"use client";
import { useState } from "react";

const blank = (v) =>
  typeof v === "string"
    ? ""
    : Array.isArray(v)
      ? []
      : Object.fromEntries(Object.entries(v).map(([k, x]) => [k, blank(x)]));

const label = (k) =>
  k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

export function Field({ name, value, onChange }) {  if (typeof value === "string") {
    return (
      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">{label(name)}</span>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={value.length > 120 ? 5 : 1}
          className="mt-1 w-full border rounded px-3 py-2 text-sm"
        />
      </label>
    );
  }
  if (Array.isArray(value)) {
    return (
      <div className="mb-3">
        <p className="text-sm font-semibold mb-2">{label(name)}</p>
        {value.map((item, i) => (
          <div key={i} className="border rounded p-3 mb-2 bg-gray-50">
            <Field
              name={`${i + 1}`}
              value={item}
              onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))}
            />
            <button
              type="button"
              className="text-red-600 text-xs"
              onClick={() => onChange(value.filter((_, j) => j !== i))}
            >
              Remove
            </button>
          </div>
        ))}
        {value.length > 0 && (
          <button
            type="button"
            className="text-sm underline"
            onClick={() => onChange([...value, blank(value[0])])}
          >
            + Add item
          </button>
        )}
      </div>
    );
  }
  return (
    <fieldset className="border rounded p-4 mb-4">
      <legend className="px-2 font-semibold">{label(name)}</legend>
      {Object.entries(value).map(([k, v]) => (
        <Field
          key={k}
          name={k}
          value={v}
          onChange={(nv) => onChange({ ...value, [k]: nv })}
        />
      ))}
    </fieldset>
  );
}

export default function Editor({ initial }) {
  const [data, setData] = useState(initial);
  const [msg, setMsg] = useState("");

  async function save() {
    setMsg("Saving…");
    const r = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setMsg(
      r.ok
        ? "Saved ✓ — live on the site"
        : (await r.json()).error || "Save failed",
    );
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="sticky top-0 bg-white py-3 flex items-center gap-3 border-b mb-6 z-10">
        <h1 className="text-xl font-semibold flex-1">Site Content</h1>
        <span className="text-sm text-gray-600">{msg}</span>
        <button
          onClick={save}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button onClick={logout} className="border px-4 py-2 rounded">
          Logout
        </button>
      </div>
      {Object.entries(data).map(([k, v]) => (
        <Field
          key={k}
          name={k}
          value={v}
          onChange={(nv) => setData({ ...data, [k]: nv })}
        />
      ))}
    </div>
  );
}
