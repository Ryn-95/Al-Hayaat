"use client";

import { usePathname } from "next/navigation";
import { UniversalCTA } from "@/components/sections/UniversalCTA";

export function ConditionalUniversalCTA() {
  const pathname = usePathname();
  
  // Ne pas afficher sur la page d'accueil ni sur la page de contact pour éviter les doublons
  if (pathname === "/" || pathname === "/contact") {
    return null;
  }

  return <UniversalCTA />;
}