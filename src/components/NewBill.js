import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAddBillingMutation, useEditBillMutation, useGetBillingQuery } from '../features/api/apiSlice';
import { addModalNewBill } from '../features/modal/modalSlice';
import Modal from './Modal';

const NewBill = () => {
    const dispatch = useDispatch();
    const { editBill } = useSelector(state => state?.modal);
    // edit state

    const [updateBill, setUpdateBill] = useState({});

    useEffect(() => {
        setUpdateBill(editBill)
    }, [editBill])

    const [addBill, { data: addBil, isSuccess: addSuccess, isLoading: adLoading, isError: addisError }] = useAddBillingMutation();

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
        payableAmount: ""

    });

    const handleChange = (e) => {
        // setInputs()
        // e.target.propertyname(name) -> e.target.value.
        setUpdateBill((preValue) => ({ ...preValue, [e.target.name]: e.target.value }))
        setInputs((preValue) => ({ ...preValue, [e.target.name]: e.target.value }))
    }
    const handleAddBill = () => {
        addBill(inputs)
        console.log(inputs)
    }

    const { name, email, phone, payableAmount } = inputs;


    // Now Update 🐸.....

    const [editBills, { data: editB }] = useEditBillMutation()

    const handleUpdate = (id) => {
        const {name,email,phone,payableAmount}=updateBill
        editBills({ id,data:{name,email,phone,payableAmount}})
    }

    return (
        <>
            <button onClick={() => dispatch(addModalNewBill())} type="button" className="rounded text-black bg-blue-200 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Add new Bill</button>
            <Modal>
                <div className='p-6'>
                    <h3 className="mb-4 text-xl font-medium text-gray-900">Add New Bill</h3>
                    <form className="space-y-6" action="#" onSubmit={e => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name :</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " placeholder="full name.." value={updateBill ? updateBill.name : name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " placeholder="email..." value={updateBill ? updateBill.email : email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone :</label>
                            <input type="number" name="phone" id="phone" className="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " placeholder="phone no.." value={updateBill ? updateBill.phone : phone} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="payableAmount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payable Amount</label>
                            <input type="number" name="payableAmount" id="payableAmount" placeholder="payableAmount.." className="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " value={updateBill ? updateBill.payableAmount : payableAmount} onChange={handleChange} required />
                        </div>
                        {
                            (editBill.name&& editBill.email&& editBill.phone)? <button onClick={()=>handleUpdate(editBill._id)} className="w-full rounded text-black bg-blue-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Update/Edit Bill</button>: <button onClick={handleAddBill} className="w-full rounded text-black bg-blue-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Add New Bill</button>
                        }

                    </form>
                </div>
            </Modal>
        </>
    );
};

export default NewBill;