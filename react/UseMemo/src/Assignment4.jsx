import { useMemo, useState } from "react";

const LOG_TEXT = `
INFO App started
WARN Disk usage high
INFO User logged in
ERROR Database connection failed
INFO Retrying connection
WARN Memory usage high
ERROR Timeout while fetching data
INFO Operation successful
`;
function logging(str)
{
    let errCnt = 0;
    let warnCnt = 0;
    let a = str.split("\n");
    console.log(a)
    for(let i=0;i<a.length;i++)
    {
        if(a[i].includes("WARN"))
        {
            warnCnt++;
        }
        else if(a[i].includes("ERROR"))
        {
            errCnt ++;
        }
    }

    return [warnCnt,errCnt]
}

export default function Assignment4()
{
    let [tips,setTips]= useState(false);
    let logPars  = useMemo(()=>{
        return logging(LOG_TEXT);
    },[])

    return(
        <div>

                <p>Warn Count is {logPars[0]}</p>            
                <p>Error Count is {logPars[1]}</p>
                <button onClick={()=>setTips(!tips)}>Tips</button>
                <p>{tips ? "these are the tips" : ""}</p>
        </div>
    )
}