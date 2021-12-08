import React from "react";
import '../../style/User.css';

const User = ({ companies, routerProps }) => {
    const filter = parseInt(routerProps.match.params.id)
    let userFound

    companies.filter(company => {
        return company.contributions.filter(contribution => {
            if (contribution.user.id === filter) {
                // debugger
                return userFound = contribution.user
            }
            return null;
        })
    })

    companies.filter(company => {
        if (company.user.id === filter) {
            return userFound = company.user
        }
        return null;
    })

    return (
        <div className="user-profile-container">
            <img src={userFound && userFound.image ? userFound.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="user profile avatar" className="user-profile-avatar" />
            <div className="user-profile-name">
                <h3>{userFound && userFound.first_name}</h3>
                <h3>{userFound && userFound.last_name}</h3>
            </div>
            <hr />
            <p id="user-profile-email">{userFound && userFound.email}</p>
            <p>{userFound && userFound.about}</p>
        </div>
    )
}

export default User;