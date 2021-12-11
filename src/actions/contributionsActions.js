import { ADD_CONTRIBUTION, DELETE_CONTRIBUTION } from "./constants";

export function addContribution(contribution) {
    return dispatch => {
        fetch(`/contributions`, {
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

export function deleteContribution(contribution) {
    return dispatch => {
        fetch(`/contributions/${contribution.id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: DELETE_CONTRIBUTION, payload: data }))
    }
}