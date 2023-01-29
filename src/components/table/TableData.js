import React from 'react';

const TableData = () => {
    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    235gjsmdg8952375ds23532sd
                </th>
                <td className="px-6 py-3">
                    MdImranul Haque
                </td>
                <td className="px-6 py-3">
                    mdimranulhaque202@gmail.com
                </td>
                <td className="px-6 py-3">
                    01771207845
                </td>
                <td className="px-6 py-3">
                    2999
                </td>
                <td className="px-6 py-3 flex flex-wrap gap-2">
                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                    <p>|</p>
                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</p>
                </td>
            </tr>
        </tbody>
    );
};

export default TableData;