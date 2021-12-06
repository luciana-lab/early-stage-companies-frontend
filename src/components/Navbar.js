import React from 'react';
import { NavLink } from 'react-router-dom';
import '.././style/Navbar.css';
import logo from '.././style/logo.png';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><div id="logo"><img src={logo} className="img-responsive main-image" /></div></li>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/companies">Companies</NavLink></li>
                <li><NavLink exact to="/companies/new">Create Company</NavLink></li>
                <li><NavLink exact to="/signup">Signup</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;