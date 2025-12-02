import { useState } from "react"

function Assignment5(){
    let [color , setColor] = useState("yellow")
    return(
        <div>
            <div
            style={{
                height: "200px",
                width: "200px",
                border:"1px solid blue",
                backgroundColor:color,
            }}></div>
            <button onClick={()=>{setColor("green")}}>Green</button>
            <button onClick={()=>{setColor("blue")}}>Blue</button>
            <button onClick={()=>{setColor("red")}}>Red</button>
        </div>
    )
}
export default Assignment5;