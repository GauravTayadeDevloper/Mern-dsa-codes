import React from "react";
import { useState } from "react";
const Child2 = React.memo(({data})=>{
    let [showDAta,setShowData] =useState(false)
    console.log("Child is Running")
    return(
        <div>
            <button onClick={()=>{setShowData(!showDAta)}}>Child</button>
            {showDAta? <div><p>{data.id}</p> <p>{data.name}</p> <p>{data.age}</p></div> :""  }
        </div>
    )
})

export default Child2;