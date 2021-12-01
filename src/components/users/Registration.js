import React, { Component } from 'react';

class Registration extends Component {
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
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origins": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                firs_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                about: this.state.about,
                image: this.state.image
            })
        },
            { withCredentials: true }
        ).then(resp => {
            if (resp.formData.status === "created") {
                this.props.handleSuccessfulAuth(resp.data)
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
                </form>
            </div>
        )
    }
}

export default Registration;