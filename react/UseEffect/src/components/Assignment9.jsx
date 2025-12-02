import { useEffect, useState } from "react"


export default function Assignment9()
{
    let [color,setColor] =useState(true)
    
       useEffect(()=>{
             console.log("Background Changed")
        
    },[color])

    return( 
        <div style={{backgroundColor: color ?"red":"blue"}}>
            <h1>ASSIGNMENT 9</h1>
            <button onClick={()=>setColor(!color)}>Click</button>  
        </div>
    )
}