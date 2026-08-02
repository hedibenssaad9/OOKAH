"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import clsx from "clsx";
import { useCartStore, cartCount } from "@/lib/cart-store";
import { useHydrated } from "@/lib/use-hydrated";
import { ButtonLink } from "./Button";
import { Magnetic } from "./Magnetic";

const LINKS = [
  { href: "/boutique", label: "Boutique" },
  { href: "/marque", label: "La marque" },
  { href: "/pro", label: "Espace Pro" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hydrated = useHydrated();
  const items = useCartStore((s) => s.items);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close mobile menu on route change
    setOpen(false);
  }, [pathname]);

  const count = hydrated ? cartCount(items) : 0;

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="font-display text-2xl tracking-[0.15em] text-cream">
          OOKAH<span className="text-gold">.</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm tracking-wide transition-colors",
                pathname === link.href
                  ? "text-gold"
                  : "text-cream-dim hover:text-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Magnetic strength={0.25}>
              <ButtonLink href="/pro" variant="outline">
                Devenir revendeur
              </ButtonLink>
            </Magnetic>
          </div>
          <Link
            href="/panier"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream transition-colors hover:border-gold hover:text-gold"
            aria-label="Voir le panier"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-ink">
                {count}
              </span>
            )}
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-ink px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-base",
                  pathname === link.href ? "text-gold" : "text-cream-dim"
                )}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/pro" variant="primary" className="mt-2 w-full">
              Devenir revendeur
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
