import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(() => {
        const saved = localStorage.getItem("lightMode");
        return saved === "true";
    });

    const toggleLightMode = () => {
        const newMode = !lightMode;
        setLightMode(newMode);
        localStorage.setItem("lightMode", newMode);
    };

    useEffect(() => {
        localStorage.setItem("lightMode", lightMode);
    }, [lightMode]);

    return (
        <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
