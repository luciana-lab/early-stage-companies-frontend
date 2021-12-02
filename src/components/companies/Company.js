import React, { Component } from 'react';

class Company extends Component {
    render() {
        const { company } = this.props;

        return (
            <div>
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
    }
}

export default Company;