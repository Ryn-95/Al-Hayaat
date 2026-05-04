import type { Metadata } from "next";
import { normandieDepartments } from "@/lib/geo-data";
import CityPageTemplate from "@/components/sections/CityPageTemplate";

const city = normandieDepartments.find((c) => c.slug === "pompes-funebres-musulmanes-calvados")!;
export const metadata: Metadata = { title: city.title, description: city.metaDescription, keywords: city.keywords };

export default function CalvadosPage() {
  return <CityPageTemplate data={city} breadcrumbs={[{ label: "Normandie", href: "/normandie" }, { label: "Calvados (14)", href: "/pompes-funebres-musulmanes-calvados" }]} />;
}
