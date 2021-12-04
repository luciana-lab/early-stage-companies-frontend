import { ADD_USER } from "./constants";

export function addUser(user) {
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
                    dispatch({ type: ADD_USER, payload: data })
                }
            })
            .catch(error => console.log("registration error", error))
    }
}
