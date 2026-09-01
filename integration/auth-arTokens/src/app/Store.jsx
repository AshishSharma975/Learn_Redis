import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "../state/AuthReducer"


export let Store = configureStore({
    reducer:{
        auth:authReducer
    },
})