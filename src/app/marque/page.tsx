import type { Metadata } from "next";
import { Gem, Factory, Award } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CaseArt } from "@/components/CaseArt";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "La marque — OOKAH",
  description: "L'histoire et les valeurs d'OOKAH, fabricant de mallettes premium pour le réseau Chichin.",
};

const VALUES = [
  {
    icon: Gem,
    title: "Exigence",
    text: "Chaque matériau, chaque finition est choisie pour tenir dans le temps et honorer l'image du réseau Chichin.",
  },
  {
    icon: Factory,
    title: "Maîtrise",
    text: "En internalisant la fabrication, nous contrôlons chaque étape — du sourcing des matières à l'emballage final.",
  },
  {
    icon: Award,
    title: "Exclusivité",
    text: "OOKAH est la seule source d'approvisionnement du réseau : une cohérence de marque du premier au dernier point de vente.",
  },
];

export default function MarquePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line grid-lines">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[700px] rounded-full bg-gold/10 blur-[140px]" />
        <Section className="relative grid gap-12 pb-16 pt-20 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>La marque</Eyebrow>
            <h1 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              Née d&rsquo;une exigence, pensée pour durer.
            </h1>
            <p className="mt-6 leading-relaxed text-cream-dim">
              OOKAH est née d&rsquo;un constat simple : dépendre d&rsquo;un fournisseur
              extérieur pour un objet aussi central que la mallette, c&rsquo;est
              subir des ruptures, une qualité inconstante, et une marge
              rongée. Nous avons choisi de fabriquer nous-mêmes, pour le
              réseau Chichin comme pour les particuliers qui veulent le même
              niveau d&rsquo;exigence.
            </p>
            <div className="mt-8">
              <ButtonLink href="/boutique">Découvrir la collection</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex items-center justify-center">
            <CaseArt variant="ember" className="w-full max-w-sm" />
          </Reveal>
        </Section>
      </section>

      <Section>
        <Reveal>
          <Eyebrow>Nos valeurs</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl text-cream sm:text-4xl">
            Ce qui ne changera jamais.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1} className="rounded-2xl border border-line bg-surface p-8">
              <v.icon className="text-gold" size={22} />
              <h3 className="mt-5 font-display text-lg text-cream">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1 flex items-center justify-center">
            <CaseArt variant="ivoire" className="w-full max-w-sm" />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <Eyebrow>Notre engagement réseau</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
              Une seule marque, du concept au comptoir.
            </h2>
            <p className="mt-5 leading-relaxed text-cream-dim">
              En devenant la source unique d&rsquo;approvisionnement des points de
              vente Chichin, OOKAH garantit une cohérence totale : même
              qualité perçue, même image premium, quel que soit le point de
              vente visité. C&rsquo;est un choix de marque autant qu&rsquo;un choix
              économique.
            </p>
            <div className="mt-8">
              <ButtonLink href="/pro" variant="outline">
                En savoir plus sur l&rsquo;espace Pro
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
