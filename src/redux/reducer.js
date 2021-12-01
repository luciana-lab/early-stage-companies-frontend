import { combineReducers } from 'redux';

import { GET_COMPANIES } from '../actions/constants';

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

        default:
            return state
    }
}

function contributionsReducer(state = [], action) {
    switch (action.type) {


        default:
            return state
    }
}