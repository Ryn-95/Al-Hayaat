import type { Metadata } from "next";
import { normandieDepartments } from "@/lib/geo-data";
import CityPageTemplate from "@/components/sections/CityPageTemplate";

const city = normandieDepartments.find((c) => c.slug === "pompes-funebres-musulmanes-seine-maritime")!;
export const metadata: Metadata = { title: city.title, description: city.metaDescription, keywords: city.keywords };

export default function SeineMaritimePage() {
  return <CityPageTemplate data={city} breadcrumbs={[{ label: "Normandie", href: "/normandie" }, { label: "Seine-Maritime (76)", href: "/pompes-funebres-musulmanes-seine-maritime" }]} />;
}
