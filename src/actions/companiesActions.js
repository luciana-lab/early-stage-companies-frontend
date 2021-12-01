import { GET_COMPANIES } from "./constants";

export function fetchCompanies() {
    return dispatch => {
        fetch("http://localhost:3001/companies")
            .then(resp => resp.json())
            .then(data => dispatch({ type: GET_COMPANIES, payload: data }))
    }
}