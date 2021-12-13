import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCompany } from '../../redux/actions/companiesActions';
import { deleteContribution } from '../../redux/actions/contributionsActions';
import ContributionForm from '../contributions/ContributionForm';
import { Link, Redirect } from 'react-router-dom';
import '../../style/Company.css';
import Footer from '../Footer';

class Company extends Component {
    constructor(props) {
        super(props)
        this.company = this.props.companies.find(company => company.id === parseInt(this.props.routerProps.match.params.id))

        this.state = {
            contributionBtn: ''
        }
    }

    handleEditCompany = () => {
        this.props.routerProps.history.push(`/companies/${this.company.id}/edit`)
    }

    handleDeleteCompany = () => {
        this.props.removeCompany(this.company)
        this.props.routerProps.history.push("/companies")
    }

    handleContributionClick = () => {
        if (this.props.userLoggedIn.logged_in === true) {
            this.setState({ contributionBtn: true })
        } else {
            this.setState({ contributionBtn: false })
        }
    }

    contributionForm = () => {
        if (this.state.contributionBtn === true) {
            return <ContributionForm companyId={this.company.id} routerProps={this.props.routerProps} />
        } else if (this.state.contributionBtn === false) {
            return <Redirect to="/signin" />
        }
    }

    displayButtons = () => {
        if ((this.props.userLoggedIn.logged_in === true) && (this.props.userLoggedIn.user.id === (this.company && this.company.user.id))) {
            return (
                <div>
                    <button id="company-edit-btn" onClick={this.handleEditCompany}>Edit Company</button>
                    <button id="company-delete-btn" onClick={this.handleDeleteCompany}>Delete Company</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="company-row" key={this.company && this.company.id}>
                    <div className="company-leftcolumn">
                        <div className="left-card">
                            <div>
                                <Link to={{ pathname: `${this.company && this.company.website}` }} target="_blank">
                                    <h2 id="company-name-h2">{this.company && this.company.name}</h2>
                                </Link>
                                <hr />
                                <div className="company-video-responsive">
                                    <iframe src={`${this.company && this.company.video}`} title="video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <p id="company-industry">Industry: <b>{this.company && this.company.industry}</b></p>
                                <p id="company-description" style={{ whiteSpace: "pre-wrap" }}>{this.company && this.company.description}</p>
                                {this.displayButtons()}

                            </div>
                        </div>
                    </div>
                    <div className="company-rightcolumn">
                        <div className="right-card-drip">
                            <h4 id="company-drip-h4">DRIP PROJECT</h4>
                            <hr />
                            <p id="company-help-category">Help in {this.company && this.company.need_category}</p>
                            <p>{this.company && this.company.need}</p>
                            <div id="contributions-length">
                                <h2 id="contributions-number-h2">{this.company && this.company.contributions.length} </h2>
                                {this.company && this.company.contributions.length <= 1 ? <p id="contributions-number-p1">contribution</p> : <p id="contributions-number-p2">contributions</p>}
                            </div>
                            <div id="contributions-btn">
                                <button onClick={this.handleContributionClick} id="add-contribution-btn">Give me a shot &#9749;</button>
                            </div>
                            {this.contributionForm()}
                        </div>
                        <div className="right-card-about-me">
                            <Link to={`/users/${this.company && this.company.user.id}`}>
                                <img src={`${(this.company && this.company.user.image) ? this.company.user.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}`} alt="user profile" className="company-user-avatar" />
                                <div id="company-user-owner-name">
                                    <h4 id="company-user-owner-first-name">{this.company && this.company.user.first_name}</h4>
                                    <h4 id="company-user-owner-last-name">{this.company && this.company.user.last_name}</h4>
                                </div>
                            </Link>
                            <hr />
                            <p>{this.company && this.company.user.about}</p>
                        </div>
                        <div className="right-card-contributions">
                            <h4>CONTRIBUTORS</h4>
                            <hr />
                            {this.company && this.company.contributions.map(contribution => {
                                return (
                                    <div key={contribution.id}>
                                        {(((this.props.userLoggedIn.logged_in === true) && (this.props.userLoggedIn.user.id === (this.company && this.company.user.id))) ||
                                            ((this.props.userLoggedIn.logged_in === true) && (this.props.userLoggedIn.user.id === contribution.user.id))) ?
                                            <div className="companies-contributions-content">
                                                <Link to={`/users/${contribution.user.id}`}>
                                                    <p id="companies-contribution-name-p">{contribution.user.first_name}</p>
                                                </Link>
                                                <button onClick={() => this.props.deleteContribution(contribution)} id="contribution-delete-btn">&times;</button>
                                                <p id="contribution-content-p">{contribution.content}</p>
                                            </div>
                                            : null}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null, { removeCompany, deleteContribution })(Company);