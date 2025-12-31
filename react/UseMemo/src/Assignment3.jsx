import { useMemo, useState } from "react";
  let list = ["phone","laptop","headphone","watch","tv","earphone","dekstop","keyboard"];
 function filtering(value)
 {
    let a = list.filter((val)=> val.toLowerCase().includes(value.toLowerCase()))

    return a;

 }
export default function Assignment3()
{
     let [filter,setFilter] = useState("");
    let [toggle,setToggle] =useState(false);
    let filteredList = useMemo(()=>{
        return filtering(filter);

    },[filter])
    return(
        <div>
            <input onChange={(e)=>{setFilter(e.target.value)}} placeholder="enter to filter"></input>
            <button onClick={()=>setToggle(!toggle)}>See Preview</button>
            <p>{toggle ? "preview mode is on" : "" }</p>
            
            <ol>
                {filteredList.map((p,i)=>(
                    <li key={i}>{p}</li>
                ))}
            </ol>
        </div>
    )
}