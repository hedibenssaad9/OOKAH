"use client";

import { useState } from "react";
import clsx from "clsx";
import { ProductCard } from "./ProductCard";
import { Product } from "@/lib/products";

const FILTERS = ["Toutes", "Essentielle", "Prestige", "Nomade", "Signature"] as const;

export function BoutiqueGrid({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Toutes");

  const visible =
    filter === "Toutes" ? products : products.filter((p) => p.gamme === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={clsx(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors",
              filter === f
                ? "border-gold bg-gold text-ink"
                : "border-line text-cream-dim hover:border-gold/50 hover:text-cream"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProductCard key={p.slug} product={p} delay={i * 0.06} />
        ))}
      </div>
    </div>
  );
}
