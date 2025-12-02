import { useState } from "react"

function Assignment2(){
    let [num , setDouble] = useState(1);
    return (
            <>
            <h1>Double Triple</h1>
            <p>{num}</p>
        
            <button onClick={()=>setDouble(num*2)}>Double</button>
            <button onClick={()=>{setDouble(num*3)}}>Tripple</button>
            </>
    )
}
export default Assignment2;