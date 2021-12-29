import { BASE_URL, ADD_COMPANY, DELETE_COMPANY, EDIT_COMPANY, GET_COMPANIES } from "../constants";

export function fetchCompanies() {
    // console.log("c") // 2nd
    return dispatch => {
        fetch(`${BASE_URL}/companies`)
            .then(resp => {
                // console.log("d") // 4th
                return resp.json()
            })
            .then(data => dispatch({ type: GET_COMPANIES, payload: data }))
            .catch(error => console.log("fetch companies", error))
    }
    // console.log("e")
}

export function addCompany(company) {
    return dispatch => {
        fetch(`${BASE_URL}/companies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(company)
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: ADD_COMPANY, payload: data }))
            .catch(error => console.log("add company", error))
    }
}

export function editCompany(company) {
    return dispatch => {
        fetch(`${BASE_URL}/companies/${company.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ ...company })
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: EDIT_COMPANY, payload: data }))
            .catch(error => console.log("edit company", error))
    }
}

export function removeCompany(company) {
    return dispatch => {
        fetch(`${BASE_URL}/companies/${company.id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: DELETE_COMPANY, payload: data }))
            .catch(error => console.log("delete company", error))
    }
}