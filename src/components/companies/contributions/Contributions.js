import React, { Component } from 'react';

//TODO delete this component, not being used.
class Contributions extends Component {
    render() {
        const associatedContributions = this.props.contributions.filter(contribution => contribution.companyId === this.props.companyId)

        const contributionsList = associatedContributions.map(contribution => {
            return (
                <div key={contribution.id}>
                    <p>{contribution.user.first_name}</p>
                    <p>{contribution.content}</p>
                </div>
            )
        })
        // debugger
        return (
            <div>
                {contributionsList}
            </div>
        )
    }

}

export default Contributions;