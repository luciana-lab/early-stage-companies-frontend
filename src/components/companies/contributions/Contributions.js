import React, { Component } from 'react';

class Contributions extends Component {
    render() {
        const associatedContributions = company.filter()
        // debugger
        return (
            <div>
                {this.props.company.contributions.map(contribution => {
                    return (
                        <div key={contribution.id}>
                            {/* <p>{contribution.user}</p> */}
                            <p>{contribution.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    // const renderContributions = () => {
    //     console.log(company)
    // }

}

export default Contributions;