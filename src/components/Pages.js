import React from "react";
import { Switch, Route } from 'react-router-dom';
import Companies from '../components/companies/Companies';
import Registration from "./users/Registration";
import CompanyForm from "./companies/CompanyForm";
import Company from "./companies/Company";
import CompanyEditForm from "./companies/CompanyEditForm";
import User from "./users/User";

function Pages({ companies, userLoggedIn }) {
    // console.log(loggedInStatus)
    return (
        <div>
            <Switch>
                <Route exact path="/signup" component={routerProps => <Registration routerProps={routerProps} />} />
                <Route exact path="/companies" component={routerProps => <Companies companies={companies} routerInfo={routerProps} />} />
                <Route exact path="/companies/new" component={routerProps => <CompanyForm routerProps={routerProps} userLoggedIn={userLoggedIn} />} />
                <Route exact path="/companies/:id" component={routerProps => <Company routerProps={routerProps} companies={companies} userLoggedIn={userLoggedIn} />} />
                <Route exact path="/companies/:id/edit" component={routerProps => <CompanyEditForm routerProps={routerProps} companies={companies} userLoggedIn={userLoggedIn} />} userLoggedIn={userLoggedIn} />
                <Route exact path="/users/:id" component={routerProps => <User routerProps={routerProps} companies={companies} />} />
            </Switch>
        </div>
    )
}

export default Pages;

// To nested routes: /users/:userId/companies/:id