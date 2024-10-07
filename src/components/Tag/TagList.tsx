import Tag from './Tag';
import styles from './Tag.module.css';

interface TagListProps {
    tags: string[];
}

const TagList = ({ tags }: TagListProps) => (
    <ul className={styles.tagList}>
        {tags.map((tag, index) => (
            <li key={index} className={styles.tagItem}>
                <Tag text={tag} />
            </li>
        ))}
    </ul>
);

export default TagList;