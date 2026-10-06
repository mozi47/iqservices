"use client";
import { useState } from "react";
import { Field } from "@/app/admin/Editor";

export default function SectionEditor({
  section,
  initial,
}: {
  section: string;
  initial: any;
}) {
  const [data, setData] = useState(initial);
  const [msg, setMsg] = useState("");

  async function save() {
    setMsg("Saving…");
    const r = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, value: data }),
    });
    setMsg(
      r.ok
        ? "Saved ✓ live on the site"
        : (await r.json()).error || "Save failed",
    );
  }

  return (
    <div>
      <div className="sticky top-0 bg-slate-50 py-3 flex items-center gap-3 border-b mb-6 z-10">
        <span className="text-sm text-slate-600 flex-1">{msg}</span>
        <button
          onClick={save}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
      <Field name={section} value={data} onChange={setData} />
    </div>
  );
}
