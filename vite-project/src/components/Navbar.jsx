import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link to={'/home'}>Home</Link>
        <Link to={'/posts'}>Posts</Link>
        {/* <Link to={'/'}>Login Page</Link> */}
    </nav>
  )
}
