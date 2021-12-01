import React, { Component } from 'react';
import Login from '../sessions/Login';
import UserForm from './UserForm';

class Logout extends Component {
    handleSuccessfulAuth = data => {
        this.props.handleLogin(data)
        this.props.history.push("/companies")
    }

    handleLogoutClick = () => {
        fetch("http://localhost:3001/logout", {
            method: "DELETE"
        }, { withCredentials: true })
            .then(resp => this.props.handleLogout())
            .catch(error => console.log("logout error", error))
    }

    render() {
        return (
            <div>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <UserForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )
    }
}

export default Logout;