import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(52,211,153,0.15)] flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden bg-white/90 p-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-xl" 
        />
        {/* Quick Add Button Overlay */}
        <div className="absolute bottom-4 left-0 right-0 px-4 z-20 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full py-3 rounded-xl bg-black/90 backdrop-blur-md text-white font-semibold text-sm hover:bg-black transition-colors shadow-lg">
            Quick Add
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-20">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em] bg-emerald-400/10 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full border border-white/5">
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-white text-xs font-medium">{product.rating.rate}</span>
          </div>
        </div>
        
        <h2 className="text-lg font-bold text-white mb-2 leading-tight line-clamp-2 group-hover:text-emerald-300 transition-colors duration-300" title={product.title}>
          {product.title}
        </h2>
        
        <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-2" title={product.description}>
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-white/10 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-medium mb-1">Price</span>
            <span className="text-2xl font-light text-white tracking-tight">
              <span className="text-emerald-400 font-medium mr-1">$</span>
              {product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
