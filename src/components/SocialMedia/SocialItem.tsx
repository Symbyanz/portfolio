import styles from './SocialMedia.module.css';

interface SocialMediaProps {
    platform: string;
    url: string;
    icon: React.ReactNode;
}

const SocialItem: React.FC<SocialMediaProps> = ({ platform, url, icon }) => (
    <li key={platform} className={styles.item}>
        <a href={url} className={styles.link} target="_blank" rel="noopener noreferrer" aria-label={platform + ' (откроется в новой вкладке)'} title={platform}>
            <span className="sr-only">{platform}</span>
            {icon}
        </a>
    </li>
);

export default SocialItem;
