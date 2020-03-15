import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
export default function AuthContextProvider(props) {

    const[isAuthenticated, setIsAuthenticated] = useState(false);

    let toggleAuth = ()=> {
        setIsAuthenticated(!isAuthenticated);
    }
    return(
        <AuthContext.Provider value={{isAuthenticated, toggleAuth:toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    );
}