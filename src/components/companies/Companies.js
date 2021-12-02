import React, { Component } from 'react';
import Company from './Company';

class Companies extends Component {
    render() {
        const { companies } = this.props

        return (
            <div>
                {companies.map(company => <Company key={company.id} company={company} />)}
            </div>
        )
    }
}

export default Companies;