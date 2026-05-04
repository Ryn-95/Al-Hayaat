import type { Metadata } from "next";
import { parisCities } from "@/lib/geo-data";
import CityPageTemplate from "@/components/sections/CityPageTemplate";

const city = parisCities.find((c) => c.slug === "pompes-funebres-musulmanes-95-sarcelles")!;
export const metadata: Metadata = { title: city.title, description: city.metaDescription, keywords: city.keywords };

export default function SarcellesPage() {
  return <CityPageTemplate data={city} breadcrumbs={[{ label: "Paris & Île-de-France", href: "/paris-ile-de-france" }, { label: "Sarcelles (95)", href: "/pompes-funebres-musulmanes-95-sarcelles" }]} />;
}
