import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pompes Funèbres Musulmanes Paris & Île-de-France — Al Hayat",
  description: "Al Hayat, pompes funèbres musulmanes à Paris et en Île-de-France. 75, 92, 93, 94, 95. Toilette rituelle, rapatriement, carré musulman. 24h/7j.",
};

export default function ParisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
