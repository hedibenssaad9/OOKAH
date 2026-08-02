"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Percent, Truck, HeadphonesIcon, Store } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { SmokeCanvas } from "@/components/SmokeCanvas";

const inputClass =
  "w-full rounded-xl border border-line bg-ink-soft px-4 py-3 text-sm text-cream placeholder:text-muted outline-none transition-colors focus:border-gold";

const ADVANTAGES = [
  {
    icon: Percent,
    title: "Tarifs dégressifs",
    text: "Des prix professionnels qui baissent avec le volume, pour sécuriser votre marge sur chaque mallette vendue.",
  },
  {
    icon: Truck,
    title: "Réassort prioritaire",
    text: "Un circuit d'approvisionnement dédié au réseau Chichin, sans rupture ni délai imprévisible.",
  },
  {
    icon: HeadphonesIcon,
    title: "Accompagnement dédié",
    text: "Un interlocuteur unique pour vos commandes, vos besoins spécifiques et vos opérations événementielles.",
  },
  {
    icon: Store,
    title: "Merchandising inclus",
    text: "Supports de présentation en boutique pensés pour valoriser la collection OOKAH sur votre comptoir.",
  },
];

const STEPS = [
  { title: "Vous faites votre demande", text: "Renseignez votre point de vente Chichin ci-dessous." },
  { title: "Validation sous 48h", text: "Notre équipe confirme votre statut et vos conditions tarifaires." },
  { title: "Accès à vos tarifs Pro", text: "Vous commandez au tarif préférentiel, en toute simplicité." },
];

export default function ProPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line grid-lines">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
        <SmokeCanvas className="pointer-events-none absolute inset-0" />
        <Section className="relative pb-16 pt-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Espace Pro — Réseau Chichin</Eyebrow>
            <h1 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              Votre approvisionnement, enfin sous contrôle.
            </h1>
            <p className="mt-5 text-cream-dim">
              Tous les points de vente Chichin s&rsquo;approvisionnent en mallettes
              exclusivement auprès d&rsquo;OOKAH. Demandez votre accès professionnel
              pour débloquer vos tarifs dédiés.
            </p>
          </Reveal>
        </Section>
      </section>

      <Section>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08} className="bg-surface p-8">
              <a.icon className="text-gold" size={22} />
              <h3 className="mt-5 font-display text-lg text-cream">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <Reveal>
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl text-cream sm:text-4xl">
            Trois étapes avant votre premier réassort.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="relative rounded-2xl border border-line bg-surface p-8">
              <span className="font-display text-4xl text-gold/30">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg text-cream">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-dim">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line" id="demande">
        <div className="mx-auto max-w-2xl">
          <Reveal className="text-center">
            <Eyebrow>Demande d&rsquo;accès</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
              Devenir revendeur agréé
            </h2>
          </Reveal>

          {submitted ? (
            <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-gold/30 bg-surface p-10 text-center">
              <CheckCircle2 className="text-gold" size={32} />
              <p className="font-display text-xl text-cream">Demande envoyée</p>
              <p className="text-sm text-cream-dim">
                Merci. Notre équipe étudie votre demande et revient vers vous
                sous 48h avec vos accès et tarifs professionnels.
              </p>
            </Reveal>
          ) : (
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                    Nom du point de vente Chichin
                  </label>
                  <input required className={inputClass} placeholder="Ex : Chichin Marseille Vieux-Port" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                      Responsable
                    </label>
                    <input required className={inputClass} placeholder="Prénom et nom" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                      Ville
                    </label>
                    <input required className={inputClass} placeholder="Ville du point de vente" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                      Email professionnel
                    </label>
                    <input required type="email" className={inputClass} placeholder="contact@votreboutique.fr" />
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
                    Volume mensuel estimé
                  </label>
                  <input className={inputClass} placeholder="Ex : 10 à 20 mallettes / mois" />
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Envoyer ma demande <ArrowRight size={16} />
                </Button>
              </form>
            </Reveal>
          )}
        </div>
      </Section>
    </div>
  );
}
