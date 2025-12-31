import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function Greeting()
{
    let {language, languageChange} = useContext(LanguageContext);
    return(
        <div>
            {language === "en" ?<h1>Hello</h1> : <h1>
                Hola</h1>}
                <button onClick={languageChange}>Toggle Language</button>
        </div>
    )
}