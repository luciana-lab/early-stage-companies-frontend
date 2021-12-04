import React from "react";

const User = ({ companies, routerProps }) => {
    const filter = parseInt(routerProps.match.params.id)
    let userFound

    companies.filter(company => {
        return company.contributions.find(contribution => {
            if (contribution.user.id === filter) {
                return userFound = contribution.user
            }
        })
    })

    companies.filter(company => {
        if (company.user.id === filter) {
            return userFound = company.user
        }
    })

    return (
        <div>
            <p>{userFound && userFound.first_name}</p>
            <p>{userFound && userFound.last_name}</p>
            <p>{userFound && userFound.image}</p>
            <p>{userFound && userFound.email}</p>
            <p>{userFound && userFound.about}</p>
        </div>
    )
}

export default User;