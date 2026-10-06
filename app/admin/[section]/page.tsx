import { notFound } from "next/navigation";
import { getSite } from "@/lib/site";
import SectionEditor from "./SectionEditor";

export const dynamic = "force-dynamic";

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const site = getSite();
  if (!Object.hasOwn(site, section)) notFound();
  return <SectionEditor section={section} initial={site[section]} />;
}
