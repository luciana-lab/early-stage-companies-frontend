import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../actions/companiesActions';
import Companies from '../components/companies/Companies';
import CompanyForm from '../components/companies/CompanyForm';

class CompaniesContainer extends Component {

    // it calls the fetchCats() action creator that comes from mapDispatchToProps() function
    componentDidMount() {
        this.props.fetchCompanies()
    }

    render() {
        return (
            <div>
                <CompanyForm />
                <Companies companies={this.props.companies} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        companies: state.companies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCompanies: () => dispatch(fetchCompanies())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer);
