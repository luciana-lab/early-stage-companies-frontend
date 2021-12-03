import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../actions/companiesActions';
import Companies from '../components/companies/Companies';
// import Pages from '../components/Pages';
import Company from '../components/companies/Company';

class CompaniesContainer extends Component {

    // it calls the fetchCats() action creator that comes from mapDispatchToProps() function
    componentDidMount() {
        this.props.fetchCompanies()
    }

    render() {
        // console.log(this.props.companies)
        return (
            <div>
                {/* <CompanyForm companies={this.props.companies} /> */}
                <Companies companies={this.props.companies} />
                <Company companies={this.props.companies} />
                {/* <Pages companies={this.props.companies} /> */}
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
