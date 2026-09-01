import React from 'react'
import { Outlet, Link } from 'react-router'

const MainLayouts = () => {
  return (
    <div>
        <div>
            <nav>
            <ul>
                <li><Link to="/products">products</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/logout">logout</Link></li>
            </ul>
            </nav>
        </div>
        <Outlet/>
    </div>
  )
}

export default MainLayouts 