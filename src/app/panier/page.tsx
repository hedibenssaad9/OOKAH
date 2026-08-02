"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCartStore, cartTotal } from "@/lib/cart-store";
import { CaseArt } from "@/components/CaseArt";
import { ButtonLink } from "@/components/Button";
import { Eyebrow, Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { formatPrice } from "@/lib/products";
import { useHydrated } from "@/lib/use-hydrated";

export default function PanierPage() {
  const items = useCartStore((s) => s.items);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const hydrated = useHydrated();

  const total = hydrated ? cartTotal(items) : 0;
  const isEmpty = hydrated && items.length === 0;

  return (
    <Section className="pt-16">
      <Reveal>
        <Eyebrow>Panier</Eyebrow>
        <h1 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
          Votre sélection
        </h1>
      </Reveal>

      {!hydrated ? null : isEmpty ? (
        <Reveal delay={0.1} className="mt-16 flex flex-col items-center gap-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line text-gold">
            <ShoppingBag size={24} />
          </div>
          <p className="max-w-sm text-cream-dim">
            Votre panier est vide pour le moment. Découvrez la collection et
            composez votre commande.
          </p>
          <ButtonLink href="/boutique">Voir la boutique</ButtonLink>
        </Reveal>
      ) : (
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.slug}
                className="flex items-center gap-5 rounded-2xl border border-line bg-surface p-4"
              >
                <Link
                  href={`/boutique/${item.slug}`}
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-ink-soft"
                >
                  <CaseArt
                    variant={item.variant as never}
                    animate={false}
                    className="w-3/4"
                  />
                </Link>

                <div className="flex-1">
                  <Link
                    href={`/boutique/${item.slug}`}
                    className="font-display text-base text-cream hover:text-gold"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-cream-dim">
                    {formatPrice(item.price)} / unité
                  </p>
                </div>

                <div className="flex items-center rounded-full border border-line">
                  <button
                    onClick={() => setQuantity(item.slug, item.quantity - 1)}
                    className="flex h-9 w-9 items-center justify-center text-cream-dim hover:text-gold"
                    aria-label="Diminuer la quantité"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-7 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => setQuantity(item.slug, item.quantity + 1)}
                    className="flex h-9 w-9 items-center justify-center text-cream-dim hover:text-gold"
                    aria-label="Augmenter la quantité"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <p className="w-20 text-right font-display text-sm text-gold">
                  {formatPrice(item.price * item.quantity)}
                </p>

                <button
                  onClick={() => removeItem(item.slug)}
                  className="text-cream-dim hover:text-ember-bright"
                  aria-label="Retirer l'article"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <Reveal delay={0.1} className="h-fit rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-display text-lg text-cream">Récapitulatif</h2>
            <div className="mt-5 flex justify-between text-sm text-cream-dim">
              <span>Sous-total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-cream-dim">
              <span>Livraison</span>
              <span>Calculée à l&rsquo;étape suivante</span>
            </div>
            <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-lg text-cream">
              <span>Total estimé</span>
              <span className="text-gold">{formatPrice(total)}</span>
            </div>
            <ButtonLink href="/commande" className="mt-6 w-full">
              Passer commande <ArrowRight size={16} />
            </ButtonLink>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Cette étape enregistre votre demande de commande. Notre équipe vous
              recontacte sous 24–48h pour confirmer le règlement et la livraison.
            </p>
          </Reveal>
        </div>
      )}
    </Section>
  );
}
