import React from 'react'

const page = async () => {
  let res = await fetch('https://fakestoreapi.com/products')
  let data = await res.json()

  return (
    <div className='p-6 grid gap-4'>
      <h1 className="text-2xl font-bold mb-4">my all product</h1>
      {data.map((item) => (
        <div key={item.id} className="border p-4 rounded-md">
          <h2 className="font-semibold text-lg">{item.title}</h2>
          <p className="text-gray-600 my-2">{item.description}</p>
          <p className="font-bold text-blue-600">${item.price}</p>
          <img src={item.image} alt={item.title} className="w-32 h-32 object-contain mt-2" />
        </div>
      ))}
    </div>
  )
}

export default page