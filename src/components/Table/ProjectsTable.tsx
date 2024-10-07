import { Table } from './Table';
import { projectListData } from "@/data/projects";
import TagList from '../Tag/TagList';

const ProjectsTable = () => {
    return (
        <Table
            data={projectListData}
            columns={[
                { header: 'Год', accessor: 'year' },
                {
                    header: 'Проект',
                    accessor: 'title',
                    className: 'project',
                    render: (title, row) => {
                        const link = row.link;
                        if (link && link.url) {
                            return (
                                <>
                                    <a className='block' href={link.url} target="_blank" rel="noopener noreferrer">
                                        {title}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                    </a>
                                    <div className='hidden'>{title}</div>
                                </>
                            )
                        }
                        return <div>{title}</div>
                    },
                },
                { header: 'Форма', accessor: 'customer', className: 'hidden' },
                {
                    header: 'Стек технологий',
                    accessor: 'tags',
                    className: 'hidden tags',
                    render: tags => <TagList tags={tags} />,
                },
                {
                    header: 'Ссылка',
                    accessor: 'link',
                    className: 'hidden link',
                    render: (link) => {
                        if (!link || !link.url) {
                            return null;
                        }

                        const isGithub = link.url.includes('github.com');
                        return (
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className={isGithub ? 'github-link' : 'external-link'}>
                                {link.label}
                                {isGithub
                                    ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>)
                                    : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>)
                                }
                            </a>
                        );
                    },
                },
            ]}
        />
    );
};

export default ProjectsTable;
