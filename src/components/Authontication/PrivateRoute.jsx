import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext (AuthContext)

    const navigate = useNavigate()
    const location = useLocation ()



    if (loading) {

        return <p>loading...</p>
    }

    if (user) {

        return children
     }
     return <Navigate state={{from : location}} to = '/login' replace></Navigate>

    



   



    return (
        <div>

         
        </div>
    );
};

export default PrivateRoute;