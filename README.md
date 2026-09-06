# Liz Huancapaza Academic Website V2

Professional academic website in Next.js + TypeScript, ready for Vercel.

## Included
- Spanish and English routes (`/` and `/en`)
- Professional portrait integrated locally
- Research, Publications, Courses, Students, Projects, CV, Contact
- ORCID: 0000-0002-0345-2075
- Scopus Author ID: 57221691361
- Verified DOI links for selected publications
- Downloadable academic CV PDF
- SEO metadata, OpenGraph, JSON-LD Person schema, sitemap and robots
- Responsive design without third-party UI dependencies

## Deploy
1. Upload this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output: managed automatically by Vercel.

## Domain
The SEO configuration currently uses `https://lizhuancapaza.com`.
If another domain is chosen, replace it in:
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

## Content
Academic information is centralized in `lib/data.ts`.
