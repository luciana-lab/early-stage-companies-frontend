import { ADD_CONTRIBUTION, GET_CONTRIBUTIONS } from "./constants";

export function fetchContributions() {
    return dispatch => {
        fetch("/contributions")
            .then(resp => resp.json())
            .then(data => dispatch({ type: GET_CONTRIBUTIONS, payload: data }))
    }
}

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