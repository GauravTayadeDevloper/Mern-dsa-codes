import { useEffect, useState } from "react"


export default function Assignment14()
{
    let [running ,setRunning] =useState(false)
    let [time,setTimer] =useState(0)
       useEffect(()=>{
        if (!running) return;
            let timer = setInterval(()=>{
                setTimer(count=>count+1);
            } ,1000)
        
        return ()=>{
            clearInterval(timer)
        }
    },[running])

    return(
        <div>
            <h1>ASSIGNMENT 14</h1>
            <h1>{time}</h1>
            <button onClick={()=>setRunning(true)}>Start</button>  
            <button onClick={()=>setRunning(false)}>Stop</button>  

            <p>{running ?"Running":"Stopped"}</p>
        </div>
    )
}