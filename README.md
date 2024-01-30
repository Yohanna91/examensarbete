# Mobil e-shop med Stripe (Examensarbete)

Detta projekt är en Butik applikation som är byggt med Node.js/Express backend och React.js frontend tillsammans med Stripe biblioteket för betalningar.

UI är byggt med Tailwind CSS och alla komponenter hittas på `./components`.

Teknologier/Packages som används är:

- React.js/Typescript
- Stripe
- Express
- MongoDB för databas och Mongoose (ORM)
- Cors
- Tailwind CSS
- Async Await

För att starta Servern:

1. Navigera till `./server` i terminalen
2. Hämta alla packages med `npm install`
3. Kör servern nu med `npm run dev`

Efter det startar du React:

1. Navigera till `./client` i terminalen
2. Hämta alla packages med `npm install`
3. Kör projektet med `npm run dev`

Nu kan du öppna butik applikationen på
**localhost:5173**

Servern körs på
**localhost:3000**

### Övrigt

- Om du vill testa med din egna Stripe account. Ändra `publishable_key` i projektet till din egna.
