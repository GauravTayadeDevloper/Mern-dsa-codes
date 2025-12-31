import { useMemo, useState } from "react"

function totalAndMax(arr)
{
let maximum =Math.max(...arr);
let sum =  arr.reduce((sum,size)=>{
    return  sum  + size;
},0)

return [maximum,sum]
}
export default function Assignment5()
{
    let filesSize = [10,20,50,88,900,6565,12,60];
let sizes = useMemo(()=>{
return totalAndMax(filesSize);
},filesSize)

    let [toggle, setToggle] = useState(false)
    return(
        <div>
            <p>total sum: {sizes[1]}</p>
            <p>Maximum: {sizes[0]}</p>
            <button onClick={()=>{setToggle(!toggle)}}>File Guidline</button>
            {toggle?<p>File guidllines are : .......</p>:""}
        </div>
    )
}