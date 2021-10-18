import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return(
        <div
        onClick = {() => {
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}>
        {/* <span>{themeMode === "light" ? "Lights Off" : "Lights On"}</span> */}
        {themeMode === "light" ? "Click here to turn On the dark theme" : "Click here to turn Off the dark theme"}
        </div>
    );
};

export default ThemeToggler;