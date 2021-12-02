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
        location: "",
        need_category: "",
        need: "",
        userId: "" // How can to pass the user id
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        this.props.dispatchAddCompany(this.state)
        e.preventDefault()

        this.setState({
            name: "",
            industry: "",
            description: "",
            image: "",
            website: "",
            video: "",
            location: "",
            need_category: "",
            need: "",
            userId: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="company-name-input">Company Name</label>
                    <input type="text" name="name" id="company-name-input" value={this.state.name} onChange={this.handleChange} />
                    <br />

                    <label htmlFor="company-industry-select">Select Industry</label>
                    <select name="industry" id="company-industry-select" value={this.state.industry} onChange={this.handleChange}>
                        <option value="agriculture">Agriculture</option>
                        <option value="arts">Arts</option>
                        <option value="automotive">Automotive</option>
                        <option value="beauty">Beauty</option>
                        <option value="construction">Construction</option>
                        <option value="education">Education</option>
                        <option value="energy">Energy</option>
                        <option value="financial services">Finance</option>
                        <option value="fitness">Fitness</option>
                        <option value="food & beverage">Food & Beverage</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="healthcare">Legal</option>
                        <option value="non-profit/social">Non-Profit/Social</option>
                        <option value="supply chain">Supply Chain</option>
                        <option value="technology">Technology</option>
                        <option value="tourism">Tourism</option>
                        <option value="wellness">Wellness</option>
                        <option value="other">Other</option>
                    </select>
                    <br />

                    <label htmlFor="company-description-text">Description</label>
                    <textarea name="description" id="company-description-text" value={this.state.description} onChange={this.handleChange} />
                    <br />

                    <label htmlFor="company-image-input">Image</label>
                    <input type="text" name="image" id="company-image-input" value={this.state.image} onChange={this.handleChange} />
                    <br />

                    <label htmlFor="company-video-input">Video</label>
                    <input type="text" name="video" id="company-video-input" value={this.state.video} onChange={this.handleChange} />
                    <br />

                    <label htmlFor="company-location-select">Select Community Location</label>
                    <input list="select-location-options" name="location" id="company-location-select" value={this.state.location} onChange={this.handleChange} />
                    <datalist id="select-location-options">
                        <option value="Greater San Marcos, TX" />
                        <option value="Joplin, MO" />
                        <option value="Lakeland, FL" />
                        <option value="Sedalia, MO" />
                        <option value="Tampa, FL" />
                        <option value="Westminster, MD" />
                    </datalist>
                    <br />

                    <label htmlFor="company-need-category-select">Help Need Category</label>
                    <select name="need_category" id="company-need-category-select" value={this.state.need_category} onChange={this.handleChange}>
                        <option value="Admin">Admin</option>
                        <option value="Finance">Finance</option>
                        <option value="Networking">Networking</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Mentoring">Mentoring</option>
                        <option value="Sales">Sales</option>
                        <option value="Technology">Technology</option>
                    </select>
                    <br />

                    <label htmlFor="company-need-input">Describe Your Needs</label>
                    <input type="text" name="need" id="company-need-input" value={this.state.need} onChange={this.handleChange} />
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