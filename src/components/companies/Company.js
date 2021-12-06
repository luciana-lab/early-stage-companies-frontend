import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCompany } from '../../actions/companiesActions';
import ContributionForm from './contributions/ContributionForm';
import { Link } from 'react-router-dom';
import '../../style/Company.css';

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
            <div className="row">
                <div className="leftcolumn">
                    <div className="card">
                        <div key={this.company && this.company.id}>
                            <Link to={{ pathname: `${this.company && this.company.website}` }} target="_blank">
                                <h3>{this.company && this.company.name}</h3>
                            </Link>
                            <video width="400" controls>
                                <source src={`${this.company && this.company.video}`} />
                            </video>
                            <p>{this.company && this.company.industry}</p>
                            <p>{this.company && this.company.description}</p>
                            {/* <img src={`${this.company && this.company.image}`} alt="company image" /> */}
                            <button onClick={this.handleEditCompany}>Edit Company</button>
                            <button onClick={this.handleDeleteCompany}>Delete Company</button>
                        </div>
                    </div>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <p>{this.company && this.company.need_category}</p>
                        <p>{this.company && this.company.need}</p>
                        <p>{this.company && this.company.contributions.length}</p>
                        <button onClick={this.handleContributionClick}>Add Contribution</button>
                        {this.contributionForm()}
                    </div>
                    <div className="card">
                        <div className="userimg" src={this.company && this.company.user.image}></div>
                        <img src={`${this.company && this.company.user.image}`} alt="user image" style={{ height: 100 + "px" }} />
                        <h4>{this.company && this.company.user.first_name}</h4>
                        <p>{this.company && this.company.user.about}</p>
                    </div>
                    <div className="card">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { removeCompany })(Company);