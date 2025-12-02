import { useState } from "react"

function Assignment6()
{
   let [num,setNum] =useState(0)
        function increase()
        {
            return setNum(prev=> prev+2);
        }
        
        function decrease()
        {
            return setNum(prev => prev-2);
        }
   return (
    <>
              <h1>{num}</h1>
            <button onClick={increase}>Increase</button>
              <button onClick={decrease}>Decrease</button>  
    </>
      )
}

export default Assignment6;