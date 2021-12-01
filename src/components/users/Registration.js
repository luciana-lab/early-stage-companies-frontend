import React, { Component } from "react";
import Logout from "./Logout";

class Registration extends Component {
    state = {
        // loggedInStatus: "NOT_LOGGED_IN",
        user: {}
    }

    checkLoginStatus() {
        fetch("http://localhost:3001/logged_in", { withCredentials: true })
            .then(resp => {
                console.log("logged in?", resp)
                if (resp.data.logged_in) {
                    this.setState({
                        user: resp.data.user
                    })
                } else if (!resp.data.logged_in) {
                    this.setState({
                        user: {}
                    })
                }
            })
            .catch(error => {
                console.log("check login error", error)
            })
    }

    componentDidMount() {
        this.checkLoginStatus()
    }

    handleLogin = data => {
        this.setState({ user: data.user })
    }

    handleLogout = () => {
        this.setState({ user: {} })
    }

    render() {
        return (
            <div>
                <Logout {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
            </div>
        )
    }

}

export default Registration;