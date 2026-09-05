import React from 'react'
import Link from 'next/link'

const mainnav = () => {
  return (
    <div className='flex gap-6'>
        <Link href="/mainlayout/home">Home</Link>
        <Link href="/mainlayout/about">About</Link>
        <Link href="/mainlayout/contact">Contact</Link>
    </div>
  )
}

export default mainnav