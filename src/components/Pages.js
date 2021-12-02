import React from "react";
import { Switch, Route } from 'react-router-dom';
import CompaniesContainer from "../containers/CompaniesContainer";
import Registration from "./users/Registration";
import CompanyForm from "./companies/CompanyForm";

function Pages() {
    return (
        <div>
            <h1>Hello</h1>
            <Switch>
                <Route path="/signup" component={(routerProps) => <Registration routerProps={routerProps} />} />
                <Route exact path="/companies"><CompaniesContainer /></Route>
                <Route exact path="/companies/create"><CompanyForm /></Route>
            </Switch>
        </div>
    )
}

export default Pages;