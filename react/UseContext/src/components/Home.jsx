import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default function Home()
{
    let {theme,toggle} = useContext(ThemeContext)
    return(
        <div style={{
            backgroundColor: theme==="light" ?  "#ffffff":"#000000" ,
            color:theme==="light" ? "#000000":"#ffffff" ,
            height:"100vh",

        }}>
            <h1>theme is {theme}</h1>
        
            <button onClick={toggle} >Toggle Theme</button>
        </div>
    )
}