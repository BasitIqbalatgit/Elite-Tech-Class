/// 1. slice
// 2. store setup
// 3. use..


import { createSlice } from "@reduxjs/toolkit";

const LogedInSlic = createSlice(
    {
        name: "logedIn",
        initialState:{
            login: false,
        },
        reducers:{
           setToTrue:(state, action)=>{
            state.login = true;
           },
           setToFalse:(state,action)=>{
            state.login = false;
           }
        }
    }
)

export const {setToFalse,setToTrue} = LogedInSlic.actions;
export default LogedInSlic.reducer;