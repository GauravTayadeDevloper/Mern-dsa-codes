import { useEffect, useState } from "react"


export default function Assignment2()
{
    let [count ,setCount] =useState(0);
    useEffect(()=>{
        console.log("Content loaded")
    },[count])
    return(
        <div>
            <h1>ASSIGNMENT 2 </h1>
        </div>
    )
}