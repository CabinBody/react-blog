import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./modules/userReducer";

const Store = configureStore({
    reducer:{
        token : userReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type RootDispatch = typeof Store.dispatch

export default Store
