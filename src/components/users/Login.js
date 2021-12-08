import React, { Component } from 'react';
import { login } from '../../actions/usersActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style/Login.css';

class Login extends Component {
    state = {
        email: "",
        password: "",
        // loggedInStatus: "LOGGED_IN",
        loginErrors: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchLogin(this.state)
        // this.props.routerProps.history.push("/companies")
        this.props.routerProps.history.goBack()

    }

    render() {
        return (
            <div className="login-container">
                <h3>SIGN IN</h3>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="johndoe@johndoe.com" required />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

                    <input type="submit" value="Login" id="login-btn" />
                </form>
                <p id="login-signup-p-tag">Don't have an account yet? <Link to="/signup">Sign up</Link></p>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);


/*
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        fetch("/sessions", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        },
            { withCredentials: true }
        )
            .then(resp => resp.json())
            .then(data => {
                // debugger
                // console.log(data)
                if (data.logged_in) {
                    console.log(data)
                    this.props.handleSuccessfulAuth(data.user)
                } else {
                    throw new Error()
                }
            }).catch(error => console.log("login error", error))

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login;
*/