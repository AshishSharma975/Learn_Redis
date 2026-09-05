import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-900 dark:via-[#0a0a0a] dark:to-black px-4 py-16 font-sans transition-colors duration-300">
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
          {/* 8 Skeleton Cards */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden backdrop-blur-xl flex flex-col h-full">
              
              {/* Image Skeleton */}
              <div className="h-72 w-full bg-white p-8 flex items-center justify-center">
                <Skeleton className="w-full h-full bg-black/5 dark:bg-white/10 rounded-xl" />
              </div>

              {/* Content Skeleton */}
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Category & Rating */}
                <div className="flex justify-between items-start mb-4">
                  <Skeleton className="h-5 w-20 bg-emerald-600/20 dark:bg-emerald-400/20 rounded-full" />
                  <Skeleton className="h-5 w-12 bg-black/5 dark:bg-white/10 rounded-full" />
                </div>
                
                {/* Title */}
                <Skeleton className="h-6 w-3/4 bg-black/10 dark:bg-white/10 mb-2" />
                <Skeleton className="h-6 w-1/2 bg-black/10 dark:bg-white/10 mb-6" />
                
                {/* Description */}
                <div className="flex-grow">
                  <Skeleton className="h-4 w-full bg-black/5 dark:bg-white/5 mb-2" />
                  <Skeleton className="h-4 w-5/6 bg-black/5 dark:bg-white/5 mb-2" />
                </div>
                
                {/* Price */}
                <div className="mt-auto pt-4 border-t border-black/10 dark:border-white/10 flex flex-col">
                  <Skeleton className="h-3 w-10 bg-black/5 dark:bg-white/5 mb-2" />
                  <Skeleton className="h-8 w-24 bg-black/10 dark:bg-white/10" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loading