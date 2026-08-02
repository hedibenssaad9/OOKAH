import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10 lg:px-16">
        <div className="md:col-span-2">
          <Link href="/" aria-label="OOKAH — accueil">
            <Logo compact />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-dim">
            Mallettes premium conçues et fabriquées pour les salons Chichin et les
            particuliers exigeants. Une seule provenance, une exigence constante.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="mailto:contact@ookah.fr"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Navigation
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream-dim">
            <li><Link href="/boutique" className="hover:text-cream">Boutique</Link></li>
            <li><Link href="/marque" className="hover:text-cream">La marque</Link></li>
            <li><Link href="/pro" className="hover:text-cream">Espace Pro</Link></li>
            <li><Link href="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream-dim">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              Atelier &amp; showroom — sur rendez-vous
            </li>
            <li>contact@ookah.fr</li>
            <li>Réservé aux points de vente Chichin &amp; particuliers</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 text-center text-xs text-muted md:px-10 lg:px-16">
        © {new Date().getFullYear()} OOKAH. Tous droits réservés.
      </div>
    </footer>
  );
}
