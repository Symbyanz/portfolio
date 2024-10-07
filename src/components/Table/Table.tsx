import React from 'react';

interface Column {
    header: string;
    accessor: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render?: (value: any, row: any) => React.ReactNode;
    className?: string;
}

interface TableProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    columns: Column[];
}

export const Table: React.FC<TableProps> = ({ data, columns }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.accessor} className={col.className ? col.className : undefined}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col) => (
                            <td key={col.accessor} className={col.className ? col.className : undefined}>
                                {col.render
                                    ? col.render(row[col.accessor], row)
                                    : row[col.accessor]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
