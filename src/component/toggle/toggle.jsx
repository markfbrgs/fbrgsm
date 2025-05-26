import React, { useContext } from "react";
import { ThemeContext } from "../../context/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './toggle.scss'

const Toggle = () => {
    const { lightMode, toggleLightMode } = useContext(ThemeContext);

    return (
        <button className="toggle" onClick={toggleLightMode}>
            <FontAwesomeIcon icon={lightMode ? faMoon : faSun} className="icon" />
        </button>
    );
}

export default Toggle;