import React, { Component } from 'react';

class Company extends Component {

    // state = {
    //     companyOne: {}
    // }

    // componentDidMount() {
    //     fetch(`/companies/${this.props.routerInfo.match.params.id}`)
    //         .then(resp => resp.json())
    //         .then(company => this.setState({ company }))
    // }

    // fetch based on id in params
    //change state to render that company

    render() {
        // console.log("props",this.props)
        const { company } = this.props;
        // debugger
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