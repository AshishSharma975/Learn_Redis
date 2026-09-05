import React from 'react'
import MainNav from '../components/mainnav.js'
const layout = ({children}) => {
  return (
     <html
      lang="en"
      className= {` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <MainNav/>
        {children}

      </body>

    </html>
  )
}

export default layout