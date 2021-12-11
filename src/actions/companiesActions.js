import { ADD_COMPANY, DELETE_COMPANY, EDIT_COMPANY, GET_COMPANIES } from "./constants";

export function fetchCompanies() {
    return dispatch => {
        fetch(`/companies`)
            .then(resp => resp.json())
            .then(data => dispatch({ type: GET_COMPANIES, payload: data }))
    }
}

export function addCompany(company) {
    return dispatch => {
        fetch(`/companies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(company)
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: ADD_COMPANY, payload: data }))
    }
}

export function editCompany(company) {
    return dispatch => {
        fetch(`/companies/${company.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ ...company })
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: EDIT_COMPANY, payload: data }))
    }
}

export function removeCompany(company) {
    return dispatch => {
        fetch(`/companies/${company.id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: DELETE_COMPANY, payload: data }))
    }
}