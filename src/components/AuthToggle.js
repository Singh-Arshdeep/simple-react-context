import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function AuthToggle() {

    const authContext = useContext(AuthContext);
    const {toggleAuth} = authContext;

    return(
        <button onClick={toggleAuth}>Toggle Auth</button>
    );

}