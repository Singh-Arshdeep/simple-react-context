import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    const[isLightTheme, setIsLightTheme] = useState(true);
    const[light, setLight] = useState({
        syntax:'#555',
        ui:'#ddd',
        bg: '#eee'
    });
    const[dark, setDark] = useState({
        syntax:'#ddd',
        ui:'#333',
        bg: '#555'
    });
    let toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }
    return(
        <ThemeContext.Provider value={{isLightTheme, light, dark, toggleTheme:toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}