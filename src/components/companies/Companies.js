import React from 'react';
import { Link } from 'react-router-dom';

const Companies = ({ companies }) => {
    return (

        <div>
            {companies.map(company => {
                return (
                    <div key={company.id}>
                        <Link to={`/companies/${company.id}`}>
                            <h2>{company.name}</h2>
                        </Link>
                        <p>{company.industry}</p>
                        <p>{company.description}</p>
                        <p>{company.website}</p>
                        <p>{company.image}</p>
                        <p>{company.video}</p>
                        <p>{company.need_category}</p>
                        <p>{company.need}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default Companies;