import React from 'react';

const Error = ({ routerProps }) => {
    const redirect = () => {
        setTimeout(() => {
            routerProps.history.push("/companies")
        }, 5000)
    }
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Oops! This page doesn't exist.</h3>
            {redirect()}
        </div>
    )
}

export default Error;