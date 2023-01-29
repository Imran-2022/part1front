import React from 'react';
import { BsArrowLeftSquare,BsArrowRightSquare } from 'react-icons/bs';

const Pagination = () => {

    // demo
    const currentPage=1;
    const totalPage=1;

    return (
        <div className='text-center py-5'>
            <div className='flex flex-row gap-3 items-center justify-center'>
                <div className='flex flex-row gap-1 items-center'>
                    <button
                        className="mx-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === 1}
                    >
                        <BsArrowLeftSquare className='text-2xl' />
                    </button>
                    <button
                        className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
                    >
                        1
                    </button>
                    <button
                        className="px-4 py-1  bg-blue-700 text-white"
                    >
                        2
                    </button>
                    <button
                        className="mx-2 disabled:opacity-50 disabled:cursor-not-allowed font-bold"
                        disabled={currentPage === totalPage}
                    >
                        <BsArrowRightSquare className='text-2xl' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;