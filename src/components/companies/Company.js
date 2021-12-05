import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCompany } from '../../actions/companiesActions';
import ContributionForm from './contributions/ContributionForm';
import { Link } from 'react-router-dom';

class Company extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        // console.log(this.props.routerProps.match.params.id)
        this.company = this.props.companies.find(company => company.id === parseInt(this.props.routerProps.match.params.id))
        // console.log(this.company.contributions)

        this.state = {
            contributionBtn: false
        }
    }

    handleEditCompany = () => {
        this.props.routerProps.history.push(`/companies/${this.company.id}/edit`)
    }

    handleDeleteCompany = () => {
        this.props.removeCompany(this.company.id)
        this.props.routerProps.history.push("/companies")
    }

    handleContributionClick = () => {
        this.setState({ contributionBtn: true })
    }

    contributionForm = () => {
        if (this.state.contributionBtn === true) {
            return <ContributionForm companyId={this.company.id} />
        }
    }

    render() {
        return (
            <div key={this.company && this.company.id}>
                <h3>{this.company && this.company.name}</h3>
                <p>{this.company && this.company.video}</p>
                <p>{this.company && this.company.industry}</p>
                <p>{this.company && this.company.description}</p>
                <p>{this.company && this.company.image}</p>
                <p>{this.company && this.company.website}</p>
                <p>{this.company && this.company.need_category}</p>
                <p>{this.company && this.company.need}</p>
                <br />

                <button onClick={this.handleEditCompany}>Edit Company</button>
                <button onClick={this.handleDeleteCompany}>Delete Company</button>

                {this.company && this.company.contributions.map(contribution => {
                    return (
                        <div key={contribution.id}>
                            <Link to={`/users/${contribution.user.id}`}>
                                <p>{contribution.user.first_name}</p>
                            </Link>
                            <p>{contribution.content}</p>
                        </div>
                    )
                })}
                <br />

                <button onClick={this.handleContributionClick}>Add Contribution</button>
                {this.contributionForm()}
            </div>
        )
    }
}

export default connect(null, { removeCompany })(Company);