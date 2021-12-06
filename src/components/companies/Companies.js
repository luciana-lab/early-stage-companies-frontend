import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Companies.css';

const Companies = ({ companies }) => {

    return (
        <div>
            <div className="row">
                {companies.map((company, i) => {
                    if (i === companies.length - 1) {
                        return (
                            <div className="company-column-right" key={company.id}>
                                <Link to={`/companies/${company.id}`} style={{ textDecoration: 'none' }}>
                                    <h3>{company.name}</h3>
                                    <img src={company.image} alt="company image" style={{ height: 400 + "px" }} />
                                    <p>Industry: {company.industry}</p>
                                    <p>Help Category: {company.need_category}</p>
                                </Link>
                            </div>
                        )
                    }
                })}
                {companies.map((company, i) => {
                    if (i !== companies.length - 1) {
                        return (
                            <div className="company-column-left" key={company.id}>
                                <Link to={`/companies/${company.id}`} style={{ textDecoration: 'none' }}>
                                    <div className="individual-company-card">
                                        <p><b>{company.name}</b></p>
                                        <div id="companies-info">
                                            <img src={company.image} alt="company image" style={{ height: 100 + "px" }} />
                                            <p>Industry: {company.industry}</p>
                                            <p>Help Category: {company.need_category}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
        </div >

    )

}

export default Companies;