# Prayer Card

A small React app for praying for the people you care about. Enter up to three names and an optional note, then flip the card to reveal a random Bible verse (KJV) for them. Tap **New Verse** for another one.

Verses come from [API.Bible](https://api.bible).

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Get a free API key from [api.bible](https://api.bible), then copy `.env.example` to `.env.local` and fill it in:
   ```
   VITE_BIBLE_API_KEY=your-key-here
   VITE_BIBLE_API_URL=https://rest.api.bible/v1
   VITE_BIBLE_ID=de4e12af7f28f599-02
   ```
   `VITE_BIBLE_ID` selects the translation (the default is the King James Version). `.env.local` is gitignored.
3. Start the dev server:
   ```sh
   npm run dev
   ```

## Scripts

- `npm run dev`: start the Vite dev server
- `npm run build`: type-check and build for production
- `npm run preview`: serve the production build locally
- `npm run lint`: run ESLint

## Project structure

```
src/
  api/bible.ts          API.Bible client (random verse, passage lookup)
  components/
    PrayerCard.tsx      owns state; switches between front and back
    CardFront.tsx       names + note form
    CardBack.tsx        revealed verse, New Verse / Back buttons
  styles/variables.css  design tokens (colors, fonts, spacing)
```

## Note on the API key

Vite embeds `VITE_*` variables in the built JavaScript, so the key is visible to anyone using the deployed site. That's fine for local use. For a public deployment, move the API calls behind a small server or serverless function that keeps the key private.

## Tech

React 19, TypeScript, Vite, CSS Modules.
