import React, { Component } from "react";
import { connect } from 'react-redux';
import { loginStatus } from "../../actions/usersActions";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import Pages from "../Pages";

class Registration extends Component {
    state = {
        loggedInStatus: ""
    }

    componentDidMount = () => {
        // console.log("login status mount", this.props)
        // console.log("login status mount", data)
        // console.log("dispatch", this.props.dispatchLoginStatus())
        this.props.dispatchLoginStatus()
        // this.handleSuccessfulAuth(data)
    }

    handleSuccessfulAuth = data => {
        console.log("this.state before", this.state)
        console.log("handle successful auth", data)
        // this.setState({ loggedInStatus: data.loggedInStatus })
        this.props.dispatchGetStatus(this.state)
        console.log("this.state after", this.state)
    }

    render() {
        return (
            <div>
                <Login componentDidMount={this.componentDidMount} handleSuccessfulAuth={this.handleSuccessfulAuth} routerProps={this.props.routerProps} userStatus={this.props.user} />
                <Signup handleSuccessfulAuth={this.handleSuccessfulAuth} routerProps={this.props.routerProps} userStatus={this.props.user} />
                <Logout handleSuccessfulAuth={this.handleSuccessfulAuth} routerProps={this.props.routerProps} userStatus={this.props.user} />
                {/* <Pages loggedInStatus={this.state.loggedInStatus} /> */}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchLoginStatus: () => dispatch(loginStatus()),
    dispatchGetStatus: payload => dispatch({ type: "LOGGEDIN_STATUS", payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

/*
class Registration extends Component {
    state = {
        user: {}
    }

    checkLoginStatus() {
        fetch("/logged_in", { withCredentials: true })
            .then(resp => {
                // console.log("logged in?", resp)
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error()
                }
            })
            .then(data => {
                console.log("data?", data)
                if (data.logged_in) {
                    this.setState({ user: data.user })
                } else if (!data.logged_in) {
                    this.setState({ user: {} })
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
                <Logout currentUser={this.state.user} handleLogin={this.handleLogin} handleLogout={this.handleLogout} routerProps={this.props.routerProps} />
            </div>
        )
    }

}



export default Registration;
*/