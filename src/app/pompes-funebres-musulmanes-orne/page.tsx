import type { Metadata } from "next";
import { normandieDepartments } from "@/lib/geo-data";
import CityPageTemplate from "@/components/sections/CityPageTemplate";

const city = normandieDepartments.find((c) => c.slug === "pompes-funebres-musulmanes-orne")!;
export const metadata: Metadata = { title: city.title, description: city.metaDescription, keywords: city.keywords };

export default function OrnePage() {
  return <CityPageTemplate data={city} breadcrumbs={[{ label: "Normandie", href: "/normandie" }, { label: "Orne (61)", href: "/pompes-funebres-musulmanes-orne" }]} />;
}
