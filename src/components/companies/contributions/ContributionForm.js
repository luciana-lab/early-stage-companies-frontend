import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContribution } from '../../../actions/contributionsActions';

class ContributionForm extends Component {
    state = {
        content: "",
        // companyId: this.props.company.id
    }

    handleChange = e => {
        this.setState({ content: e.target.value })
    }

    handleSubmit = e => {
        // debugger
        e.preventDefault()
        this.props.dispatchAddContribution(this.state)
        // this.props.dispatchAddContribution({ ...this.state, companyId: this.props.company.id })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="contribution-content-textarea">Contribuition</label>
                    <textarea name="content" id="contribution-content-textarea" value={this.state.content} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
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