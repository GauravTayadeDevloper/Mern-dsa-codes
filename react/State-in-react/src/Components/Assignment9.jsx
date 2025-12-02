import { useState } from "react"

function Assignment9(){
    let [mode,setMode] = useState(true);
    return(
    <div style={{
        height:"220px",
        width:"200px",
        backgroundColor: mode? "#1e1e1e":"#ffffff",
        color:mode ? "white":"black",
        transition:"0.3s ease",
    }}>
        <h1>{mode ?"Dark  Mode":"Light mode"}</h1>
        <button onClick={()=>setMode(!mode)}>{mode ? "Light mode" : "Dark  Mode"}</button>
    </div>
 )
}
export default Assignment9