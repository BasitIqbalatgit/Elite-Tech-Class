// api (custome axios api)..

import axios from "axios"



const api = axios.create({
    baseURL:"http://localhost:5000",
    // headers:{
    //     "Content-Type":"application/json"
    // }
})
// get ... body --->
/// post and put ---> axios directly convets it to json.

export default api;