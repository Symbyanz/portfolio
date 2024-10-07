import { CardType } from '@/types/card';
import { decode } from 'html-entities';
import classNames from 'classnames';
import Image from 'next/image';
import TagList from '../Tag/TagList';
import LinkList from '../Link/LinkList';
import styles from './Card.module.css';

const Card = ({ header, link, title, subtitle, text, tags, links }: CardType) => {
    const isHeaderText = typeof header === 'string';

    return (
        <div className={styles.card}>
            <div className={styles.background}></div>
            <header className={classNames(styles.header, !isHeaderText && styles.image)}>
                {isHeaderText
                    ? decode(header)
                    : <Image src={header.src} alt={header.alt} width={header.width || 200} height={header.height || 50} loading="lazy" />
                }
            </header>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {
                        link
                            ? (
                                <a href={link} target='_blank' rel='noreferrer noopener' aria-label={title + ' (откроется в новой вкладке)'}>
                                    {title}
                                    <span className={styles.backing}></span>
                                    <span className={styles.arrow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                    </span>
                                </a>
                            )
                            : (
                                <p>{title}<span className={styles.backing}></span></p>
                            )
                    }

                </h3>
                {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
                <p className={styles.text}>{text}</p>
                {links && <LinkList links={links} />}
                {tags && <TagList tags={tags} />}
            </div>
        </div>
    );
};

export default Card;
