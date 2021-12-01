import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            about: "",
            image: "",
            registrationErrors: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        console.log(this.state.password)
        fetch("/users", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origins": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                about: this.state.about,
                image: this.state.image
            })
        },
            { withCredentials: true }
        )
            .then(resp => resp.json())
            .then(data => {
                // debugger
                console.log("user created?", data)
                if (data.status === "created") {
                    this.props.handleSuccessfulAuth(data.user)
                }
            }).catch(error => {
                console.log("registration error", error)
            })

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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

                    <input type="submit" value="Create Account" />
                </form>
            </div>
        )
    }
}

export default UserForm;