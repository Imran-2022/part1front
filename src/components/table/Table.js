import React from 'react';
import TableData from './TableData';
import TableHeader from './TableHeader';

const Table = () => {
    return (
        <div className="w-full m-auto px-2">
            <div className="overflow-x-auto shadow sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHeader />
                    <TableData />
                    <TableData />
                    <TableData />
                    <TableData />
                    <TableData />
                    <TableData />
                    <TableData />
                    <TableData />
                    <TableData />
                    <TableData />
                </table>
            </div>
        </div>
    );
};

export default Table;