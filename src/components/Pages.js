import React from "react";
import { Switch, Route } from 'react-router-dom';
import Companies from '../components/companies/Companies';
import Login from "./users/Login";
import CompanyForm from "./companies/CompanyForm";
import Company from "./companies/Company";
import CompanyEditForm from "./companies/CompanyEditForm";
import User from "./users/User";
import Signup from "./users/Signup";
import Home from './Home';
import Error from "./Error";

function Pages({ companies, userLoggedIn }) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={routerProps => <Home routerProps={routerProps} />} />
                <Route exact path="/signin" component={routerProps => <Login routerProps={routerProps} />} />
                <Route exact path="/signup" component={routerProps => <Signup routerProps={routerProps} />} />
                <Route exact path="/companies" component={routerProps => <Companies companies={companies} routerInfo={routerProps} />} />
                <Route exact path="/companies/new" component={routerProps => <CompanyForm routerProps={routerProps} userLoggedIn={userLoggedIn} />} />
                <Route exact path="/companies/:id" component={routerProps => {
                    const company = companies.find(company => company.id === parseInt(routerProps.match.params.id))
                    return (!!company) ?
                        (<Company routerProps={routerProps} companies={companies} userLoggedIn={userLoggedIn} />)
                        : (<Error routerProps={routerProps} />)
                }} />
                <Route exact path="/companies/:id/edit" component={routerProps => <CompanyEditForm routerProps={routerProps} companies={companies} userLoggedIn={userLoggedIn} />} />
                <Route exact path="/users/:id" component={routerProps => <User routerProps={routerProps} companies={companies} />} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}

export default Pages;