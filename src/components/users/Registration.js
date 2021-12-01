import React, { Component } from "react";
import UserForm from "./UserForm";
import Logout from "./Logout";
import Login from "../sessions/Login";

class Registration extends Component {
    handleSuccessfulAuth = data => {
        this.props.handleLogin(data)
        this.props.history.push("/companies")
    }
    render() {
        return (
            <div>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <UserForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Logout />
            </div>
        )
    }

}

export default Registration;