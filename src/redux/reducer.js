import { combineReducers } from 'redux';

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