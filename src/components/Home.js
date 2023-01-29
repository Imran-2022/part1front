import React from 'react';
import Layout from '../Layout';
import Pagination from './Pagination';
import Table from './table/Table';
import TopBar from './TopBar';

const Home = () => {
    return (
        <Layout title="Billing Page" className="bg-[#f5f7f9] h-[89.5vh]">
            <div className='w-10/12 m-auto py-2.5'>
                <TopBar />
                <Table />
                <Pagination />
            </div>
        </Layout>
    );
};

export default Home;