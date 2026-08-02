"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useCartStore, cartTotal } from "@/lib/cart-store";
import { useHydrated } from "@/lib/use-hydrated";
import { Eyebrow, Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button, ButtonLink } from "@/components/Button";
import { formatPrice } from "@/lib/products";

const inputClass =
  "w-full rounded-xl border border-line bg-ink-soft px-4 py-3 text-sm text-cream placeholder:text-muted outline-none transition-colors focus:border-gold";

export default function CommandePage() {
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);
  const hydrated = useHydrated();
  const [submitted, setSubmitted] = useState(false);
  const [clientType, setClientType] = useState<"particulier" | "pro">("particulier");

  const total = hydrated ? cartTotal(items) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clear();
  };

  if (submitted) {
    return (
      <Section className="pt-24">
        <Reveal className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
            <CheckCircle2 size={28} />
          </div>
          <h1 className="font-display text-3xl text-cream">
            Votre demande a bien été envoyée.
          </h1>
          <p className="text-cream-dim">
            Merci pour votre confiance. Un membre de l&rsquo;équipe OOKAH vous
            contacte sous 24–48h pour confirmer votre commande, le règlement et
            la livraison.
          </p>
          <ButtonLink href="/boutique">
            Continuer mes achats <ArrowRight size={16} />
          </ButtonLink>
        </Reveal>
      </Section>
    );
  }

  if (hydrated && items.length === 0) {
    return (
      <Section className="pt-24 text-center">
        <Reveal>
          <p className="text-cream-dim">Votre panier est vide.</p>
          <ButtonLink href="/boutique" className="mt-6">
            Voir la boutique
          </ButtonLink>
        </Reveal>
      </Section>
    );
  }

  return (
    <Section className="pt-16">
      <Reveal>
        <Eyebrow>Commande</Eyebrow>
        <h1 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
          Finaliser ma demande
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex gap-3">
              {(["particulier", "pro"] as const).map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setClientType(t)}
                  className={`flex-1 rounded-xl border px-4 py-3 text-sm transition-colors ${
                    clientType === t
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-line text-cream-dim hover:border-gold/40"
                  }`}
                >
                  {t === "particulier" ? "Je suis un particulier" : "Je suis un point de vente Chichin"}
                </button>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                  Prénom
                </label>
                <input required className={inputClass} placeholder="Prénom" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                  Nom
                </label>
                <input required className={inputClass} placeholder="Nom" />
              </div>
            </div>

            {clientType === "pro" && (
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                  Nom du point de vente Chichin
                </label>
                <input required className={inputClass} placeholder="Ex : Chichin Lyon Part-Dieu" />
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                  Email
                </label>
                <input required type="email" className={inputClass} placeholder="vous@exemple.com" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                  Téléphone
                </label>
                <input required type="tel" className={inputClass} placeholder="06 12 34 56 78" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                Adresse de livraison
              </label>
              <input required className={inputClass} placeholder="Numéro et rue" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                  Ville
                </label>
                <input required className={inputClass} placeholder="Ville" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                  Code postal
                </label>
                <input required className={inputClass} placeholder="Code postal" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                Message (facultatif)
              </label>
              <textarea
                rows={3}
                className={inputClass}
                placeholder="Précisions sur votre commande, délai souhaité..."
              />
            </div>

            <Button type="submit" className="w-full sm:w-fit">
              Envoyer ma demande de commande <ArrowRight size={16} />
            </Button>
            <p className="text-xs leading-relaxed text-muted">
              En envoyant ce formulaire, vous demandez une mise en commande.
              Aucun paiement n&rsquo;est prélevé en ligne : nous revenons vers vous
              pour finaliser le règlement.
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="h-fit rounded-2xl border border-line bg-surface p-6">
          <h2 className="font-display text-lg text-cream">Votre commande</h2>
          <div className="mt-5 flex flex-col gap-3">
            {items.map((item) => (
              <div key={item.slug} className="flex justify-between text-sm text-cream-dim">
                <span>
                  {item.quantity} × {item.name}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-lg text-cream">
            <span>Total estimé</span>
            <span className="text-gold">{formatPrice(total)}</span>
          </div>
          <Link
            href="/panier"
            className="mt-4 inline-block text-xs text-cream-dim underline decoration-gold/40 underline-offset-4 hover:text-gold"
          >
            Modifier mon panier
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
