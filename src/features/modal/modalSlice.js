import {createSlice} from "@reduxjs/toolkit"

const initialState={
    isOpen:false,
    editBill:{}
};

const modalSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{

    }
})


export const {}= modalSlice.actions;
export default modalSlice.reducer;