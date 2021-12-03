import React, { Component } from 'react';
import { removeCompany } from '../../actions/companiesActions';
import { connect } from 'react-redux';
// import { render } from '@testing-library/react';

class Company extends Component {
    constructor(props) {
        super(props)

        this.company = props.companies.find(c => c.id === parseInt(this.props.routerProps.match.params.id))
        this.state = {
            contribution: ""
        }
    }

    handleEditCompany = () => {
        this.props.routerProps.history.push(`/companies/${this.company.id}/edit`)
    }

    handleDeleteCompany = () => {
        removeCompany(this.company.id)
        this.props.routerProps.history.push("/companies")
    }

    handleAddContribution = () => {

    }

    render() {
        return (
            <div key={this.company && this.company.id}>
                <h2>{this.company && this.company.name}</h2>
                <p>{this.company && this.company.industry}</p>
                <p>{this.company && this.company.description}</p>
                <p>{this.company && this.company.website}</p>
                <p>{this.company && this.company.image}</p>
                <p>{this.company && this.company.video}</p>
                <p>{this.company && this.company.need_category}</p>
                <p>{this.company && this.company.need}</p>
                <button onClick={this.handleEditCompany}>Edit Company</button>
                <button onClick={this.handleDeleteCompany}>Delete Company</button>
                <br />
                <p>{this.company && this.company.user.first_name}</p>
                <p>{this.company && this.company.user.last_name}</p>
                <p>{this.company && this.company.user.email}</p>
                <p>{this.company && this.company.user.about}</p>
                <p>{this.company && this.company.user.image}</p>
                <br />
                {this.company && this.company.contributions.map(contribution => {
                    return (
                        <div key={contribution.id}>
                            <p>{contribution.content}</p>
                        </div>
                    )
                })}
                <button onClick={this.handleAddContribution}>Add a contribution</button>
            </div>
        )
    }


}

export default connect(null, { removeCompany })(Company);