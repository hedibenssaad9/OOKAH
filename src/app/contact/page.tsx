"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

const inputClass =
  "w-full rounded-xl border border-line bg-ink-soft px-4 py-3 text-sm text-cream placeholder:text-muted outline-none transition-colors focus:border-gold";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section className="pt-16">
      <Reveal>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
          Parlons de votre projet.
        </h1>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_360px]">
        {submitted ? (
          <Reveal className="flex flex-col items-start gap-4 rounded-2xl border border-gold/30 bg-surface p-10">
            <CheckCircle2 className="text-gold" size={32} />
            <p className="font-display text-xl text-cream">Message envoyé</p>
            <p className="text-sm text-cream-dim">
              Merci pour votre message. Nous vous répondons sous 24–48h.
            </p>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                    Nom
                  </label>
                  <input required className={inputClass} placeholder="Votre nom" />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                    Email
                  </label>
                  <input required type="email" className={inputClass} placeholder="vous@exemple.com" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                  Sujet
                </label>
                <input className={inputClass} placeholder="Objet de votre message" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-muted">
                  Message
                </label>
                <textarea required rows={6} className={inputClass} placeholder="Votre message" />
              </div>
              <Button type="submit" className="w-fit">
                Envoyer <ArrowRight size={16} />
              </Button>
            </form>
          </Reveal>
        )}

        <Reveal delay={0.15} className="flex flex-col gap-6">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <Mail className="text-gold" size={20} />
            <p className="mt-4 text-sm text-cream-dim">Email</p>
            <p className="text-cream">contact@ookah.fr</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <MapPin className="text-gold" size={20} />
            <p className="mt-4 text-sm text-cream-dim">Atelier &amp; showroom</p>
            <p className="text-cream">Sur rendez-vous uniquement</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <Clock className="text-gold" size={20} />
            <p className="mt-4 text-sm text-cream-dim">Délai de réponse</p>
            <p className="text-cream">24 à 48h ouvrées</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
