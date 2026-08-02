import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BoutiqueGrid } from "@/components/BoutiqueGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Boutique — OOKAH",
  description: "Toutes les mallettes OOKAH : Essentielle, Prestige, Nomade, Signature.",
};

export default function BoutiquePage() {
  return (
    <Section className="pt-16">
      <Reveal>
        <Eyebrow>Boutique</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
          La collection complète.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream-dim">
          Prix particuliers affichés ci-dessous. Points de vente Chichin,
          connectez-vous à votre espace Pro pour vos tarifs préférentiels.
        </p>
      </Reveal>

      <div className="mt-12">
        <BoutiqueGrid products={products} />
      </div>
    </Section>
  );
}
