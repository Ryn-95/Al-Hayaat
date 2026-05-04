import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
export const metadata: Metadata = { title: "Prix des Obsèques Musulmanes en France — Guide 2024", description: "Combien coûtent des obsèques musulmanes en France ? Tarifs détaillés.", keywords: ["prix obsèques musulmanes", "tarif enterrement musulman"] };
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Prix", href: "/guide/prix-obseques-musulmanes" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] text-white mb-6 mt-6">Prix des Obsèques Musulmanes en France</h1></div></section><section className="w-full bg-[#F5F0E8] py-20"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Tarifs indicatifs</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-6">Obsèques complètes : à partir de 1 490 €. Rapatriement international : à partir de 2 900 €. <Link href="/tarifs" className="text-[#2D6A2D] font-medium hover:underline">Voir nos tarifs</Link>.</p>
  <p className="text-[15px] font-light text-[#555] leading-[1.8]">Options de financement : <Link href="/assurance-deces-musulmane" className="text-[#2D6A2D] font-medium hover:underline">assurance décès</Link>, fonds consulaire. <Link href="/contact" className="text-[#2D6A2D] font-medium hover:underline">Devis gratuit</Link>.</p>
</div></div></section></div>); }
