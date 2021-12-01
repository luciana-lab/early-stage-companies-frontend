import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/companies">Companies</NavLink>
        </div>
    )
}

export default Navbar;