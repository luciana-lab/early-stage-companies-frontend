import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCompany } from '../../actions/companiesActions';
import ContributionForm from './contributions/ContributionForm';
import { Link, Redirect } from 'react-router-dom';
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
            if (this.props.userLoggedIn.logged_in === false || this.props.userLoggedIn.logged_in === undefined) {
                return <Redirect to="/signin" />
            } else {
                return <ContributionForm companyId={this.company.id} />
            }
        }
    }

    displayButtons = () => {
        if (this.props.userLoggedIn.logged_in === true && this.props.userLoggedIn.user.id === (this.company && this.company.user.id)) {
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
                <div className="company-row">
                    <div className="company-leftcolumn">
                        <div className="card">
                            <div key={this.company && this.company.id}>
                                <Link to={{ pathname: `${this.company && this.company.website}` }} target="_blank">
                                    <h2>{this.company && this.company.name.toUpperCase()}</h2>
                                </Link>
                                <hr />
                                <div className="video-responsive">
                                    <iframe src={`${this.company && this.company.video}`} title="video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <p id="company-industry">Industry: <b>{this.company && this.company.industry}</b></p>
                                <p id="company-description" style={{ whiteSpace: "pre-wrap" }}>{this.company && this.company.description}</p>

                                {this.displayButtons()}

                            </div>
                        </div>
                    </div>
                    <div className="company-rightcolumn">
                        <div className="card">
                            <h4>DRIP PROJECT</h4>
                            <hr />
                            <p id="company-help-category">Help in {this.company && this.company.need_category}</p>
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
                        <div className="card-about-me">
                            {/* <div className="userimg" src={this.company && this.company.user.image}></div> */}
                            <Link to={`/users/${this.company && this.company.user.id}`}>
                                <img src={`${(this.company && this.company.user.image) ? this.company.user.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}`} alt="user profile" className="company-user-avatar" />
                                <div id="company-user-owner-name">
                                    <h4>{this.company && this.company.user.first_name.toUpperCase()}</h4>
                                    <h4>{this.company && this.company.user.last_name.toUpperCase()}</h4>
                                </div>
                            </Link>
                            <hr />
                            <p>{this.company && this.company.user.about}</p>
                        </div>
                        <div className="card">
                            <h4>CONTRIBUTORS</h4>
                            <hr />
                            {this.company && this.company.contributions.map(contribution => {
                                return (
                                    <div key={contribution.id}>
                                        <Link to={`/users/${contribution.user.id}`}>
                                            <p>{contribution.user.first_name}</p>
                                        </Link>
                                        {(((this.props.userLoggedIn.logged_in === true) && (this.props.userLoggedIn.user.id === (this.company && this.company.user.id))) ||
                                            ((this.props.userLoggedIn.logged_in === true) && (this.props.userLoggedIn.user.id === contribution.user.id))) ?
                                            <p>{contribution.content}</p>
                                            : null}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { removeCompany })(Company);