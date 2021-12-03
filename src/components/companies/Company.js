import React from 'react';

const Company = ({ companies, routerInfo }) => {
    // console.log(companies, routerInfo)
    let company = companies.find(c => c.id === parseInt(routerInfo.match.params.id))
    console.log(company)
    // debugger

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

export default Company;