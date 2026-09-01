import axios from "axios";


export let axiosInstance = axios.create({

    baseURL:'https://fakestoreapi.com',
    
})

//Response Interceptor

axiosInstance.interceptors.response.use(
    (response) => 
        console.log("this is response interceptor -> " ,response),
    (error) => {
        if(error.response.status == 401){
            console.log("error in interceptor -> 401");
        }
        
    }
)