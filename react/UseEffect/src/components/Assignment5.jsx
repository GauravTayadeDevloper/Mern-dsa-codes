import { useEffect, useState } from "react"


export default function Assignment5()
{
    let [count ,setCount] =useState(0)

       useEffect(()=>{
        if(count%2==0 && count >0   )
        {
             console.log("Render happened")
        }
    },[count])

    return(
        <div>
            <h1>ASSIGNMENT 5</h1>
            <button onClick={()=>setCount(count+1)}>Click {count}</button>  
        </div>
    )
}