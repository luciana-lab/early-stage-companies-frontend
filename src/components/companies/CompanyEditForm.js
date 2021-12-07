import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { editCompany } from '../../actions/companiesActions';

class CompanyEditForm extends Component {
    constructor(props) {
        super(props)

        this.company = props.companies.find(c => c.id === parseInt(this.props.routerProps.match.params.id))

        this.state = {
            name: this.company ? this.company.name : "",
            industry: this.company ? this.company.industry : "",
            description: this.company ? this.company.description : "",
            image: this.company ? this.company.image : "",
            website: this.company ? this.company.website : "",
            video: this.company ? this.company.video : "",
            need_category: this.company ? this.company.need_category : "",
            need: this.company ? this.company.need : ""
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchEditCompany({ ...this.state, companyId: this.props.companyId })
        this.props.routerProps.history.push(`/companies/${parseInt(this.props.routerProps.match.params.id)}`)
        this.setState({ content: "" })
    }

    render() {
        return (
            <div>
                {this.props.userLoggedIn.logged_in === false || this.props.userLoggedIn.logged_in === undefined ? <Redirect to={{ pathname: '/signup' }} /> :
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="company-name-input">Company Name</label>
                        <input type="text" name="name" id="company-name-input" value={this.state.name} onChange={this.handleChange} required />
                        <br />

                        <label htmlFor="company-website-input">Website</label>
                        <input type="text" name="website" id="company-website-input" value={this.state.website} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="company-industry-select">Industry</label>
                        <select name="industry" id="company-industry-select" value={this.state.industry} onChange={this.handleChange} required>
                            <option value="none" selecteddisabledhidden="true">Select an Option</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Arts">Arts</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Construction">Construction</option>
                            <option value="Education">Education</option>
                            <option value="Energy">Energy</option>
                            <option value="Finance">Finance</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Food & Beverage">Food & Beverage</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Legal">Legal</option>
                            <option value="Non-profit/Social">Non-Profit/Social</option>
                            <option value="Supply Chain">Supply Chain</option>
                            <option value="Technology">Technology</option>
                            <option value="Tourism">Tourism</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Other">Other</option>
                        </select>
                        <br />

                        <label htmlFor="company-description-text">Description</label>
                        <textarea name="description" id="company-description-text" value={this.state.description} onChange={this.handleChange} required />
                        <br />

                        <label htmlFor="company-image-input">Image</label>
                        <input type="text" name="image" id="company-image-input" value={this.state.image} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="company-video-input">Video</label>
                        <input type="text" name="video" id="company-video-input" value={this.state.video} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="company-need-category-select">Help Need Category</label>
                        <select name="need_category" id="company-need-category-select" value={this.state.need_category} onChange={this.handleChange} required>
                            <option value="none" selecteddisabledhidden="true">Select an Option</option>
                            <option value="Admin">Admin</option>
                            <option value="Finance">Finance</option>
                            <option value="Networking">Networking</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Mentoring">Mentoring</option>
                            <option value="Sales">Sales</option>
                            <option value="Technology">Technology</option>
                        </select>
                        <br />

                        <label htmlFor="company-need-input">Describe Your Need</label>
                        <textarea name="need" id="company-need-input" value={this.state.need} onChange={this.handleChange} required />
                        <br />

                        <input type="submit" value="Submit" />
                    </form>
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchEditCompany: company => dispatch(editCompany(company))
    }
}

export default connect(null, mapDispatchToProps)(CompanyEditForm);