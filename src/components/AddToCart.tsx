"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { Product } from "@/lib/products";
import { Button } from "./Button";

export function AddToCart({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const router = useRouter();

  const handleAdd = () => {
    addItem(
      {
        slug: product.slug,
        name: product.name,
        price: product.price,
        variant: product.variant,
      },
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center rounded-full border border-line">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="flex h-11 w-11 items-center justify-center text-cream-dim transition-colors hover:text-gold"
          aria-label="Diminuer la quantité"
        >
          <Minus size={14} />
        </button>
        <span className="w-8 text-center text-sm text-cream">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="flex h-11 w-11 items-center justify-center text-cream-dim transition-colors hover:text-gold"
          aria-label="Augmenter la quantité"
        >
          <Plus size={14} />
        </button>
      </div>

      <Button onClick={handleAdd} className="flex-1 sm:flex-none">
        {added ? (
          <>
            <Check size={16} /> Ajouté
          </>
        ) : (
          <>
            <ShoppingBag size={16} /> Ajouter au panier
          </>
        )}
      </Button>

      <button
        onClick={() => {
          handleAdd();
          router.push("/panier");
        }}
        className="text-sm text-cream-dim underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
      >
        Commander maintenant
      </button>
    </div>
  );
}
