
import { links } from "@/lib/data";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><strong>PhD Liz Maribel Huancapaza Hilasaca</strong><p>Computer Science · Artificial Intelligence · Active Learning · Data Science · Ecoacoustics</p></div>
        <div className="footer-links">
          <a href={links.orcid} target="_blank" rel="noreferrer">ORCID</a>
          <a href={links.scopus} target="_blank" rel="noreferrer">Scopus</a>
          <a href={links.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
          <a href={links.ctivitae} target="_blank" rel="noreferrer">CTI Vitae</a>
          <a href={links.lattes} target="_blank" rel="noreferrer">Lattes</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Liz Maribel Huancapaza Hilasaca · Academic Website</div>
    </footer>
  );
}
