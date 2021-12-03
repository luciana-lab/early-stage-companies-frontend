import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../actions/companiesActions';
import Pages from '../components/Pages';

class CompaniesContainer extends Component {
    componentDidMount() {
        this.props.fetchCompanies()
    }

    render() {
        return (
            <div>
                <Pages companies={this.props.companies} />
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
