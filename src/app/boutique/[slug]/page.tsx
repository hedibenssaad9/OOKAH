import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, PackageCheck, Ruler, Weight } from "lucide-react";
import { CaseArt } from "@/components/CaseArt";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Section } from "@/components/Section";
import { AddToCart } from "@/components/AddToCart";
import { ProductCard } from "@/components/ProductCard";
import { getProductBySlug, products, formatPrice } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — OOKAH`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div>
      <Section className="pt-10 pb-16">
        <Link
          href="/boutique"
          className="inline-flex items-center gap-1 text-sm text-cream-dim transition-colors hover:text-gold"
        >
          <ChevronLeft size={16} /> Retour à la boutique
        </Link>

        <div className="mt-8 grid gap-14 lg:grid-cols-2">
          <Reveal className="grid gap-4">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-line bg-ink-soft grid-lines">
              <CaseArt variant={product.variant} className="w-2/3" />
              {product.stock === "Précommande" && (
                <span className="absolute left-5 top-5 rounded-full border border-ember/40 bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ember-bright backdrop-blur">
                  Précommande
                </span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["ivoire", "onyx", "ember"].map((v, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-2xl border border-line bg-ink-soft"
                >
                  <CaseArt
                    variant={v as typeof product.variant}
                    animate={false}
                    className="w-1/2 opacity-70"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>{product.gamme}</Eyebrow>
            <h1 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-base text-cream-dim">{product.tagline}</p>

            <div className="mt-6 flex items-end gap-4">
              <p className="font-display text-3xl text-gold">
                {formatPrice(product.price)}
              </p>
              <p className="pb-1 text-sm text-cream-dim">
                Tarif Pro dès {formatPrice(product.proPrice)} / unité
              </p>
            </div>

            <p className="mt-6 leading-relaxed text-cream-dim">
              {product.description}
            </p>

            <div className="mt-8">
              <AddToCart product={product} />
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6 text-xs text-cream-dim">
              <div className="flex flex-col items-start gap-2">
                <PackageCheck size={18} className="text-gold" />
                {product.stock}
              </div>
              <div className="flex flex-col items-start gap-2">
                <Ruler size={18} className="text-gold" />
                {product.dimensions}
              </div>
              <div className="flex flex-col items-start gap-2">
                <Weight size={18} className="text-gold" />
                {product.poids}
              </div>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-sm uppercase tracking-[0.2em] text-gold">
                  Points forts
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-cream-dim">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-sm uppercase tracking-[0.2em] text-gold">
                  Contenu de la mallette
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-cream-dim">
                  {product.contenu.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 text-xs text-muted">
              Matériaux : {product.materiaux}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <Reveal>
          <Eyebrow>À découvrir aussi</Eyebrow>
          <h2 className="mt-4 font-display text-2xl text-cream sm:text-3xl">
            Le reste de la collection.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={i * 0.08} />
          ))}
        </div>
      </Section>
    </div>
  );
}
