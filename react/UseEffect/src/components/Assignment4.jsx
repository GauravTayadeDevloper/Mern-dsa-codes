import { useEffect, useState } from "react"


export default function Assignment4()
{
    let [app ,setApp] =useState(0)
    useEffect(()=>{
        console.log("Render happened")
    })
    useEffect(()=>{
        console.log("Mounted")
    },[app])
    return(
        <div>
            <h1>ASSIGNMENT 4</h1>
        <h1 on >sa</h1>
        <h1>sa</h1>
        <h1>sa</h1>
        </div>
    )
}