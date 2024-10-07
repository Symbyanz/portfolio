import { ReactNode } from "react";
import styles from "./Section.module.css";

export interface SectionProps {
    id?: string;
    label?: string;
    title?: string;
    children?: ReactNode;
}

const Section = ({ id, label, title, children }: SectionProps) => {
    return (
        <section id={id} className={styles.section} aria-label={label}>
            {title && <div className={styles.titleWrapper}><h2 className={styles.title}>{title}</h2></div>}
            {children}
        </section>
    );
};

export default Section;