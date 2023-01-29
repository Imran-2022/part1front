import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({

    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api',
    }),
    tagTypes: ['billingss', 'bill'],
    endpoints: (builder) => ({
        getBillings: builder.query({
            query: () => '/billing-list',
            keepUnusedDataFor: 600,
            providesTags: ["billingss"]
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
            query: ({ id, inputs }) => ({
                url: `/update-billing/${id}`,
                method: "PUT",
                body: inputs,
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
        })
    }),

});

export const { useGetBillingsQuery, useGetBillingQuery, useGetSearchListQuery, useAddBillingMutation, useEditBillMutation,useDeleteBillMutation } = apiSlice;
