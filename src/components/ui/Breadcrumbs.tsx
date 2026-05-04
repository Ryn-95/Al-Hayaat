import Link from "next/link";
import SchemaOrg from "./SchemaOrg";
import { buildBreadcrumbSchema, SITE_CONFIG } from "@/lib/seo-config";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Accueil", href: "/" }, ...items];

  const schemaItems = allItems.map((item) => ({
    name: item.label,
    url: `${SITE_CONFIG.baseUrl}${item.href}`,
  }));

  return (
    <>
      <SchemaOrg data={buildBreadcrumbSchema(schemaItems)} />
      <nav
        aria-label="Fil d'Ariane"
        className="w-full max-w-[1280px] mx-auto px-8 md:px-12 py-4"
      >
        <ol className="flex items-center gap-1.5 text-[12.5px] text-[#999] font-light flex-wrap">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-[#CCC]" aria-hidden="true">
                  /
                </span>
              )}
              {i === allItems.length - 1 ? (
                <span className="text-[#555] font-normal" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#2D6A2D] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
