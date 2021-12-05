import { SIGNUP, LOGIN, LOGOUT } from "./constants";

export function signup(user) {
    return dispatch => {
        fetch("/users", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origins": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        },
            { withCredentials: true }
        )
            .then(resp => resp.json())
            .then(data => {
                // console.log("user created?", data)
                if (data.status === "created") {
                    // this.props.handleSuccessfulAuth(data.user)
                    dispatch({ type: SIGNUP, payload: data })
                }
            })
            .catch(error => console.log("registration error", error))
    }
}

export function login(user) {
    return dispatch => {
        fetch("/sessions", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        },
            { withCredentials: true }
        )
            .then(resp => resp.json())
            .then(data => {
                // debugger
                // console.log(data)
                if (data.logged_in) {
                    // console.log(data)
                    // this.props.handleSuccessfulAuth(data.user)
                    dispatch({ type: LOGIN, payload: data })
                } else {
                    throw new Error()
                }
            }).catch(error => console.log("login error", error))
    }
}

export function logout() {
    return dispatch => {
        fetch("/logout", {
            method: "DELETE"
        }, { withCredentials: true })
            .then(resp => resp.json())
            // .then(data => console.log(data))
            .then(data => {
                if (!data.logged_in) {
                    // this.props.handleLogout(data)
                    dispatch({ type: LOGOUT, payload: data })
                }
            })
            .catch(error => console.log("logout error", error))
    }
}

export function loginStatus() {
    return dispatch => {
        fetch("/logged_in", { withCredentials: true })
            .then(resp => resp.json())
            .then(data => {
                console.log("data?", data)
                // console.log("data status", data.logged_in)
                // console.log(this.state)
                if (data.logged_in) {
                    // this.setState({ user: data.user })
                    dispatch({ type: LOGIN, payload: data })
                } else {
                    // this.setState({ user: {} })
                    dispatch({ type: LOGOUT, payload: data })
                }
            })
            .catch(error => {
                console.log("check login error", error)
            })
    }
}