import { ADD_COMPANY, GET_COMPANIES } from "./constants";

export function fetchCompanies() {
    return dispatch => {
        fetch("/companies")
            .then(resp => resp.json())
            .then(data => dispatch({ type: GET_COMPANIES, payload: data }))
    }
}

export function addCompany(company) {
    return dispatch => {
        fetch("/companies", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origins": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(company)
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: ADD_COMPANY, payload: data }))
    }
}