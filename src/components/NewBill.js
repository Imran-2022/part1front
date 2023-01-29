import React, { useState } from 'react';
import Modal from './Modal';

const NewBill = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <button onClick={() => setModal(true)} type="button" className="rounded text-black bg-blue-200 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Add new Bill</button>
            <Modal modal={modal} setModal={setModal}>
                <div className='p-6'>
                    <h3 class="mb-4 text-xl font-medium text-gray-900">Add New Bill</h3>
                    <form class="space-y-6" action="#">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name :</label>
                            <input type="text" name="name" id="name" class="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " placeholder="full name.." required />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " placeholder="email..." required />
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone :</label>
                            <input type="number" name="phone" id="phone" class="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " placeholder="phone no.." required />
                        </div>
                        <div>
                            <label for="payableAmount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payable Amount</label>
                            <input type="number" name="payableAmount" id="payableAmount" placeholder="payableAmount.." class="bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-2  border-gray-300  rounded  focus:outline-none " required />
                        </div>
                        <button type="submit" className="w-full rounded text-black bg-blue-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Add New Bill</button>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default NewBill;