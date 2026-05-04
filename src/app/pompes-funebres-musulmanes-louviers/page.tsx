import type { Metadata } from "next";
import { normandieCities } from "@/lib/geo-data";
import CityPageTemplate from "@/components/sections/CityPageTemplate";

const city = normandieCities.find((c) => c.slug === "pompes-funebres-musulmanes-louviers")!;
export const metadata: Metadata = { title: city.title, description: city.metaDescription, keywords: city.keywords };

export default function LouViersPage() {
  return <CityPageTemplate data={city} breadcrumbs={[{ label: "Normandie", href: "/normandie" }, { label: "Louviers", href: "/pompes-funebres-musulmanes-louviers" }]} />;
}
