import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Companies.css';

const Companies = ({ companies }) => {
    return (
        <div>
            <div className="companies-row">
                <div className="companies-column-right">
                    {companies.map((company, i) => {
                        if (i === companies.length - 1) {
                            return (

                                <div className="companies-card-right" key={company.id}>
                                    <h2>FRESH FAVORITE</h2>
                                    <hr />
                                    <div className="companies-right-card">
                                        <Link to={`/companies/${company.id}`} style={{ textDecoration: 'none' }}>
                                            <img src={company.image} alt="company feature" id="companies-right-img" />
                                            <h3 id="feature-company">{company.name && company.name.toUpperCase()}</h3>
                                            <p id="feature-industry">Industry: {company.industry}</p>
                                            <p id="feature-help-category">Help in {company.need_category}</p>
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
                            {companies.map((company, i) => {
                                if (i !== companies.length - 1) {
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
        </div>


    )

}

export default Companies;