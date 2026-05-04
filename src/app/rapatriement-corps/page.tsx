import { Metadata } from "next";
import { ServicePageContent } from "@/components/sections/ServicePageContent";
import { getServiceBySlug } from "@/lib/services-data";

const data = getServiceBySlug("rapatriement-corps")!;

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function RapatriementCorpsPage() {
  return <ServicePageContent data={data} />;
}
