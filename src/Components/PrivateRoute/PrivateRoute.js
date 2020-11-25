import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { adminContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInAdmin] = useContext(adminContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
            loggedInAdmin.isLoggedin ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/adminlogin",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;