import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Companies.css';

const Companies = ({ companies }) => {
    return (
        <div>
            <div className="companies-row">
                {companies.map((company, i) => {
                    if (i === companies.length - 1) {
                        return (
                            <div className="companies-column-right" key={company.id}>
                                <div className="companies-card-right">
                                    <h4>FRESH FAVORITE</h4>
                                    <hr />
                                    <Link to={`/companies/${company.id}`} style={{ textDecoration: 'none' }}>
                                        <img src={company.image} alt="company feature" style={{ height: 400 + "px" }} />
                                        <h3 id="feature-company">{company.name}</h3>
                                        <p id="feature-industry">Industry: {company.industry}</p>
                                        <p id="feature-help-category">Help in {company.need_category}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                })}
                <div className="companies-column-left">
                    <div className="companies-card-left">
                        <h4>FEATURED PROJECTS</h4>
                        <hr />
                        <div className="scrolling-wrapper">
                            {companies.map((company, i) => {
                                if (i !== companies.length - 1) {
                                    return (
                                        <div className="individual-company-card" key={company.id}>
                                            <Link to={`/companies/${company.id}`} style={{ textDecoration: 'none' }}>
                                                <p id="p-company"><b>{company.name}</b></p>
                                                <img src={company.image ? company.image : "https://corefact-marketing.s3.us-west-1.amazonaws.com/random/upload-image.png"} alt="company feature" style={{ height: 100 + "px" }} />
                                                <p id="p-industry">Industry: {company.industry}</p>
                                                <p id="p-help-category">Help in {company.need_category}</p>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Companies;