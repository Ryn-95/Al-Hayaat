import type { Metadata } from "next";
import { normandieCities } from "@/lib/geo-data";
import CityPageTemplate from "@/components/sections/CityPageTemplate";

const city = normandieCities.find((c) => c.slug === "pompes-funebres-musulmanes-flers")!;
export const metadata: Metadata = { title: city.title, description: city.metaDescription, keywords: city.keywords };

export default function FlersPage() {
  return <CityPageTemplate data={city} breadcrumbs={[{ label: "Normandie", href: "/normandie" }, { label: "Flers", href: "/pompes-funebres-musulmanes-flers" }]} />;
}
