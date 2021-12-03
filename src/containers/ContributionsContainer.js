import React, { Component } from 'react';
import ContributionForm from '../components/companies/contributions/ContributionForm';
import Contributions from '../components/companies/contributions/Contributions';
import { connect } from 'react-redux';

class ContributionsContainer extends Component {
    render() {
        return (
            <div>
                <ContributionForm company={company} />
                <Contributions companyId={company.id} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contributions: state.contributions
    }
}

export default connect(mapStateToProps)(ContributionsContainer);