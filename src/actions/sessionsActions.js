import { GET_USER } from "./constants";

export function getUser(user) {
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
                    dispatch({ type: GET_USER, payload: data })
                } else {
                    throw new Error()
                }
            }).catch(error => console.log("login error", error))
    }
}