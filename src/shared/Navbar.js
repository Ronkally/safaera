import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className = "navbar">
            <Link to="/" >Home</Link>
            <Link to="/projects" >Projects</Link>
            <Link to="/about" >About us</Link>
        </nav>
    )
}

export default Navbar
