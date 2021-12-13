import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContribution } from '../../redux/actions/contributionsActions';
import '../../style/ContributionForm.css';

class ContributionForm extends Component {
    state = {
        content: "",
    }

    handleChange = e => {
        this.setState({ content: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchAddContribution({ ...this.state, company_id: this.props.companyId })
        this.setState({ content: '' })
    }

    render() {
        return (
            <div className="contribution-form">
                <form onSubmit={this.handleSubmit}>
                    <textarea name="content" id="contribution-form-textarea" value={this.state.content} onChange={this.handleChange} />
                    <input type="submit" id="contribution-form-btn" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddContribution: contribution => dispatch(addContribution(contribution))
    }
}

export default connect(null, mapDispatchToProps)(ContributionForm);