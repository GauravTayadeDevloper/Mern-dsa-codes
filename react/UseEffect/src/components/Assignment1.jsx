import { useEffect, useState } from "react"


export default function Assignment1()
{
    let [count ,setCount] =useState();
    useEffect(()=>{
        console.log("rendered")
    })
    return(
        <div>
            <h1>ASSIGNMENT 1</h1>
<h1>Hello</h1>
<h1>Hello</h1>
        </div>
    )
}