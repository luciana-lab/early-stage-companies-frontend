import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '.././style/Navbar.css';
import logo from '.././style/logo.png';
import { logout } from '../redux/actions/usersActions';
import { connect } from 'react-redux';

class Navbar extends Component {
    state = {
        user: {}
    }

    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul id="navbar-ul">
                        <li id="navbar-li-logo"><div id="dripper-logo"><img src={logo} className="img-responsive main-image" alt="logo" /></div></li>
                        <li id="navbar-li-home"><NavLink exact to="/">HOME</NavLink></li>
                        <li id="navbar-li-projects"><NavLink exact to="/companies">PROJECTS</NavLink></li>
                        <li id="navbar-li-start-project"><NavLink exact to="/companies/new">START A PROJECT</NavLink></li>
                        {this.props.userLoggedIn.logged_in ?
                            <li id="navbar-li-logout"><button onClick={() => this.props.logout(this.state)} id="navbar-logout-btn">LOGOUT</button></li>
                            : <li id="navbar-li-signin"><NavLink exact to="/signin">SIGN IN</NavLink></li>
                        }

                    </ul>
                </nav>
            </div>
        )
    }
}

export default connect(null, { logout })(Navbar);