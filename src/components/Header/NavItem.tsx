import styles from './Header.module.css';

interface NavItemProps {
    id: string;
    label: string;
    activeSection: string;
    handleClick: (id: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, activeSection, handleClick }) => (
    <li>
        <a
            href={`#${id}`}
            className={`${styles.link} ${activeSection === id ? styles.active : ''}`}
            onClick={() => handleClick(id)}
        >
            <span className={styles.line}></span>
            {label}
        </a>
    </li>
);

export default NavItem;
