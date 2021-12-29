import React, { Component } from 'react';
import { login } from '../../redux/actions/usersActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style/Login.css';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchLogin(this.state)
        this.props.routerProps.history.push("/companies")
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

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);