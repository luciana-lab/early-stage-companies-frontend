import React from "react";
import { Switch, Route } from 'react-router-dom';
import Companies from '../components/companies/Companies';
import Registration from "./users/Registration";
import CompanyForm from "./companies/CompanyForm";
import Company from "./companies/Company";
import CompanyEditForm from "./companies/CompanyEditForm";
import User from "./users/User";

function Pages({ companies }) {
    // console.log(companies)
    return (
        <div>
            <h1>Hello</h1>
            <Switch>
                <Route path="/signup" component={routerProps => <Registration routerProps={routerProps} />} />
                <Route exact path="/companies" component={routerProps => <Companies companies={companies} routerInfo={routerProps} />} />
                <Route exact path="/companies/new" component={routerProps => <CompanyForm routerProps={routerProps} />} />
                <Route exact path="/companies/:id" component={routerProps => <Company routerProps={routerProps} companies={companies} />} />
                <Route exact path="/companies/:id/edit" component={routerProps => <CompanyEditForm routerProps={routerProps} companies={companies} />} />
                <Route extact path="/users/:id" component={routerProps => <User routerProps={routerProps} companies={companies} />} />
            </Switch>
        </div>
    )
}

export default Pages;

// To nested routes: /users/:userId/companies/:id