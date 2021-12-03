import React from 'react';
import ContributionForm from '../components/companies/contributions/ContributionForm';

const ContributionsContainer = ({ company }) => {
    return (
        <div>
            <ContributionForm company={company} />
            {/* <ContributionForm company={company} /> */}
        </div>
    )
}

export default ContributionsContainer;