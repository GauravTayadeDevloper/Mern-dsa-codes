import { useMemo } from "react";
import Child2 from "./Child2";
import { useState } from "react";
export default function Assignment2()
{
  let [count,setCount]= useState(false);
    let  data = useMemo(()=>{
        return {id:1,name:"gaurav" ,age:26}
     },[])

      return(
    <div>
          <button onClick={()=>{setCount(!count)}}>toggle</button>
          {count?<p>user data</p>:""}
          <Child2 data={data}/>
    </div>)
}