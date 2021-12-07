import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCompany } from '../../actions/companiesActions';
import ContributionForm from './contributions/ContributionForm';
import { Link } from 'react-router-dom';
import '../../style/Company.css';
class Company extends Component {
    constructor(props) {
        super(props)
        this.company = this.props.companies.find(company => company.id === parseInt(this.props.routerProps.match.params.id))

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
                                <h2>{this.company && this.company.name}</h2>
                            </Link>
                            <div className="video-responsive">
                                <iframe src={`${this.company && this.company.video}`} title="video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <p>Industry: <b>{this.company && this.company.industry}</b></p>
                            <p style={{ whiteSpace: "pre-wrap" }}>{this.company && this.company.description}</p>
                            <button id="company-edit-btn" onClick={this.handleEditCompany}>Edit Company</button>
                            <button id="company-delete-btn" onClick={this.handleDeleteCompany}>Delete Company</button>
                        </div>
                    </div>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h4>Drip this project</h4>
                        <p>Help in {this.company && this.company.need_category}</p>
                        <p>{this.company && this.company.need}</p>
                        <div id="contributions-length">
                            <h2>{this.company && this.company.contributions.length} </h2>
                            {this.company && this.company.contributions.length <= 1 ? <p>contribution</p> : <p>contributions</p>}
                        </div>
                        <div id="contributions-btn">
                            <button onClick={this.handleContributionClick}>Give me a shot &#9749;</button>
                        </div>
                        {this.contributionForm()}
                    </div>
                    <div className="card">
                        <div className="userimg" src={this.company && this.company.user.image}></div>
                        <img src={`${this.company && this.company.user.image}`} alt="user profile" style={{ height: 100 + "px" }} />
                        <Link to={`/users/${this.company && this.company.user.id}`}>
                            <h4>{this.company && this.company.user.first_name}</h4>
                        </Link>
                        <p>{this.company && this.company.user.about}</p>
                    </div>
                    <div className="card">
                        <h4>Contributions</h4>
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