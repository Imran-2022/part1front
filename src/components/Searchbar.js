import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useGetSearchListQuery } from '../features/api/apiSlice';
// import { addSearch } from '../../features/filter/filterSlice';
const Searchbar = () => {

    // api/billing-list?search=searchValue;

    const dispatch = useDispatch();
    const debounce = (func) => {
        let timer;
        return function (...argu) {
            const context = this;
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null
                func.apply(context, argu)
            }, 1000)
        }
    }

    const HandleSearch = (event) => {
        const { value } = event.target;
        //   dispatch(addSearch(value))
        console.log(value);
    }


    //useCallback provides us the memoizd callback

    const optimizedVersion = useCallback(debounce(HandleSearch), [])

    return (
        <div>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="search" disabled name="q" onChange={optimizedVersion} id="table-search" className=" sm:w-96 py-2 font-bold text-sm border-2  border-gray-300  rounded pl-10 focus:outline-none bg-slate-50 focus:text-gray-900 " placeholder="search by full-name/email/phone" />
            </div>
        </div>
    );
};

export default Searchbar;