import { useState } from "react";
import { ViewContext } from "./ViewContext";

export default function ViewProvider({children})
{
    let [mode,setMode] = useState('compact');
    function toggleView()
    {
        setMode(prev => (prev === "compact" ? "expanded" : "compact"));
    }
    return(
        <ViewContext.Provider value={{mode,toggleView}}>
            {children}
        </ViewContext.Provider>
    )
}