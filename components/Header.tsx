
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const en = pathname.startsWith("/en");
  const prefix = en ? "/en" : "";
  const esTarget = pathname.startsWith("/en") ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enTarget = pathname.startsWith("/en") ? pathname : `/en${pathname === "/" ? "" : pathname}`;

  const items = en
    ? [["About","/about"],["Research","/research"],["Publications","/publications"],["Courses","/courses"],["Students","/students"],["Projects","/projects"],["CV","/cv"],["Contact","/contact"]]
    : [["Sobre mí","/about"],["Investigación","/research"],["Publicaciones","/publications"],["Cursos","/courses"],["Estudiantes","/students"],["Proyectos","/projects"],["CV","/cv"],["Contacto","/contact"]];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={prefix || "/"} className="brand" aria-label="Home">
          <span className="brand-mark">LH</span>
          <span><strong>Liz Huancapaza</strong><small>Computer Science · AI</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {items.map(([label, href]) => <Link key={href} href={`${prefix}${href}`}>{label}</Link>)}
        </nav>
        <div className="lang-switch" aria-label="Language">
          <Link className={!en ? "active" : ""} href={esTarget}>ES</Link>
          <span>/</span>
          <Link className={en ? "active" : ""} href={enTarget}>EN</Link>
        </div>
      </div>
    </header>
  );
}
