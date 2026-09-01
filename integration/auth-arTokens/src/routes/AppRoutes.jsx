import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router"
import AuthLayouts from '../layouts/AuthLayouts'
import MainLayouts from '../layouts/MainLayouts'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'




const router = createBrowserRouter([
    {
        path:"/",
        element: <AuthLayouts/>,
        children:[
            {
                path:"",
                element: <Login/>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/register",
                element: <Register/>
            }
        ]
    },
    {
        path:"/home",
        element: <MainLayouts/>,
        children:[
            {
                path:"",
                element: <Home/>
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