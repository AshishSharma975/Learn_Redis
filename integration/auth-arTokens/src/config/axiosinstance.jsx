import axios from "axios";


export let axiosInstance = axios.create({

    baseURL:'https://fakestoreapi.com',
    
})

//Response Interceptor

axiosInstance.interceptors.response.use(
    (response) => {
        console.log("this is response interceptor -> " ,response)
        return response  // important step for successful response
        // always return response in response interceptor
        // otherwise it will not send data to the component

    },

    // Error Handler
    (error) => {
        if(error.response.status == 401){
            console.log("error in interceptor -> 401");
        }
        return Promise.reject(error); // important step for error handling
        // always return error in error handler
        // otherwise it will not send error to the component
        
    }
)