# Afrang GmbH – Website

One-Page-Website für den Ankauf von LKWs und Baumaschinen (Next.js 16).

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffnen: [http://localhost:3000](http://localhost:3000)

## Production lokal

`npm start` benötigt einen vorherigen Build:

```bash
npm install
npm run build
npm start
```

Alternativ in einem Schritt:

```bash
npm run start:prod
```

## Deploy auf Vercel

1. Repository mit GitHub verbinden
2. In [Vercel](https://vercel.com) → **Add New Project** → Repo importieren
3. Framework: **Next.js** (automatisch erkannt)
4. **Node.js 20** (`.nvmrc` im Repo) – in den Projekteinstellungen prüfen
5. Build Command: `npm run build` (Standard)
6. Änderungen pushen → Vercel baut automatisch neu

**Hinweise:** Nur `package-lock.json` nutzen (kein `pnpm-lock.yaml`). Der Production-Build läuft mit `typescript.ignoreBuildErrors` in [`next.config.mjs`](next.config.mjs). Große Bilder in `public/` verlängern den Upload, sind aber deploy-fähig.

Optional: Custom Domain im Vercel-Dashboard hinterlegen.

## Stack

- Next.js 16 (App Router)
- React 19, Tailwind CSS 4
- Framer Motion
- Vercel Analytics (Production)
