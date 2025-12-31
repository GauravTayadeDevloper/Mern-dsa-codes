import { useMemo, useState } from "react";

function compleXValidatiom(uname)
{
     let v=0;
    for(let i=0;i<100000;i++)
    {
            v =+i;
    }
    v=v+uname.trim().length;
    if(uname.trim().length> 5)
    {   console.log(v);
        return true;
    }
    else{
        console.log(v);
        return false;
    }
}

function Assignment1() {
    let [uname ,setUname] = useState("");
  let valid = useMemo(()=>{
   
    return compleXValidatiom(uname);
  },[uname])
  
  let [toggle,setToggle] = useState(false)
    return (
    <div >
        <input placeholder="Username" onChange={(e)=>setUname(e.target.value)}></input>
        <p>{valid?"Username is Valid" : "UserName Not valid"}</p>
        <button onClick={()=>setToggle(!toggle)}>Toggle For Help</button>
        <p>{toggle ? "yes toggeling " : " no toggling"}</p>
    </div>
  )
}

export default Assignment1;