import { useEffect, useState } from "react"


export default function Assignment3()
{
    let [count ,setCount] =useState(0);
    useEffect(()=>{
        document.title=`Count is ${count}`
    },[count])
    return(
        <div>
            <h1>ASSIGNMENT 3</h1>
                <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
        </div>
    )
}