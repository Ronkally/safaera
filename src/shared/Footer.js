import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <Link><i class="fab fa-linkedin fa-3x"></i></Link> 
            <Link><i class="fab fa-facebook-square fa-3x"></i></Link> 
            <Link><i class="fab fa-github-square fa-3x"></i></Link> 
        </div>
    )
}

export default Footer
