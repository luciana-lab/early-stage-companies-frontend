import { combineReducers } from 'redux';

import { ADD_COMPANY, ADD_CONTRIBUTION, DELETE_COMPANY, EDIT_COMPANY, GET_COMPANIES, GET_CONTRIBUTIONS, LOGIN, LOGOUT, DELETE_CONTRIBUTION } from '../actions/constants';

const rootReducer = combineReducers({
    users: usersReducer,
    companies: companiesReducer,
    contributions: contributionsReducer
})

export default rootReducer;

function usersReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return action.payload

        case LOGOUT:
            return {}

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

        case ADD_CONTRIBUTION:
            const companyIdContribution = state.findIndex(company => company.id === action.payload.company_id)
            const theCompany = state.find(company => company.id === action.payload.company_id)
            return [...state.slice(0, companyIdContribution),
            { ...state[companyIdContribution], contributions: theCompany.contributions.concat(action.payload) },
            ...state.slice(companyIdContribution + 1)
            ]

        case DELETE_CONTRIBUTION:
            let contributionIndex;
            for (let i = 0; i < state.length; i++) {
                if (state[i].contributions.find(contribution => contribution.id === action.payload)) {
                    contributionIndex = i;
                }
            }

            const contributions = state[contributionIndex].contributions.filter(contribution => contribution.id !== action.payload)
            return [...state.slice(0, contributionIndex),
            { ...state[contributionIndex], contributions: contributions },
            ...state.slice(contributionIndex + 1)
            ]

        default:
            return state
    }
}

function contributionsReducer(state = [], action) {
    switch (action.type) {
        case GET_CONTRIBUTIONS:
            return action.payload

        // case ADD_CONTRIBUTION:
        //     return [...state, action.payload]

        default:
            return state
    }
}