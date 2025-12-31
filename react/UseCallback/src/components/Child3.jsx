import React from "react";
import { useState } from "react";

const Child3 = React.memo(({data,refresh})=>{
    let [showDAta,setShowData] = useState(false)
    console.log("child running")
    return(
        <div>
             <button onClick={()=>{setShowData(!showDAta)}}>Child</button>
            {showDAta? <div><p>{data.id}</p> <p>{data.name}</p> <p>{data.age}</p></div> :""  }
            <button onClick={refresh}> refresh</button>
        </div>
    )

})
export default Child3;