import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
    name:"auth",
    initialState:{
        user: null,
        isLoading:true
    },
    reducers:{
        addUser:(state, action) =>{
            state.user = action.payload.user;
            state.isLoading = false;
        },
        deleteUser:(state, action) =>{
            state.user = null;
            state.isLoading = false;
        }  
    }
})

export let {addUser, deleteUser} = authSlice.actions;
export let authReducer = authSlice.reducer;