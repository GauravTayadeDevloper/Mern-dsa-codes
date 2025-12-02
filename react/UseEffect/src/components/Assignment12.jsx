import { useEffect, useState } from "react"


export default function Assignment12()
{
    let [age ,setAge] =useState(0)
    let [salary,setSalary] =useState(0)
       useEffect(()=>{
        if(age >0 && salary >0)
        {
             console.log("Render happened")
        }
       
        
    },[age,salary])
let a,s;
    return(
        <div>
            <h1>ASSIGNMENT 12</h1>
        
            <button onClick={()=>setAge(age+1) }>Click </button>
            <button onClick={()=>setSalary(salary+1000) }>Click </button>  
            <p>{age} {salary}</p>
        </div>
    )
}