import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router"
import AuthLayouts from '../layouts/AuthLayouts'
import MainLayouts from '../layouts/MainLayouts'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Public from './Protected/Public'
import ProtectedRoutes from './Protected/ProtectedRoutes'




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
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes