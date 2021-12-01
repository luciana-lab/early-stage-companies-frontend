import React, { Component } from "react";
import UserForm from "./UserForm";
import Logout from "./Logout";

class Registration extends Component {
    handleSuccessfulAuth = data => {
        this.props.handleLogin(data)
        this.props.history.push("/companies")
    }
    render() {
        return (
            <div>
                <UserForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Logout />
            </div>
        )
    }

}

export default Registration;