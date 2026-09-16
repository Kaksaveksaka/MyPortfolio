import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { featuredProjects, technicalSkillsCategories } from "./data/portfolioData";

const url = "https://shoaibkhan-dev.vercel.app/";
export function render() {
  const graph = [
    { "@type": "Person", "@id": `${url}#person`, name: "Shoaib Khan", url,
      jobTitle: "Game Developer", description: "Game developer with 5 years of professional and independent experience in gameplay, LiveOps and performance engineering.",
      sameAs: ["https://www.linkedin.com/in/shoaib-khan-here/"],
      knowsAbout: [...new Set(technicalSkillsCategories.flatMap(({ skills }) => skills))],
      alumniOf: { "@type": "CollegeOrUniversity", name: "Delhi Technical Campus" } },
    { "@type": "WebSite", "@id": `${url}#website`, url, name: "Shoaib Khan | Game Developer", inLanguage: "en", publisher: { "@id": `${url}#person` } },
    { "@type": "ProfilePage", "@id": `${url}#webpage`, url, name: "Shoaib Khan | Game Developer", inLanguage: "en",
      isPartOf: { "@id": `${url}#website` }, mainEntity: { "@id": `${url}#person` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${url}social-preview.png`, width: 1200, height: 630 } },
    { "@type": "ItemList", "@id": `${url}#projects`, name: "Selected games and VR projects", numberOfItems: featuredProjects.length,
      itemListElement: featuredProjects.map((project, index) => ({
        "@type": "ListItem", position: index + 1,
        item: { "@type": project.id === "smart-marine-vr-modules" ? "SoftwareApplication" : "VideoGame",
          "@id": `${url}#${project.id}`, name: project.title, description: project.description,
          url: project.gameUrl || project.playStoreUrl || `${url}#projects`,
          image: new URL(project.poster, url).href,
          contributor: { "@id": `${url}#person` } },
      })) },
  ];
  return { html: renderToString(<React.StrictMode><App /></React.StrictMode>),
    schema: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") };
}
