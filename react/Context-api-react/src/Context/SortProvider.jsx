import { useState } from "react";
import { SortContext } from "./SortContext";

export default function SortProvider({children})
{
        let [sortOrder,setSortOrder] = useState("ascending");
        function toggleSort()
        {    setSortOrder(prev =>
      prev === "ascending" ? "descending" : "ascending"
    )
}

        return(
            <SortContext.Provider value={{sortOrder,toggleSort}}>
                {children}
            </SortContext.Provider>
        )
}