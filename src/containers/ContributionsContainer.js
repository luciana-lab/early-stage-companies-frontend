import React, { Component } from 'react';
// import ContributionForm from '../components/companies/contributions/ContributionForm';
import Contributions from '../components/companies/contributions/Contributions';
import { connect } from 'react-redux';
import { fetchContributions } from './../actions/contributionsActions';

class ContributionsContainer extends Component {
    componentDidMount() {
        this.props.fetchContributions()
    }

    render() {
        return (
            <div>
                {/* <ContributionForm companyId={this.props.company.id} /> */}
                <Contributions contributions={this.props.contributions} companyId={this.props.company.id} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contributions: state.contributions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchContributions: () => dispatch(fetchContributions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContributionsContainer);