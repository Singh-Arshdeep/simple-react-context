import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

export default function BookList() {
    
    const value = useContext(ThemeContext);
    const {isLightTheme, light, dark} = value;
    const theme = isLightTheme?light:dark;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;
    return(
        <div className='book-list' style={{background:theme.ui, color:theme.syntax}}>
            {isAuthenticated?
            <ul>
                <li style={{background:theme.bg}}>Starwars</li>
                <li style={{background:theme.bg}}>Harry potter</li>
                <li style={{background:theme.bg}}>Dune</li>
            </ul>:""}
        </div>
    );
}