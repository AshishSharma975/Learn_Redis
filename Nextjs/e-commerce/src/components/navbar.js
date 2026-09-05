import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              LUXE
            </Link>
          </div>
          
          {/* Main Navigation Links */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link href="/" className="text-xs md:text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-300">
              Home
            </Link>
            <Link href="/products" className="text-xs md:text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-300 relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-xs md:text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-300">
              About
            </Link>
          </div>
          
          {/* Right Section (Cart & Profile) */}
          <div className="flex items-center space-x-6">
            <Link href="/search" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </Link>
            <Link href="/cart" className="relative text-slate-300 hover:text-emerald-400 transition-colors duration-300 focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </Link>
            <div className="hidden md:block w-px h-6 bg-white/10 mx-2"></div>
            <Link href="/login" className="hidden md:flex items-center justify-center text-sm font-medium text-black bg-white hover:bg-emerald-400 hover:text-black px-4 py-2 rounded-full transition-all duration-300">
              Sign In
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar