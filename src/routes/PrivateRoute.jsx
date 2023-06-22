import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;



/*
------------------------
__________________Steps:

   1. check user is logged in or not 
   2. if user is logged in , then allow them to visit the route
   3. Else redirect the user to the login page
   4. set up the private router
   5. handle loading
*/