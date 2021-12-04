import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/sessionsActions';

class Login extends Component {
    state = {
        email: "",
        password: "",
        loginErrors: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchGetUser(this.state)
        this.props.handleSuccessfulAuth(this.state)
        this.props.routerProps.history.push("/")
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

const mapDispatchToProps = dispatch => {
    return {
        dispatchGetUser: user => dispatch(getUser(user))
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