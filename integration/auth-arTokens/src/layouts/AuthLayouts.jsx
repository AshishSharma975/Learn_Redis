import React from 'react'
import { Outlet } from 'react-router'

const AuthLayouts = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans text-slate-100">
      {/* Background ambient glow circles */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white text-xl shadow-lg shadow-indigo-500/30 mb-2">
            🔐
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Auth Portal</h2>
          <p className="text-xs text-slate-400 mt-1">Sign in or create your account</p>
        </div>

        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayouts