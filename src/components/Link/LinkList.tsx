import Link from './Link';
import styles from './Link.module.css';

interface LinkListProps {
  links: { url: string; label: string }[];
}

const LinkList = ({ links }: LinkListProps) => (
  <ul className={styles.linkList}>
    {links.map((link, index) => (
      <li key={index} className={styles.linkItem}>
        <Link url={link.url} label={link.label} />
      </li>
    ))}
  </ul>
);

export default LinkList;
