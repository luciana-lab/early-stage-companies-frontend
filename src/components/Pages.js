import React from "react";
import { Switch, Route } from 'react-router-dom';
import CompanyList from './companies/CompanyList';
import Registration from "./users/Registration";

function Pages() {
    return (
        <div>
            <h1>Hello</h1>
            <Switch>
                <Route path="/signup" component={(routerProps) => <Registration routerProps={routerProps} />} />
                <Route path="/companies"><CompanyList /></Route>
            </Switch>
        </div>
    )
}

export default Pages;