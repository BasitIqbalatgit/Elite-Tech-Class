import { configureStore } from "@reduxjs/toolkit";

import LogedInReducer from "./LogedInSlic";

export const store = configureStore({
    reducer:{
        login:LogedInReducer
    }
})