import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeToggle() {

    const value = useContext(ThemeContext);
    const {toggleTheme} = value;
    return(
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
}