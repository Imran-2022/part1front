import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3001/api',
    }),
    endpoints:(builder)=>({
        getBillings:builder.query({
            query:()=>'/billing-list'
        })
    }),
});

export const {useGetBillingsQuery} = apiSlice;
