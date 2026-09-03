import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router"
import AuthLayouts from '../layouts/AuthLayouts'
import MainLayouts from '../layouts/MainLayouts'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Public from './Protected/Public'
import ProtectedRoutes from './Protected/ProtectedRoutes'
import { axiosInstance } from '../config/axiosinstance'
import { useDispatch } from 'react-redux'
import { addUser, deleteUser } from '../state/AuthReducer'



const router = createBrowserRouter([
    {
        path:"/",
        element: <Public/>,
        children:[
            {
                path:"",
                element: <AuthLayouts/>,
                children:[
                    {
                        path:"",
                        element: <Login/>
                    },
                    {
                        path:"/register",
                        element: <Register/>
                    }
                ]
            },
        ]
       
    },
    {
        path:"/home",
        element: <ProtectedRoutes/>,
        children:[
            {
                path:"",
                element: <MainLayouts/>,
                children:[
                    {
                        path:"",
                        element: <Home/>
                    }
                ]
            },
        ]
       
    }
])
const AppRoutes = () => {

    let dispatch = useDispatch();

    useEffect(()=>{
    
        (async()=>{
            try {
                
                let res = await axiosInstance.get("/auth/me");
                console.log("this is ui app ->",res)
                dispatch(addUser({user:res.data.isUserExist}))
            } catch (error) {
                console.log("Not logged in or error:", error);
                dispatch(deleteUser());
            }
        })()

    },[])
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes