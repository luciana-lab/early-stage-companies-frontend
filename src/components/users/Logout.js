import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/usersActions';

class Logout extends Component {
    state = {
        // loggedInStatus: "NOT_LOGGED_IN",
        user: {}
    }

    handleLogoutClick = () => {
        // console.log(this.props)
        // console.log("from logout", this.state)
        this.props.logout(this.state)
        // this.props.handleSuccessfulAuth(this.state)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )
    }
}

// mapDispatchToProps

export default connect(null, { logout })(Logout);

/*
class Logout extends Component {
    handleSuccessfulAuth = data => {
        this.props.handleLogin(data)
        this.props.routerProps.history.push("/")
        // return <Redirect to="/companies" />
    }

    handleLogoutClick = () => {
        // console.log(this.props.currentUser.id)
        logoutUser()
        this.props.handleLogout(this.props.currentUser.id)
    }

    render() {
        return (
            <div>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} routerProps={this.props.routerProps} />
                <Signup handleSuccessfulAuth={this.handleSuccessfulAuth} routerProps={this.props.routerProps} />
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )
    }
}

export default connect(null, { logoutUser })(Logout);
*/

/*
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

*/