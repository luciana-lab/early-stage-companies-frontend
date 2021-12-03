import React, { Component } from 'react';
import { removeCompany } from '../../actions/companiesActions';
import { connect } from 'react-redux';
// import ContributionsContainer from '../../containers/ContributionsContainer';
import ContributionForm from './contributions/ContributionForm';
// import Contributions from './contributions/Contributions';

class Company extends Component {
    constructor(props) {
        super(props)
        this.company = props.companies.find(c => c.id === parseInt(this.props.routerProps.match.params.id))

        this.state = {
            contributionClicked: false
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
        this.setState({ contributionClicked: true })
    }

    // displayContributions = () => {
    //     return <Contributions company={this.company} />
    // }

    displayContributionForm = () => {
        if (this.state.contributionClicked === true) {
            return <ContributionForm company={this.company} />
        }
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
                <h3>Contributions</h3>
                {this.company && this.company.contributions.map(contribution => {
                    return (
                        <div key={contribution.id}>
                            <p>{contribution.user}</p>
                            <p>{contribution.content}</p>
                        </div>
                    )
                })}
                {/* <Contributions company={this.company && this.company} /> */}
                {/* {this.displayContributions()} */}
                <button onClick={this.handleAddContribution}>Add a contribution</button>
                {this.displayContributionForm()}
                {/* <ContributionsContainer company={this.company} /> */}
            </div>
        )
    }


}

export default connect(null, { removeCompany })(Company);