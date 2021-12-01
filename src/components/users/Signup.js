import React, { Component } from 'react';
import UserForm from './UserForm';

class Signup extends Component {
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
                <button onClick={this.handleLogoutClick}>Logout</button>
                <UserForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}

export default Signup;