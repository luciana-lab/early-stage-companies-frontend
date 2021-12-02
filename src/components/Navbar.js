import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/companies/create">Create Company</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </div>
    )
}

export default Navbar;