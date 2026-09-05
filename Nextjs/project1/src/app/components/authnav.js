import React from 'react'
import Link from 'next/link'

const authnav = () => {
  return (
    <div className="flex gap-6 justify-center">
      <Link href="/authlayout/login">Login</Link>
      <Link href="/authlayout/register">Register</Link>
    </div>
  )
}

export default authnav