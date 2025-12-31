import { useState } from "react";
import { ThemeContext } from "./themeContext";

export default function ThemeProvider({children}){
    const [theme,setTheme] = useState("light");
    function toggle()
    {
        setTheme(theme==="light" ? "dark" :"light");
    }
    return (
        <ThemeContext.Provider value={{theme,toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}