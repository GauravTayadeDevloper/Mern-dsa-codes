import { useEffect, useState } from "react"


export default function Assignment15()
{
    let [text,setText] =useState("")

    return(
        <div>
            <h1>ASSIGNMENT 15</h1>
        <select onChange={(e)=> setText(e.target.value)}>
               <option value="" >Select Country</option>
                <option value="India" >India</option>
                <option value="UK" >UK</option>
                <option value="Portugal" >Portugal</option>
            </select>
            <Country con={text}/>
        </div>
    )
}

function Country({con})
{

    return(

        <>
            {con.length ===0 ? "":<><p>Fetching data for {con} </p>
            <p>You selected {con}</p></> }
            
        </>
    )   
}
