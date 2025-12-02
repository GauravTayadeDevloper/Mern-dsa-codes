import { useState } from "react";

function Assignment7(){
    let [fruit , setFruit] =useState([]);
    let [inpval ,setIp] = useState("")
    let a ;
    return(
        <>
        <input id="input" onChange={(e)=>setIp(e.target.value)} ></input>
        <button onClick={()=>{setFruit([...fruit, inpval])}
        }>Enter fruit</button>
        <button onClick={()=>setFruit(fruit.slice(0,-1))} disabled={fruit.length ===0} >Remove</button>
        <p>{fruit.join(" ")}</p>
        </>
    )
}

export default Assignment7;