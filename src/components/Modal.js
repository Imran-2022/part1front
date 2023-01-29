import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeModelEditBill } from '../features/modal/modalSlice';

const Modal = ({children}) => {
    const dispatch=useDispatch();
    const modal = useSelector(state => state.modal);

    if(!modal.isOpen) return null;
    const handleClose =(e)=>{
        if(e.target.id==='wrapper') dispatch(removeModelEditBill())
    }
    return (
        <div onClick={handleClose} id="wrapper" className='fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[400px] md:w-[40%] md:mx-auto flex flex-col'>
                <button onClick={()=>dispatch(removeModelEditBill())} className="place-self-end text-black bg-blue-200 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 mb-2 ">X</button>
                <div className='bg-slate-50 p-2 rounded'>
                {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;