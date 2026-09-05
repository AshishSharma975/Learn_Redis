import React from 'react'
import axios from 'axios'
import ProductCard from '@/components/productcard.js'

const page = async() => {
    let response = await axios.get("https://fakestoreapi.com/products")
    let products = response.data
    
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 tracking-tight mb-4">
            Curated Collection
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Discover our premium selection of hand-picked products designed to elevate your everyday lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
