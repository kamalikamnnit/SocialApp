import React, { createContext, useState } from 'react';
import { useContext } from 'react';
const AuthenticationContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [auth, setAuth] = useState(false);  
  return (
    <AuthenticationContext.Provider value={{  auth, setAuth }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext=()=>{
  return useContext(AuthenticationContext)
}

// AuthContext.js - Create an authentication context
// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = () => setIsLoggedIn(true);
//   const logout = () => setIsLoggedIn(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
