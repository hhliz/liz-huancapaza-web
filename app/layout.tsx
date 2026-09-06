
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lizhuancapaza.com"),
  title: {
    default: "PhD Liz Maribel Huancapaza Hilasaca | Computer Science & AI",
    template: "%s | Liz Huancapaza",
  },
  description: "Academic website of PhD Liz Maribel Huancapaza Hilasaca: Artificial Intelligence, Machine Learning, Active Learning, Computer Vision, Data Science and Ecoacoustics.",
  keywords: ["Liz Huancapaza", "Computer Science", "Artificial Intelligence", "Machine Learning", "Active Learning", "Ecoacoustics", "Soundscape", "Data Science", "Computer Vision", "RENACYT"],
  authors: [{ name: "Liz Maribel Huancapaza Hilasaca" }],
  creator: "Liz Maribel Huancapaza Hilasaca",
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: ["en_US"],
    title: "PhD Liz Maribel Huancapaza Hilasaca",
    description: "Computer Science Researcher · Artificial Intelligence · Machine Learning · Active Learning · Ecoacoustics",
    images: ["/liz-huancapaza-professional.png"],
  },
  twitter: { card: "summary_large_image", images: ["/liz-huancapaza-professional.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Liz Maribel Huancapaza Hilasaca",
    honorificPrefix: "PhD",
    nationality: "Peruvian",
    jobTitle: ["Computer Science Researcher", "University Professor"],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade de São Paulo" },
    sameAs: [
      "https://orcid.org/0000-0002-0345-2075",
      "https://scholar.google.com/citations?user=FoyZwTEAAAAJ",
      "https://www.linkedin.com/in/lizhh/",
      "http://lattes.cnpq.br/8396643250450869"
    ],
    knowsAbout: ["Artificial Intelligence","Machine Learning","Active Learning","Computer Vision","Data Science","Ecoacoustics","Soundscape Analysis"]
  };
  return (
    <html lang="es">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
