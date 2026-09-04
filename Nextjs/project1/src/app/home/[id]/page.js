import React from 'react'

const page = async ({params}) => {
let {id} = await params
  return (
    <div>
      
      this is common page jisme dynamic id aaygi {id}</div>
  )
}

export default page