import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../redux/actions/companiesActions';
import Pages from '../components/Pages';

class CompaniesContainer extends Component {
    componentDidMount() {
        // console.log("a") // 1st
        this.props.fetchCompanies()
        // console.log("b") // 3rd
    }

    render() {
        return (
            <div>
                <Pages companies={this.props.companies} userLoggedIn={this.props.userLoggedIn} />
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