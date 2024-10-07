import styles from './Tag.module.css';

interface TagProps {
    text: string;
}

const Tag = ({ text }: TagProps) => (
    <span className={styles.tag}>{text}</span>
);

export default Tag;
