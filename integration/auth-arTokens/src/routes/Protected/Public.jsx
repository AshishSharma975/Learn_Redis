import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'
function Public() {


  let {user} = useSelector((store)=> store.auth)

  if(user){
    return <Navigate to="/home"/>
  }

  return (
        <Outlet/>
  )
}

export default Public