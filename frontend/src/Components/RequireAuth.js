import React from 'react';
import { useAuthenticationContext } from '../contexts/Authcontexts';
import LoginPage from './LoginPage';

function RequireAuth({ children }) {
    
    const { auth } = useAuthenticationContext();
    return auth === true ? children : <LoginPage/> 
}

export default RequireAuth;