"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'

const Register = () => {
  let router = useRouter()
  const [formdata, setformdata] = useState({})

  let handleChange = (e)=>{
      let {name, value} = e.target
      setformdata((prev) => ({ ...prev, [name]: value }))
  }

  let handleSubmit = async (e)=>{
      e.preventDefault()
      try {
          let res = await api.post("/api/auth/register", formdata)
          if(res.data.success){
              // toast.success(res.data.message)
              router.push("/home")
          } else {
              alert(res.data.message || "Registration failed!")
          }
      } catch(err) {
          console.error("Register error:", err)
          alert(err.response?.data?.message || err.message || "Something went wrong!")
      }
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] w-full flex items-center justify-center p-4 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Abstract Glowing Blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-md relative z-10">
        <div className="rounded-[2rem] bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-[0_8px_40px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.24)] p-8 sm:p-10 transition-all duration-300">
          
          <div className="flex flex-col items-center text-center space-y-3 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-2 shadow-lg shadow-cyan-500/30">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400">
              Create an account
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Enter your details below to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 px-4 py-2 text-sm text-slate-900 dark:text-white transition-all placeholder:text-slate-400 focus:bg-white dark:focus:bg-black/80 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 shadow-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 px-4 py-2 text-sm text-slate-900 dark:text-white transition-all placeholder:text-slate-400 focus:bg-white dark:focus:bg-black/80 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 shadow-sm"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 px-4 py-2 text-sm text-slate-900 dark:text-white transition-all placeholder:text-slate-400 focus:bg-white dark:focus:bg-black/80 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 shadow-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="group relative w-full h-12 mt-2 flex items-center justify-center rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Create Account
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </form>

          <div className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
            Already have an account?{' '}
            <Link href="/login" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors font-bold underline underline-offset-4 decoration-2 decoration-cyan-500/30 hover:decoration-cyan-500">
              Sign in instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register