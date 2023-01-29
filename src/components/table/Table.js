import React from 'react';
import TableData from './TableData';
import TableHeader from './TableHeader';
import { useGetBillingsQuery } from '../../features/api/apiSlice';
import BillingsLoader from '../../ui/BillingsLoader';
import Error from '../../ui/Error';

const Table = () => {

    const { data: billings, isLoading, isError } = useGetBillingsQuery();

    // decide what to render 🐸

    let content = null;
    if (isLoading) {
        content = <>
            <BillingsLoader />
            <BillingsLoader />
            <BillingsLoader />
            <BillingsLoader />
            <BillingsLoader />
        </>
    }

    if (!isLoading && isError) {
        content = <Error message="there is an error" />
    }

    if (!isLoading && !isError && billings?.length === 0) {
        content = <Error message="No videos found !" />

    }
    if (!isLoading && !isError && billings?.length > 0) {
        content =
            <>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHeader />
                    {
                        billings.map(billing => <TableData billing={billing} key={billing._id} />)
                    }
                </table>
            </>
    }
    
    return (
        <div className="w-full m-auto px-2">
            <div className="overflow-x-auto shadow sm:rounded-lg">
                {content}
            </div>
        </div>
    )

};

export default Table;