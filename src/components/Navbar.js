import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

export default function Navbar() {
    const themeContext = useContext(ThemeContext);
    const {isLightTheme, light, dark} = themeContext;
    const theme = isLightTheme?light:dark;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;
    return(
        <div>
            {isAuthenticated?
            <nav style={{background:theme.ui, color:theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>:"Not Authenticated"}
        </div>
    );
}