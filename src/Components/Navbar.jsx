import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="left">
                    <Link className="hover-underline-animation" to="/" >Home</Link>
                    <Link className="hover-underline-animation" to="scrape" >Analytics</Link>
                    <Link className="hover-underline-animation" to="about" >About Us</Link>
                    <Link className="hover-underline-animation" to="Feedback" >FeedBack</Link>
                </div>
                <div className="right">
                    <button>
                    <i class="fa-solid fa-right-to-bracket"></i>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar