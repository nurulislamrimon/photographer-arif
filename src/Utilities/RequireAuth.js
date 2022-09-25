import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../firebase.init';

const RequireAuth = ({ children, ...rest }) => {
    const [user, loading] = useAuthState(auth);

    if (!user?.uid) {
        return <Navigate to='/login' replace={true} />
    } else { return children }
};

export default RequireAuth;