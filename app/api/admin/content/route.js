import fs from "fs";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { verifySession, COOKIE } from "@/lib/auth";
import { getSite, SITE_PATH } from "@/lib/site";

// the new content must have the same shape as the current file
function sameShape(tpl, v) {
  if (typeof tpl === "string") return typeof v === "string" && v.length < 20000;
  if (Array.isArray(tpl))
    return (
      Array.isArray(v) && v.length < 100 && v.every((x) => sameShape(tpl[0], x))
    );
  if (tpl && typeof tpl === "object") {
    return (
      v &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      Object.keys(v).length === Object.keys(tpl).length &&
      Object.keys(tpl).every((k) => sameShape(tpl[k], v[k]))
    );
  }
  return false;
}

export async function PUT(req) {
  // re-check here too, don't rely on middleware alone
  if (!(await verifySession(req.cookies.get(COOKIE)?.value))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => null);
  const current = getSite();
  const next =
    body?.section && Object.hasOwn(current, body.section)
      ? { ...current, [body.section]: body.value }
      : body;
  if (!next || !sameShape(current, next)) {
    return NextResponse.json(
      { error: "Invalid content structure" },
      { status: 400 },
    );
  }

  fs.copyFileSync(SITE_PATH, SITE_PATH + ".bak");
  fs.writeFileSync(SITE_PATH + ".tmp", JSON.stringify(next, null, 2));
  fs.renameSync(SITE_PATH + ".tmp", SITE_PATH); // atomic swap

  revalidatePath("/", "layout"); // refresh all public pages
  return NextResponse.json({ ok: true });
}
