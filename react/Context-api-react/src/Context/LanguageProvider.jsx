import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
export default function LanguageProvider({children})
{
    let [language,setLanguage] = useState("en");

    function languageChange()
    {
      setLanguage(language === "en" ? "esp" : "en");

    }

    return(
        <LanguageContext.Provider value={{language,languageChange}}>
            {children}
        </LanguageContext.Provider>
    )
} 