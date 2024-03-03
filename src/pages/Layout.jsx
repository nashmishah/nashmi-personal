import React from 'react'
import {Outlet, Link} from "react-router-dom"
// import "../src/App.css"

const Layout = () => {
  return (
    <>
        <nav className='main-navbar'>
            <ul className='main-navbar-items'>
                <li className='main-navbar-item'>
                    <Link to="/">Home</Link>
                </li>
                <li className='main-navbar-item'>
                    <Link to="/thoughts">Thoughts</Link>
                </li>
                <li className='main-navbar-item'>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className='main-navbar-item'>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>

  )
}

export default Layout