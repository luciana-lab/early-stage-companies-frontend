import React, { Component } from 'react';
import Login from '../sessions/Login';
import UserForm from './UserForm';
import { Redirect } from 'react-router-dom'

class Logout extends Component {
    handleSuccessfulAuth = data => {
        this.props.handleLogin(data)
        return <Redirect to="/companies" />
    }

    handleLogoutClick = () => {
        fetch("http://localhost:3001/logout", {
            method: "DELETE"
        }, { withCredentials: true })
            .then(resp => resp.json())
            .then(data => this.props.handleLogout())
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