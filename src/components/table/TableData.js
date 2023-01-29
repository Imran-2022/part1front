import { useEffect } from "react";
import { useDeleteBillMutation } from '../../features/api/apiSlice';
const TableData = ({ billing }) => {
    const { _id, name, email, phone, payableAmount } = billing || {};

    const [deleteBil,{isError}] = useDeleteBillMutation();

    const handleDelete = (id) => {
        deleteBil(id);
    }
    useEffect(()=>{
        if(isError) alert("Erorr occur 🐸!")
    },[isError])
   
    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {_id}
                </th>
                <td className="px-6 py-3">
                    {name}
                </td>
                <td className="px-6 py-3">
                    {email}
                </td>
                <td className="px-6 py-3">
                    {phone}
                </td>
                <td className="px-6 py-3">
                    {payableAmount}
                </td>
                <td className="px-6 py-3 flex flex-wrap gap-2">
                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Edit</p>
                    <p>|</p>
                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => handleDelete(_id)}>Delete</p>
                </td>
            </tr>
        </tbody>
    );
};

export default TableData;