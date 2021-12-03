import React from 'react';
import { removeCompany } from '../../actions/companiesActions';
import { connect } from 'react-redux';

const Company = ({ companies, routerInfo, removeCompany }) => {
    const company = companies.find(c => c.id === parseInt(routerInfo.match.params.id))
    console.log(company)

    function handleEditCompany() {
        routerInfo.history.push(`/companies/${company.id}/edit`)
    }

    function handleDeleteCompany() {
        removeCompany(company.id)
        routerInfo.history.push("/companies")
    }

    return (
        <div>
            <h2>{company && company.name}</h2>
            <p>{company && company.industry}</p>
            <p>{company && company.description}</p>
            <p>{company && company.website}</p>
            <p>{company && company.image}</p>
            <p>{company && company.video}</p>
            <p>{company && company.need_category}</p>
            <p>{company && company.need}</p>
            <button onClick={handleEditCompany}>Edit Company</button>
            <button onClick={handleDeleteCompany}>Delete Company</button>
            <br />
            <p>{company && company.user.first_name}</p>
            <p>{company && company.user.last_name}</p>
            <p>{company && company.user.email}</p>
            <p>{company && company.user.about}</p>
            <p>{company && company.user.image}</p>
            <br />
            {company && company.contributions.map(contribution => {
                return (
                    <div key={contribution.id}>
                        <p>{contribution.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default connect(null, { removeCompany })(Company);