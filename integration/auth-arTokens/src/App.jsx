import React from 'react'
import axios from "axios"
import { axiosInstance } from './config/axiosinstance';
const App = () => {


  let getData = async ()=>{
    try{
let res = await axiosInstance.get("/products");
console.log("this is ui app ->",res)
    } catch(err){
      console.log("error in api ", err);
    }
  }
  return (
    <div>
      <h1 className="bg-red-600">hey golusss...</h1>
      <button onClick={()=>getData()}>Get Data</button>
    </div>
  )
}

export default App