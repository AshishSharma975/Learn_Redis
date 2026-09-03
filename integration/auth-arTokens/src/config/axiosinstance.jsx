import axios from "axios";


export let axiosInstance = axios.create({
    baseURL:'http://localhost:3000/api',
    withCredentials:true

})

// Response Interceptor

axiosInstance.interceptors.response.use(
    (response) => {
        console.log("this is response interceptor -> " ,response)
        return response; // important step for successful response
        // always return response in response interceptor
        // otherwise it will not send data to the component

    },

    // Error Handler
    async (error) => {

        let OriginalReq = error.config
        if(error.response.status == 401 && !OriginalReq.retry){

            OriginalReq.retry = true
            try{
              await axiosInstance.get("/auth/get-accessToken")
              return axiosInstance(OriginalReq)

            } catch(err){
                window.location.href = "/"
                return Promise.reject(error);
            }
        }
        // return Promise.reject(error); // important step for error handling
        // always return error in error handler
        // otherwise it will not send error to the component
        
    }
)