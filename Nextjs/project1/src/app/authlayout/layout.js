import React from 'react'
import AuthNav from '../components/authnav.js'
const layout = ({children}) => {
  return (
     <html
      lang="en"
      className= {` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <AuthNav/>
        {children}

      </body>

    </html>
  )
}

export default layout