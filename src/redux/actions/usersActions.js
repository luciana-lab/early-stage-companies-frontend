import { BASE_URL, LOGIN, LOGOUT } from "../constants";

export function signup(user) {
    return dispatch => {
        fetch(`${BASE_URL}/users`, {
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
                if (data.status === "create") {
                    dispatch({ type: LOGIN, payload: data })
                }
            })
            .catch(error => console.log("registration error", error))
    }
}

export function login(user) {
    return dispatch => {
        fetch(`${BASE_URL}/sessions`, {
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
                if (data.logged_in) {
                    dispatch({ type: LOGIN, payload: data })
                }
                // } else {
                //     throw new Error()
                // }
            })
            .catch(error => console.log("login error", error))
    }
}

export function logout() {
    return dispatch => {
        fetch(`${BASE_URL}/logout`, {
            method: "DELETE"
        }, { withCredentials: true })
            .then(resp => resp.json())
            .then(data => {
                if (!data.logged_in) {
                    dispatch({ type: LOGOUT, payload: data })
                }
            })
            .catch(error => console.log("logout error", error))
    }
}

export function loginStatus() {
    return dispatch => {
        fetch(`${BASE_URL}/logged_in`, { withCredentials: true })
            .then(resp => resp.json())
            .then(data => {
                if (data.logged_in) {
                    dispatch({ type: LOGIN, payload: data })
                } else {
                    dispatch({ type: LOGOUT, payload: data })
                }
            })
    }
}