import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanies } from '../../actions/companiesActions'

function CompanyList() {
    const companies = useSelector(state => {
        // console.log(state.companies)
        return state.companies
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCompanies())
    }, [])

    return (
        <div>
            {companies.map(company =>
                <div key={company.id}>
                    <h2>{company.name}</h2>
                    <p>{company.industry}</p>
                    <p>{company.description}</p>
                    <p>{company.website}</p>
                    <p>{company.image}</p>
                    <p>{company.video}</p>
                    <p>{company.need_category}</p>
                    <p>{company.need}</p>
                </div>
            )}
        </div>
    )
}

export default CompanyList;