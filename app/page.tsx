
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { profile, researchAreasEs, publications, links } from "@/lib/data";

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill">PhD · Computer Science · RENACYT</div>
          <h1>Liz Maribel<br/><span>Huancapaza Hilasaca</span></h1>
          <p className="hero-role">{profile.roleEs}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-text">Investigo métodos de Inteligencia Artificial para aprender, representar y analizar datos complejos. Mi trabajo conecta Machine Learning, Active Learning, Computer Vision, Ciencia de Datos y Ecoacústica con investigación reproducible, innovación y formación universitaria.</p>
          <div className="actions">
            <Link className="button primary" href="/research">Explorar investigación</Link>
            <Link className="button secondary" href="/publications">Publicaciones</Link>
            <a className="button ghost" href="/cv-liz-huancapaza.pdf" target="_blank">Descargar CV</a>
          </div>
          <div className="id-strip">
            <a href={links.orcid} target="_blank" rel="noreferrer"><b>ORCID</b><span>{profile.orcid}</span></a>
            <a href={links.scopus} target="_blank" rel="noreferrer"><b>Scopus</b><span>{profile.scopus}</span></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image src="/liz-huancapaza-professional.png" alt="PhD Liz Maribel Huancapaza Hilasaca" fill priority sizes="(max-width:900px) 90vw, 520px" className="portrait"/>
          </div>
          <div className="portrait-note"><strong>Research focus</strong><span>AI · Active Learning · Ecoacoustics</span></div>
        </div>
      </div>
    </section>

    <section className="identity-band"><div className="container identity-grid">
      <div><span>01</span><b>Artificial Intelligence</b></div>
      <div><span>02</span><b>Active Learning</b></div>
      <div><span>03</span><b>Computer Vision</b></div>
      <div><span>04</span><b>Ecoacoustics</b></div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Research" title="Líneas de investigación" text="Ciencias de la Computación aplicada al aprendizaje, representación, visualización y análisis de datos científicos." />
      <div className="card-grid research-grid">{researchAreasEs.map((a,i)=><article className="card research-card" key={a.title}><span className="index">0{i+1}</span><h3>{a.title}</h3><p>{a.text}</p></article>)}</div>
    </div></section>

    <section className="section alt"><div className="container profile-feature">
      <div><SectionHeading eyebrow="Academic profile" title="Investigación con impacto científico y formación internacional" />
      <p className="lead">PhD en Ciencias de la Computación y Matemática Computacional por la Universidade de São Paulo (USP), con investigación en Inteligencia Artificial, Visual Active Learning, análisis de datos multidimensionales, imágenes, audio ambiental y paisajes acústicos.</p>
      <p>Mi objetivo es desarrollar métodos eficientes, interpretables y reproducibles que reduzcan el costo de anotación, mejoren la representación de datos y faciliten el descubrimiento de conocimiento.</p>
      <Link className="text-link" href="/about">Conocer trayectoria →</Link></div>
      <div className="metrics">
        <div><strong>PhD · USP</strong><span>Ciencias de la Computación y Matemática Computacional</span></div>
        <div><strong>RENACYT</strong><span>Investigación científica en Perú</span></div>
        <div><strong>ORCID</strong><span>{profile.orcid}</span></div>
        <div><strong>Scopus</strong><span>{profile.scopus}</span></div>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Selected work" title="Publicaciones destacadas" text="Una selección de contribuciones en Machine Learning, Visual Analytics y Ecoacústica."/>
      <div className="pub-list">{publications.slice(0,4).map(p=><article className="pub-row" key={p.title}><span className="pub-year">{p.year}</span><div><h3>{p.title}</h3><p>{p.authors}</p><em>{p.venue}</em>{p.doi && <div className="doi"><a href={p.url} target="_blank" rel="noreferrer">DOI {p.doi} ↗</a></div>}</div></article>)}</div>
      <div className="section-action"><Link href="/publications">Ver todas las publicaciones →</Link></div>
    </div></section>

    <section className="cta-band"><div className="container cta-grid">
      <div><span className="eyebrow">Teaching · Mentoring · Collaboration</span><h2>Ciencia, formación y colaboración.</h2></div>
      <div><p>Materiales para estudiantes, líneas de tesis y oportunidades de colaboración en IA, Machine Learning, Computer Vision, Ciencia de Datos y Ecoacústica.</p><Link className="button light" href="/students">Estudiantes & Tutorías</Link></div>
    </div></section>
  </>;
}
