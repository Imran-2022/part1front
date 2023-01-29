import React from 'react';
import { Link } from 'react-router-dom';
import powerHack from "../assets/logo/power-hack.svg"
const Header = () => {
    const amount = 2323; // just for now 🐸
    return (
        <div className="w-10/12 m-auto p-2">
            <nav className="bg-white px-2 py-2.5 w-full">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex items-center">
                        <img src={powerHack} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><Link to="/" className='underline underline-offset-4'>Power-Hack</Link></span>
                    </div>
                    <div className="flex md:order-2">
                    <Link to="/login"><button type="button" className="rounded text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">LogIn</button></Link>
                    </div>
                    <div>
                        <p>Total Paid : {amount}</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;