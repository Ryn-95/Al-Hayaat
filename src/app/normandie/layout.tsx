import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pompes Funèbres Musulmanes en Normandie — Al Hayat | Rouen, Le Havre, Caen",
  description: "Al Hayat, pompes funèbres musulmanes dans toute la Normandie. Rouen, Le Havre, Caen, Dieppe, Évreux. Toilette rituelle, rapatriement, carré musulman. 24h/7j.",
};

export default function NormandieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
