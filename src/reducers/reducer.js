import { combineReducers } from 'redux';

import { ADD_COMPANY, ADD_CONTRIBUTION, DELETE_COMPANY, EDIT_COMPANY, GET_COMPANIES } from '../actions/constants';

const rootReducer = combineReducers({
    users: usersReducer,
    companies: companiesReducer,
    contributions: contributionsReducer
})

export default rootReducer;

function usersReducer(state = [], action) {
    switch (action.type) {

        default:
            return state
    }
}

function companiesReducer(state = [], action) {
    switch (action.type) {
        case GET_COMPANIES:
            return action.payload

        case ADD_COMPANY:
            return [...state, action.payload]

        case EDIT_COMPANY:
            const companyIndex = state.findIndex(company => company.id === action.payload.id)
            return [...state.slice(0, companyIndex), action.payload, ...state.slice(companyIndex + 1)]

        case DELETE_COMPANY:
            const companies = state.filter(company => company.id !== action.payload)
            return companies

        default:
            return state
    }
}

function contributionsReducer(state = [], action) {
    switch (action.type) {
        case ADD_CONTRIBUTION:
            return [...state, action.payload]

        default:
            return state
    }
}