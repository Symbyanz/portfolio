"use client";
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import NavItem from './NavItem';
import SocialMedia from '../SocialMedia/SocialMedia';
import { navItemsData } from '@/data/main';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      let activeId = '';
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId = entry.target.id;
        }
      })

      if (activeId) {
        setActiveSection(activeId);
      }
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [])

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <header className={styles.header}>
      <div>
        <h1 className="title"><a href="/">Панкратов Вячеслав</a></h1>
        <h2 className="subtitle">Frontend-разработчик</h2>
        <p className={styles.description}>Создаю цифровые решения, которые сочетают в себе функциональность и привлекательный дизайн.</p>
        <nav className={styles.nav}>
          <ul>
            {navItemsData.map(item => (
              <NavItem key={item.id} id={item.id} label={item.label} activeSection={activeSection} handleClick={handleClick} />
            ))}
          </ul>
        </nav>
      </div>
      <SocialMedia />
    </header>
  );
};

export default Header;