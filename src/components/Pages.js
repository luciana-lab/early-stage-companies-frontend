import React from "react";
import { Switch, Route } from 'react-router-dom';
import CompanyList from './companies/CompanyList';
import Signup from "./users/Signup";

function Pages() {
    return (
        <div>
            <h1>Hello</h1>
            <Switch>
                <Route path="/signup"><Signup /></Route>
                <Route path="/companies"><CompanyList /></Route>
            </Switch>
        </div>
    )
}

export default Pages;