// ProtectedRoute.js - Higher-order component for protecting routes
import React from 'react';
import { Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Inside your component where you want to perform redirection
// Instead of <Redirect to="/path" />, use <Navigate to="/path" />

import { useAuth } from './Authcontexts';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
