import React, { useState } from 'react';
import { useAddBillingMutation, useEditBillMutation, useGetBillingQuery } from '../features/api/apiSlice';
import Modal from './Modal';

const NewBill = () => {
    const [modal, setModal] = useState(false);

    const [addBill,{data:addBil,isSuccess:addSuccess,isLoading:adLoading,isError:addisError}]=useAddBillingMutation();

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
        payableAmount: ""

    });

    const handleChange = (e) => {
        // setInputs()
        // e.target.propertyname(name) -> e.target.value.
        setInputs((preValue) => ({ ...preValue, [e.target.name]: e.target.value }))
    }
    const handleAddBill = () => {
        addBill(inputs)
        console.log(inputs)
    }

    const { name, email, phone, payableAmount } = inputs;


    //  update billing data --------------(get single Data...)

    const id ='63d672fd849b08d9ca759640'

    const {data:singleBilling,isLoading,isError,isSuccess}=useGetBillingQuery(id)

   if(singleBilling) {console.log(singleBilling)}
// now update data.......

const [editBill,{data:editB}]=useEditBillMutation()

const handleUpdate=(dt)=>{
    console.log(dt);
    editBill({id,inputs})
}

    return (
        <>
            <button onClick={() => setModal(true)} type="button" className="rounded text-black bg-blue-200 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Add new Bill</button>
            <Modal modal={modal} setModal={setModal}>
                <div className='p-6'>
                    <h3 className="mb-4 text-xl font-medium text-gray-900">Add New Bill</h3>
                    <form className="space-y-6" action="#" onSubmit={e=>e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name :</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " placeholder="full name.." value={name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " placeholder="email..." value={email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone :</label>
                            <input type="number" name="phone" id="phone" className="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " placeholder="phone no.." value={phone} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="payableAmount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payable Amount</label>
                            <input type="number" name="payableAmount" id="payableAmount" placeholder="payableAmount.." className="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " value={payableAmount} onChange={handleChange} required />
                        </div>
                        {/* <button type="submit" className="w-full rounded text-black bg-blue-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Add New Bill</button> */}
                        {
                            singleBilling?<button onClick={()=>handleUpdate(singleBilling?._id)} className="w-full rounded text-black bg-blue-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">upDate Bill</button>:<button onClick={handleAddBill} className="w-full rounded text-black bg-blue-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Add New Bill</button>
                        }
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default NewBill;