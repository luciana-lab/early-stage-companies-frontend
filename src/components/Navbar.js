import React from 'react';
import { NavLink } from 'react-router-dom';
import '.././style/Navbar.css';
import logo from '.././style/logo.png';

function Navbar({ userLoggedIn }) {
    return (
        <nav>
            <ul>
                <li><div id="logo"><img src={logo} className="img-responsive main-image" alt="logo" /></div></li>
                <li><NavLink exact to="/">HOME</NavLink></li>
                <li><NavLink exact to="/companies">PROJECTS</NavLink></li>
                <li><NavLink exact to="/companies/new">START A PROJECT</NavLink></li>
                {userLoggedIn.logged_in ?
                    <li><NavLink exact to="/signup">LOGOUT</NavLink></li>
                    : <li><NavLink exact to="/signup">REGISTER</NavLink></li>
                }

            </ul>
        </nav>
    )
}

export default Navbar;