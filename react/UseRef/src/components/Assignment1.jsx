import { useEffect, useRef, useState } from "react"

    export default function Assignment1(){
        const [click,setCLick] = useState(0);
        const renderCount = useRef(0);   

        renderCount.current = renderCount.current+1;



        function handleTime()
        {

            
          let  t= new Date()
          
           console.log("time clicked",t.toLocaleTimeString() )
        
            setCLick(prev=>prev+1)
            }
        
            console.log("render" ,renderCount.current);
        return(
            <div>
                <p>CLick {click}</p>
                <button onClick={handleTime}>Click me</button>               
            </div>
        )
    }