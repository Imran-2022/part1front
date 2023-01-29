import React from 'react';
import NewBill from './NewBill';
import Searchbar from './Searchbar';

const TopBar = () => {
    return (
        <div className="w-full m-auto px-2 bg-[#f5f7f9] pt-6 pb-3">
            <nav className="px-2 py-2.5 w-full">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex items-center gap-6">
                        <span className="self-center text-xl whitespace-nowrap dark:text-white">Billings</span>
                        <Searchbar />
                    </div>
                    <div className="flex md:order-2">
                       <NewBill/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopBar;