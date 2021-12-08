import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/usersActions';
import { Link } from 'react-router-dom';
import '../../style/Login.css';

class Signup extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        about: "",
        image: "",
        registrationErrors: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchSignup(this.state)
        this.props.routerProps.history.push("/companies")

    }

    render() {
        return (
            <div className="signup-main-container">
                <div className="signup-container">
                    <h3>SIGN UP</h3>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <label>First Name</label>
                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} placeholder="John" required />

                        <label>Last Name</label>
                        <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} placeholder="Doe" required />

                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="johndoe@johndoe.com" required />

                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

                        <label>About</label>
                        <input type="text" name="about" value={this.state.about} onChange={this.handleChange} placeholder="Social media fan. Proud entrepreneur. Pop culture expert." />

                        <label>Image</label>
                        <input type="text" name="image" value={this.state.image} onChange={this.handleChange} placeholder="http://myimage.com" />

                        <input type="submit" value="Create Account" id="login-btn" />
                    </form>
                    <p id="login-signup-p-tag">Already have an account? <Link to="/signin">Sign in</Link></p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchSignup: user => dispatch(signup(user))
    }
}

export default connect(null, mapDispatchToProps)(Signup);

/*

        erForm extends Component {
        tructor(props) {
            r(props)

            .state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            about: "",
            image: "",
            registrationErrors: ""
        }


            ange = e => {
            .setState({
            [e.target.name]: e.target.value
        })


            bmit = e => {
            ole.log(this.state.password)
                users", {
                od: "POST",
                ers: {
                "Access-Control-Allow-Origins": "*",
                "Content-Type": "application/json",
                Accept: "application/json"

                : JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                about: this.state.about,
                image: this.state.image
            })

            { withCredentials: true }

                n(resp => resp.json())
                n(data => {
                    ebugger
                    ole.log("user created?", data)
                    data.status === "created") {
                    this.props.handleSuccessfulAuth(data.user)
                }
                atch(error => {
                console.log("registration error", error)
            })

        e.preventDefault()





                    m onSubmit={this.handleSubmit}>
                    <label>First Name</label>
                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} required />

                    <label>Last Name</label>
                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} required />

                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

                    <label>About</label>
                    <input type="text" name="about" value={this.state.about} onChange={this.handleChange} />

                    <label>Image</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />

                                "submit" value="Create Account" />
                </form>
            </div>
        )
    }
}

export default UserForm;
*/