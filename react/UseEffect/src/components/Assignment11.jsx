import { useEffect, useState } from "react"


export default function Assignment11()
{
 
    let [text,setText] =useState("");
       useEffect(()=>{
             console.log(`Selected ${text}`)
        
    },[text])

    return(
        <div>
            <h1>ASSIGNMENT 11</h1>
        <select onChange={(e)=> setText(e.target.value)}>
               <option value="" >Select Option</option>
                <option value="X" >X</option>
                <option value="Y" >Y</option>
                <option value="Z" >Z</option>
            </select>
        </div>
    )
}