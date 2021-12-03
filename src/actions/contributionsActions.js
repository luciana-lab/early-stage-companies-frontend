import { ADD_CONTRIBUTION } from "./constants";

export function addContribution(contribution) {
    return dispatch => {
        fetch("/contributions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(contribution)
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: ADD_CONTRIBUTION, payload: data }))
    }
}