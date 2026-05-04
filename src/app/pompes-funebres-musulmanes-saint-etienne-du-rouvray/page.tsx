import type { Metadata } from "next";
import { normandieCities } from "@/lib/geo-data";
import CityPageTemplate from "@/components/sections/CityPageTemplate";

const city = normandieCities.find((c) => c.slug === "pompes-funebres-musulmanes-saint-etienne-du-rouvray")!;

export const metadata: Metadata = { title: city.title, description: city.metaDescription, keywords: city.keywords };

export default function SERPage() {
  return <CityPageTemplate data={city} breadcrumbs={[{ label: "Normandie", href: "/normandie" }, { label: "Saint-Étienne-du-Rouvray", href: "/pompes-funebres-musulmanes-saint-etienne-du-rouvray" }]} />;
}
