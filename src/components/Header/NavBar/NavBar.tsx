
import { useState, } from "react"

const NavBar = () => {
    return  (
        <nav className="navbar">
            <span>
                PAVEL POPOVaaa
            </span>
            <ul className="navbar__list">
                <li>Home</li>
                <li className="navbar__list-item">Blog</li>
            </ul>
        </nav>
    )
}

export default NavBar;