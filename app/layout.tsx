import "./globals.css";
import { getSite } from "@/lib/site";

export function generateMetadata() {
  const s = getSite();
  return {
    title: `${s.company.name} | Facility, Digital & Administrative Support`,
    description: s.hero.sub,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
