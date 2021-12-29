import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Companies.css';
import Footer from '../Footer';

class Companies extends React.Component {

    state = {
        query: "",
        filterCompanies: this.props.companies
    }

    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     const queryCompanies = this.props.companies.filter(c => c.name.toLowerCase().startsWith(this.state.query.toLowerCase()))
    //     this.setState({ filterCompanies: queryCompanies, query: "" })
    // }


    render() {
        return (
            <div>
                {/* <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.query} name="query" laceholder="search" onChange={this.handleChange} />
                        <input type="submit" value="search" />
                    </form>

                </div> */}
                <div className="companies-row">
                    <div className="companies-column-right">
                        {this.state.filterCompanies.map((company, i) => {
                            if (i === this.state.filterCompanies.length - 1) {
                                return (
                                    <div className="companies-card-right" key={company.id}>
                                        <h2>FRESH FAVORITE</h2>
                                        <hr />
                                        <div className="companies-right-card">
                                            <Link to={`/companies/${company.id}`} style={{ textDecoration: 'none' }}>
                                                <img src={company.image ? company.image : "https://corefact-marketing.s3.us-west-1.amazonaws.com/random/upload-image.png"} alt="company feature" id="companies-right-img" />
                                                <h3 id="feature-company">{company.name && company.name.toUpperCase()}</h3>
                                                <p id="feature-industry">{company.industry ? `Industry: ${company.industry}` : null}</p>
                                                <p id="feature-help-category">{company.need_category ? `Help in ${company.need_category}` : null}</p>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                            return null
                        })}
                    </div>
                    <div className="companies-column-left">
                        <div className="companies-card-left">
                            <h2>FEATURED PROJECTS</h2>
                            <hr />
                            <div className="scrolling-wrapper">
                                {this.state.filterCompanies.map((company, i) => {
                                    if (i !== this.state.filterCompanies.length - 1) {
                                        return (
                                            <div className="individual-company-card" key={company.id}>
                                                <Link to={`/companies/${company.id}`} style={{ textDecoration: 'none' }}>
                                                    <div className="companies-card-card">
                                                        <p id="p-company"><b>{company.name && company.name}</b></p>
                                                        <img src={company.image && company.image ? company.image : "https://corefact-marketing.s3.us-west-1.amazonaws.com/random/upload-image.png"} alt="company feature" id="companies-img" />
                                                        <p id="p-industry">Industry: {company.industry && company.industry}</p>
                                                        <p id="p-help-category">Help in {company.need_category && company.need_category}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                    return null
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Companies;