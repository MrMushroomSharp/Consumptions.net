import { Link, NavLink } from "react-router-dom"
import './Navbar.css'

function navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <NavLink to='/' className="navbar" id="navbar-logo">Consumption
                </NavLink>
                <NavLink to='/daily' className="navbar">Daily</NavLink>
                <NavLink to='/about' className="navbar">About</NavLink>
            </nav>
        </div>
    )
}

export default navbar;