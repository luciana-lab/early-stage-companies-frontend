import React, { Component } from 'react';
import { addCompany } from '../../actions/companiesActions';
import { connect } from 'react-redux';

class CompanyForm extends Component {
    state = {
        name: "",
        industry: "",
        description: "",
        image: "",
        website: "",
        video: "",
        need_category: "",
        need: "",
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchAddCompany(this.state)
        this.props.routerProps.history.push("/companies")
    }

    render() {
        console.log(this.props)
        return (
            <div>
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
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddCompany: company => dispatch(addCompany(company))
    }
}

export default connect(null, mapDispatchToProps)(CompanyForm);