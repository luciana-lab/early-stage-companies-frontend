import React, { Component } from 'react';

// const Company = (props) => {
//     console.log(props.company)
//     // let oneCompany = company.find(c => c.id === parseInt(routerInfo.match.params.id))

//     return (
//         <div>
//             {/* <h2>{oneCompany && oneCompany.name}</h2> */}
//         </div>
//     )
// }

class Company extends Component {

    state = {
        company: {}
    }

    componentDidMount() {
        fetch(`/companies/${this.props.routerInfo.match.params.id}`)
            .then(resp => resp.json())
            .then(company => this.setState({ company }))
    }

    render() {
        // console.log(this.props.routerInfo.match.params.id)
        // console.log(this.state.company)

        const company = this.state.company;
        // let companyFiltered = company.find(company => company.id === parseInt(company.routerInfo.match.params.id))

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