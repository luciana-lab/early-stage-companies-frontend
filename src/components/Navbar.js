import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/companies">Companies</NavLink></li>
                <li><NavLink exact to="/companies/new">Create Company</NavLink></li>
                <li><NavLink exact to="/signup">Signup</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;