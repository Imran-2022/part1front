import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { addpaginatedData, setTotalCount } from "../pagination/paginationSlice";

export const apiSlice = createApi({
    
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_URL}`,
        prepareHeaders: async(headers,{getState,endpoint})=>{
            const token=getState()?.auth?.token;
            if(token){
                headers.set("Authorization",`Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['billingss', 'bill'],
    endpoints: (builder) => ({
        getBillings: builder.mutation({
            query: ({currentPage,limit}) => ({
                url:`/billing-list?currentPage=${currentPage}&limit=${limit}`,
                method: "GET",
                keepUnusedDataFor: 600,
               
            }),
            providesTags: ["billingss"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log("result",result?.data)
                    dispatch(addpaginatedData(result?.data))

                } catch (err) {
                    // do nothing
                }
            },
        }),

        getBilling: builder.query({
            query: (id) => `/billing-list/${id}`,
            providesTags: (result, error, arg) => [
                "billingss", { type: "bill", _id: arg }
            ],
        }),
        getSearchList: builder.query({
            query: (value) => `/billing-list-search?search=${value}`
        }),
        addBilling: builder.mutation({
            query: (data) => ({
                url: '/add-billing',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["billingss"],
        }),
        editBill: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-billing/${id}`,
                method: "PUT",
                body: data,
            }),
            // invalidatesTags: ["billingss"],
            invalidatesTags: (result, error, arg) => [
                "billingss", { type: "bill", _id: arg.id }
            ],
        }),
        deleteBill: builder.mutation({
            query: (id) => ({
                url: `/delete-billing/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["billingss"],
        }),
        getTotalOfBill: builder.mutation({
            query: () => ({
                url: `/billing-list/total`,
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setTotalCount(result?.data.total))

                } catch (err) {
                    // do nothing
                }
            },
        })
    }),

});

export const { useGetBillingsMutation, useGetBillingQuery, useGetSearchListQuery, useAddBillingMutation, useEditBillMutation,useDeleteBillMutation,useGetTotalOfBillMutation } = apiSlice;
