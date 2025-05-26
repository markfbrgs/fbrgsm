import React, { useContext } from "react";
import "./loading.scss";
import { ThemeContext } from "../../context/context";

const Loading = () => {
    const { lightMode } = useContext(ThemeContext);

    return (
        <div className={`loading ${lightMode ? "light" : " "}`}>
            <div className="loading-icon">

            </div>
        </div>
    );
}

export default Loading;