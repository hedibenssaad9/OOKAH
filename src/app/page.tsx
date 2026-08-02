import { ArrowRight, ShieldCheck, Sparkles, Gem, Handshake } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Section, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { CaseArt } from "@/components/CaseArt";
import { TiltCard } from "@/components/TiltCard";
import { Magnetic } from "@/components/Magnetic";
import { SmokeCanvas } from "@/components/SmokeCanvas";
import { products } from "@/lib/products";

const MARQUEE_ITEMS = [
  "MALLETTES PREMIUM",
  "FABRICATION EXCLUSIVE",
  "RÉSEAU CHICHIN",
  "MARGE MAÎTRISÉE",
  "GARANTIE ATELIER",
  "B2B & B2C",
];

const FEATURES = [
  {
    icon: Gem,
    title: "Qualité constante",
    text: "Chaque mallette suit le même cahier des charges, du premier au millième exemplaire. Fini les ruptures et l'aléatoire fournisseur.",
  },
  {
    icon: ShieldCheck,
    title: "Marge maîtrisée",
    text: "En supprimant l'intermédiaire, chaque point de vente Chichin sécurise sa marge et son approvisionnement à long terme.",
  },
  {
    icon: Sparkles,
    title: "Une seule marque",
    text: "Un objet identifiable, cohérent avec l'image premium de Chichin — pensé pour être vu, montré, et vendu.",
  },
  {
    icon: Handshake,
    title: "Un partenaire, pas un fournisseur",
    text: "Accompagnement des points de vente, tarifs professionnels dégressifs et réassort prioritaire pour le réseau.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line grid-lines">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
        </div>
        <SmokeCanvas className="pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 md:px-10 md:pt-28 lg:grid-cols-2 lg:px-16 lg:pt-32">
          <Reveal>
            <Eyebrow>Collection Officielle OOKAH</Eyebrow>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
              La mallette de référence,{" "}
              <span className="text-gradient-gold">signée OOKAH.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream-dim">
              Conçues pour le réseau Chichin et accessibles à tous les amateurs
              exigeants. Une fabrication maîtrisée de bout en bout, un design
              premium, et une marge enfin de votre côté.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Magnetic>
                <ButtonLink href="/boutique">
                  Découvrir la collection <ArrowRight size={16} />
                </ButtonLink>
              </Magnetic>
              <Magnetic>
                <ButtonLink href="/pro" variant="outline">
                  Je tiens un point de vente Chichin
                </ButtonLink>
              </Magnetic>
            </div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
              <div>
                <p className="font-display text-2xl text-gold">4</p>
                <p className="mt-1 text-xs text-muted">Gammes premium</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold">100%</p>
                <p className="mt-1 text-xs text-muted">Fabrication contrôlée</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold">2–3 ans</p>
                <p className="mt-1 text-xs text-muted">Garantie atelier</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-gold/15 blur-[100px]" />
            <TiltCard className="relative w-full max-w-md">
              <CaseArt variant="or" className="w-full" />
            </TiltCard>
          </Reveal>
        </div>

        <div className="relative overflow-hidden border-t border-line py-4">
          <div className="flex w-max animate-marquee gap-16">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-16 font-display text-sm uppercase tracking-[0.3em] text-cream-dim"
              >
                {item}
                <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>La collection</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-3xl text-cream sm:text-4xl">
              Quatre gammes, une seule exigence.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/boutique" variant="ghost" className="!px-0">
              Voir tout le catalogue <ArrowRight size={16} />
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={i * 0.08} />
          ))}
        </div>
      </Section>

      {/* WHY OOKAH */}
      <Section className="border-t border-line bg-ink-soft">
        <Reveal>
          <Eyebrow>Pourquoi OOKAH</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl text-cream sm:text-4xl">
            Reprendre la main sur votre approvisionnement.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="bg-ink-soft p-8">
              <f.icon className="text-gold" size={22} />
              <h3 className="mt-5 font-display text-lg text-cream">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* B2B BANNER */}
      <Section className="border-t border-line">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/25 bg-gradient-to-br from-surface via-ink-soft to-ink px-8 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-ember/20 blur-[100px]" />
            <SmokeCanvas className="pointer-events-none absolute inset-0 opacity-70" />
            <div className="relative">
              <Eyebrow>Réseau Chichin</Eyebrow>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl text-cream sm:text-4xl">
                Votre point de vente s&rsquo;approvisionne exclusivement chez OOKAH.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-cream-dim">
                Tarifs professionnels dégressifs, réassort prioritaire et
                accompagnement dédié. Faites votre demande d&rsquo;accès à l&rsquo;espace Pro.
              </p>
              <div className="mt-8 flex justify-center">
                <Magnetic>
                  <ButtonLink href="/pro">
                    Demander mon accès Pro <ArrowRight size={16} />
                  </ButtonLink>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
