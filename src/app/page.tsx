import MouseGradient from "@/components/MouseGradient/MouseGradient";
import Header from "@/components/Header/Header";
import sectionStyles from '@/components/Section/Section.module.css';
import cardStyles from '@/components/Card/Card.module.css';
import { CardListSectionType, TextSectionType } from "@/types/section";
import Section from "@/components/Section/Section";
import TextContainer from "@/components/TextContainer/TextContainer";
import Card from "@/components/Card/Card";
import { sectionsData } from "@/data/main";

export default function Home() {
  const renderTextSection = (section: TextSectionType) => (
    <Section key={section.id || section.label} id={section.id} title={section.title} label={section.label}>
      <TextContainer>
        {section.content.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </TextContainer>
    </Section>
  );

  const renderCardListSection = (section: CardListSectionType) => (
    <Section key={section.id || section.label} id={section.id} title={section.title} label={section.label}>
      <ol className={cardStyles.list}>
        {section.content.map((cardData, index) => (
          <li key={index} className={cardStyles.item}>
            <Card {...cardData} />
          </li>
        ))}
      </ol>
      {
        section.link && <div className={sectionStyles.action}>
          <a href={section.link.url} className="link" rel="noopener noreferrer">
            <span className="linkText">
              {section.link.label}
            </span>
            <span className="linkArrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
            </span>
          </a>
        </div>
      }
    </Section>
  );

  return (
    <div className="page">
      <MouseGradient />
      <div className="container">
        <div className="content">
          <Header />
          <main className="main _half">
            {sectionsData.map((section) => {
              switch (section.template) {
                case 'text':
                  return renderTextSection(section);
                case 'card-list':
                  return renderCardListSection(section);
              }
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
