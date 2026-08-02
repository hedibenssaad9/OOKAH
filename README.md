# OOKAH

Site e-commerce premium pour la marque OOKAH — mallettes chicha fabriquées en
propre, vendues aux particuliers (B2C) et aux points de vente du réseau
Chichin (B2B).

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (animations)
- Zustand (panier, persistant en localStorage)

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — pages (accueil, boutique, fiche produit, panier, commande,
  espace pro, marque, contact)
- `src/components` — composants d'interface partagés
- `src/lib` — données produits, store panier

## Notes

- Le tunnel de commande (`/commande`) enregistre une demande de commande et
  ne déclenche aucun paiement en ligne : il s'agit d'un formulaire de
  devis/commande, l'équipe recontacte le client pour finaliser le règlement.
- L'espace Pro (`/pro`) est un formulaire de demande d'accès revendeur, sans
  authentification ni tarifs différenciés affichés pour le moment.
