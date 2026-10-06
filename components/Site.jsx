"use client";
import { createContext, useContext, useEffect, useState } from "react";
import base from "@/content/site.json";
const C = createContext(base);
export const useSite = () => useContext(C);
export function SiteProvider({ children }) {
  const [s, set] = useState(base);
  useEffect(() => {
    fetch("/content.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => j && set(j))
      .catch(() => {});
  }, []);
  return <C.Provider value={s}>{children}</C.Provider>;
}
