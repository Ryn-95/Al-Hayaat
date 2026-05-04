import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";
export const metadata: Metadata = { title: "20 Messages de Condoléances en Arabe avec Traduction Française", description: "Messages de condoléances en arabe : 20 exemples avec traduction en français. Pour WhatsApp, SMS, visite à la famille.", keywords: ["message condoléances arabe", "condoléances arabe traduction", "SMS condoléances arabe", "WhatsApp condoléances arabe"] };
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Messages de Condoléances en Arabe", datePublished: "2024-05-15" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Condoléances Arabe", href: "/guide/message-condoleances-arabe" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Messages de Condoléances en Arabe : 20 Exemples Prêts à Utiliser</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
  {[
    { ar: "إنا لله وإنا إليه راجعون", ph: "Inna lillahi wa inna ilayhi raji'oun", fr: "Nous appartenons à Allah et c'est vers Lui que nous retournons." },
    { ar: "أحسن الله عزاءكم وألهمكم الصبر والسلوان", ph: "Ahsana Allahou 'aza'akoum wa alhamakoum as-sabra was-sulwan", fr: "Qu'Allah vous accorde la meilleure des consolations et vous inspire patience et réconfort." },
    { ar: "رحمه الله رحمة واسعة وأسكنه فسيح جناته", ph: "Rahimahou Allahou rahmatan wasi'a wa askanahoul fassih jannatihi", fr: "Qu'Allah lui accorde une vaste miséricorde et le place dans Son vaste Paradis." },
    { ar: "لا حول ولا قوة إلا بالله، عظم الله أجركم", ph: "La hawla wa la quwwata illa billah, 'azama Allahou ajrakoum", fr: "Il n'y a de force ni de puissance qu'en Allah. Qu'Allah amplifie votre récompense." },
    { ar: "اللهم اغفر له وارحمه واجعل مثواه الجنة", ph: "Allahoumma ighfir lahu warhamhu waj'al mathwahoul janna", fr: "Ô Allah, pardonne-lui, accorde-lui Ta miséricorde et fais du Paradis sa demeure." },
    { ar: "تقبل الله منا ومنكم وجبر مصابكم", ph: "Taqabala Allahou minna wa minkoum wa jabara mousabakoum", fr: "Qu'Allah accepte de nous et de vous, et compense votre perte." },
    { ar: "نسأل الله أن يتغمد الفقيد بواسع رحمته", ph: "Nas'alou Allaha an yataghamada al-faqid biwasi' rahmatihi", fr: "Nous demandons à Allah d'envelopper le défunt de Sa vaste miséricorde." },
    { ar: "البقية في حياتكم", ph: "Al-baqiyya fi hayatikoum", fr: "Que la pérennité soit dans vos vies." },
  ].map((msg, i) => (<div key={i} className="p-5 bg-white border border-[#E8E2D9] rounded-[10px] mb-3"><p className="text-[20px] text-right font-light text-[#1A1A1A] mb-2" dir="rtl">{msg.ar}</p><p className="text-[13px] text-[#7A5C3A] font-medium mb-1">{msg.ph}</p><p className="text-[13px] text-[#666] font-light">{msg.fr}</p></div>))}
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mt-8">Pour plus de formules, consultez notre guide <Link href="/guide/condoleances-islam" className="text-[#2D6A2D] font-medium hover:underline">Condoléances en Islam</Link>.</p>
</div></div></section></div>); }
