import { useState } from "react"

function Assignment12()
{
    let [size ,setSize] =useState("10")
    return(
    <>
     <p
        style={{
            fontSize:`${size}px`,
        }}
     >Live Preview Text (size: {size})</p>
    <input type="range" min="10" max="48" value={size} onChange={(e)=>{setSize(Number(e.target.value))}}></input>
    </>
    
       
    
    )
}
export default Assignment12