
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lizhuancapaza.com";
  const routes = ["","/about","/research","/publications","/courses","/students","/projects","/cv","/contact",
    "/en","/en/about","/en/research","/en/publications","/en/courses","/en/students","/en/projects","/en/cv","/en/contact"];
  return routes.map(route => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route.includes("publications") ? "monthly" : "yearly", priority: route === "" || route === "/en" ? 1 : 0.7 }));
}
