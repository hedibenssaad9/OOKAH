export type CaseVariant = "onyx" | "or" | "ivoire" | "ember";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  gamme: "Essentielle" | "Prestige" | "Nomade" | "Signature";
  price: number;
  proPrice: number;
  variant: CaseVariant;
  description: string;
  highlights: string[];
  contenu: string[];
  materiaux: string;
  dimensions: string;
  poids: string;
  stock: "En stock" | "Précommande";
};

export const products: Product[] = [
  {
    slug: "mallette-essentielle",
    name: "OOKAH Essentielle",
    tagline: "L'entrée dans l'univers OOKAH, sans compromis sur la finition.",
    gamme: "Essentielle",
    price: 89,
    proPrice: 54,
    variant: "onyx",
    description:
      "Pensée pour les points de vente comme pour les particuliers exigeants, la mallette Essentielle réunit l'indispensable dans un coffret rigide à la finition mate, frappé du monogramme OOKAH.",
    highlights: [
      "Coffret rigide anti-choc",
      "Finition mate soft-touch",
      "Mousse thermoformée sur-mesure",
      "Garantie 2 ans",
    ],
    contenu: [
      "1 tuyau silicone premium",
      "1 foyer inox à charbon naturel",
      "1 jeu de pinces",
      "1 embout hygiénique réutilisable",
      "1 joint d'étanchéité de rechange",
    ],
    materiaux: "ABS renforcé, mousse EVA, inox 304",
    dimensions: "42 × 30 × 12 cm",
    poids: "1,9 kg",
    stock: "En stock",
  },
  {
    slug: "mallette-prestige",
    name: "OOKAH Prestige",
    tagline: "La référence des salons haut de gamme et boutiques Chichin.",
    gamme: "Prestige",
    price: 159,
    proPrice: 98,
    variant: "or",
    description:
      "Habillage cuir végétal et liserés dorés : la Prestige est la mallette la plus demandée par nos points de vente partenaires. Un objet qui se pose sur le comptoir autant qu'il se range.",
    highlights: [
      "Habillage cuir végétal",
      "Liserés dorés cousus main",
      "Charnières laiton brossé",
      "Garantie 3 ans",
    ],
    contenu: [
      "1 tuyau silicone premium double couche",
      "1 foyer inox premium à régulation d'air",
      "1 plateau de service amovible",
      "2 embouts hygiéniques",
      "1 tapis anti-braise OOKAH",
    ],
    materiaux: "Cuir végétal, bois laqué, laiton brossé",
    dimensions: "45 × 32 × 14 cm",
    poids: "2,6 kg",
    stock: "En stock",
  },
  {
    slug: "mallette-nomade",
    name: "OOKAH Nomade",
    tagline: "Compacte, résistante, faite pour voyager.",
    gamme: "Nomade",
    price: 109,
    proPrice: 66,
    variant: "ivoire",
    description:
      "Un format compact étanche à la poussière, conçu pour les événements, les terrasses et les clients qui ne veulent rien sacrifier à la mobilité.",
    highlights: [
      "Format compact 30% plus léger",
      "Coque étanche IP54",
      "Sangle de transport intégrée",
      "Garantie 2 ans",
    ],
    contenu: [
      "1 tuyau silicone compact",
      "1 foyer inox voyage",
      "1 pince pliable",
      "1 embout hygiénique",
      "1 pochette de rangement charbon",
    ],
    materiaux: "Polycarbonate, mousse EVA haute densité",
    dimensions: "34 × 24 × 11 cm",
    poids: "1,4 kg",
    stock: "En stock",
  },
  {
    slug: "mallette-signature",
    name: "OOKAH Signature",
    tagline: "Édition limitée, numérotée, réservée aux initiés.",
    gamme: "Signature",
    price: 249,
    proPrice: 165,
    variant: "ember",
    description:
      "Série numérotée à tirage limité. Plaque d'identification gravée, finitions or 24 carats brossé et écrin d'exposition — la pièce maîtresse d'une carte OOKAH.",
    highlights: [
      "Série numérotée (999 exemplaires)",
      "Finitions or brossé",
      "Écrin d'exposition inclus",
      "Garantie à vie sur le coffret",
    ],
    contenu: [
      "1 tuyau silicone tressé édition limitée",
      "1 foyer inox gravé au laser",
      "1 jeu de pinces finition or",
      "1 embout en bois précieux",
      "1 certificat d'authenticité numéroté",
    ],
    materiaux: "Aluminium brossé, bois précieux, finitions or 24k",
    dimensions: "46 × 33 × 15 cm",
    poids: "3,1 kg",
    stock: "Précommande",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
