import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
    name:"auth",
    initialState:{
        user: null,
    },
    reducers:{
        addUser:(state, action) =>{
            state.user = action.payload.user;
        },
        deleteUser:(state, action) =>{
            state.user = null;
        }   
    }
})

export let {addUser, deleteUser} = authSlice.actions;
export let authReducer = authSlice.reducer;