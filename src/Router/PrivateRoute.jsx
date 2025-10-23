import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = use(AuthContext)
    const location = useLocation()

    if(user){
        return children;
    }

    return (
        <div>
            <Navigate state={location?.pathname} to={`/signin`}></Navigate>
        </div>
    );
};

export default PrivateRoute;