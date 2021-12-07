import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '.././style/Navbar.css';
import logo from '.././style/logo.png';
import { logout } from '../actions/usersActions';
import { connect } from 'react-redux';

class Navbar extends Component {
    state = {
        user: {}
    }
    render() {
        return (
            <nav>
                <ul>
                    <li><div id="logo"><img src={logo} className="img-responsive main-image" alt="logo" /></div></li>
                    <li><NavLink exact to="/">HOME</NavLink></li>
                    <li><NavLink exact to="/companies">PROJECTS</NavLink></li>
                    <li><NavLink exact to="/companies/new">START A PROJECT</NavLink></li>
                    {this.props.userLoggedIn.logged_in ?
                        <li><button onClick={() => this.props.logout(this.state)}>LOGOUT</button></li>
                        : <li><NavLink exact to="/signup">REGISTER</NavLink></li>
                    }

                </ul>
            </nav>
        )
    }
}

export default connect(null, { logout })(Navbar);