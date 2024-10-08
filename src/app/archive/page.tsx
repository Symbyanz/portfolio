import MouseGradient from "@/components/MouseGradient/MouseGradient";
import Section from "@/components/Section/Section";
import ProjectsTable from "@/components/Table/ProjectsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Архив | Панкратов Вячеслав",
    description: "Ознакомьтесь с архивом проектов, с использованием Next.js и WordPress.",
    openGraph: {
        title: "Архив проектов | Панкратов Вячеслав",
        description: "Ознакомьтесь с архивом проектов, с использованием Next.js и WordPress.",
        locale: "ru_RU",
        siteName: "Панкратов Вячеслав",
        type: "website",
        url: `https://${process.env.PROD_URL}/projects`,
        images: [
            {
                url: `https://${process.env.PROD_URL}/og.jpg`,
                width: 800,
                height: 600,
                alt: "Архив проектов Панкратова Вячеслава",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function Projects() {
    return (
        <div className="page">
            <MouseGradient />
            <div className="container">
                <div className="content">
                    <div className="main">
                        <div className="linkHeading">
                            <a href="/" className="link _back _colored" rel="noopener noreferrer">
                                <span className="linkArrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
                                </span>
                                Вернуться назад
                            </a>
                            <h1 className="title">Все Проекты</h1>
                        </div>
                        <Section id="projects" label="Все проекты">
                            <ProjectsTable />
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    );
}
