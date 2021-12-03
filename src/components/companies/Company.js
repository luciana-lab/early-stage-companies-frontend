import React from 'react';
import { removeCompany } from '../../actions/companiesActions';
import { connect } from 'react-redux';

const Company = ({ companies, routerInfo, removeCompany }) => {
    // console.log(companies, routerInfo)
    let company = companies.find(c => c.id === parseInt(routerInfo.match.params.id))
    console.log(company)
    // debugger

    function handleDeleteCompany() {
        // debugger
        removeCompany(company.id)
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

// const mapDispatchToProps = dispatch => {
//     return {
//         deleteCompany: id => dispatch(removeCompany(id))
//     }
// }

export default connect(null, { removeCompany })(Company);