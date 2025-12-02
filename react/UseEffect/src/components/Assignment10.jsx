import { useEffect, useState } from "react"


export default function Assignment10()
{
    let [text,setText] =useState("")
       useEffect(()=>{
        if(text.trim().length <=5)
        {
            return ;
        }
             console.log("Render happened")
        
    },[count,text])

    return(
        <div>
            <h1>ASSIGNMENT 10</h1>
         
            <input type="text" placeholder="type here..." onChange={(e)=>setText(e.target.value)}></input>
            <p>{text}</p>
        </div>
    )
}