import React, { Component } from 'react';

class Logout extends Component {
    handleLogoutClick = () => {
        fetch("http://localhost:3001/logout", {
            method: "DELETE"
        }, { withCredentials: true })
            .then(resp => this.props.handleLogout())
            .catch(error => console.log("logout error", error))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )
    }
}

export default Logout;