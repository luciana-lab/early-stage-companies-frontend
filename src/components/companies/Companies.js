import React, { Component } from 'react';
// import Company from './Company';

class Companies extends Component {
    render() {
        const { companies } = this.props
        // debugger

        return (

            <div>
                {companies.map(company => {
                    {/* <Company key={company.id} company={company} /> */ }
                    return (
                        <div key={company.id}>
                            <h2>{company.name}</h2>
                            <p>{company.industry}</p>
                            <p>{company.description}</p>
                            <p>{company.website}</p>
                            <p>{company.image}</p>
                            <p>{company.video}</p>
                            <p>{company.need_category}</p>
                            <p>{company.need}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Companies;