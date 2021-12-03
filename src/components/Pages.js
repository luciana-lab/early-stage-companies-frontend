import React from "react";
import { Switch, Route } from 'react-router-dom';
import CompaniesContainer from "../containers/CompaniesContainer";
import Registration from "./users/Registration";
import CompanyForm from "./companies/CompanyForm";
import Company from "./companies/Company";

function Pages() {
    return (
        <div>
            <h1>Hello</h1>
            <Switch>
                <Route path="/signup" component={routerProps => <Registration routerProps={routerProps} />} />
                <Route exact path="/companies"><CompaniesContainer /></Route>
                <Route exact path="/companies/new" component={routerProps => <CompanyForm routerProps={routerProps} />} />
                <Route exact path="/companies/:id" component={routerProps => <Company routerInfo={routerProps} />} />
                {/* <Route exact path="/companies/:id"><Company /></Route> */}
            </Switch>
        </div>
    )
}

export default Pages;

// To nested routes: /users/:userId/companies/:id