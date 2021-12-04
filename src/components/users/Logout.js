import React, { Component } from 'react';
import Login from '../sessions/Login';
import UserForm from './UserForm';
// import { Redirect } from 'react-router-dom'

class Logout extends Component {
    handleSuccessfulAuth = data => {
        this.props.handleLogin(data)
        this.props.routerProps.history.push("/")
        // return <Redirect to="/companies" />
    }

    handleLogoutClick = () => {
        fetch("/logout", {
            method: "DELETE"
        }, { withCredentials: true })
            .then(resp => resp.json())
            // .then(data => console.log(data))
            .then(data => this.props.handleLogout(data))
            .catch(error => console.log("logout error", error))
    }

    render() {
        return (
            <div>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} routerProps={this.props.routerProps} />
                <UserForm handleSuccessfulAuth={this.handleSuccessfulAuth} routerProps={this.props.routerProps} />
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )
    }
}

export default Logout;