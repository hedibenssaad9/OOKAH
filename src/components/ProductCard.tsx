import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CaseArt } from "./CaseArt";
import { Product, formatPrice } from "@/lib/products";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/boutique/${product.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-gold/50"
        data-cursor-interactive
      >
        <TiltCard
          intensity={8}
          className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink-soft grid-lines"
        >
          <CaseArt variant={product.variant} className="w-3/5" animate={false} />
          <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur">
            {product.gamme}
          </span>
        </TiltCard>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg text-cream">{product.name}</h3>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <p className="text-sm leading-relaxed text-cream-dim">{product.tagline}</p>

          <div className="mt-auto flex items-end justify-between pt-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">À partir de</p>
              <p className="font-display text-xl text-gold">{formatPrice(product.price)}</p>
            </div>
            <span className="text-xs text-cream-dim">
              Pro dès {formatPrice(product.proPrice)}
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
