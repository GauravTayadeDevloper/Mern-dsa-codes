    import { useState } from "react";

    function Assignment13()
    {
    let [num,setNum] = useState([]);
    // let [list ,Setlist] =useState([])
        function randomNum(){
            let number = Math.floor((Math.random()*100)+1);
            setNum([...num ,number ]);   
        }
        
        
        return (
        <>
        <button onClick={randomNum}>Generate Random Number</button>
        <ul>
            {num.map((num,index)=>
                <li key={index}>{num}</li>
            )}
        </ul>
    </>
        )

    }
    export default Assignment13