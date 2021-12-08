import React, { Component } from "react";
import Signup from "./Signup";
// import Login from "./Login";
// import Logout from "./Logout";

class Registration extends Component {
    render() {
        return (
            <div>
                {/* <Login routerProps={this.props.routerProps} userStatus={this.props.user} /> */}
                <Signup routerProps={this.props.routerProps} userStatus={this.props.user} />
                {/* <Logout handleSuccessfulAuth={this.handleSuccessfulAuth} routerProps={this.props.routerProps} userStatus={this.props.user} /> */}
            </div>
        )
    }

}

export default Registration;

// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     dispatchLoginStatus: () => dispatch(loginStatus())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Registration);

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