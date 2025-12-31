import { useMemo, useState } from "react";
function msgCatogorization(msg)
{
    let quetion = [];
    let announcemnet = [];
    let normal = [];
    for(let i=0; i<msg.length;i++)
    {
        if(/^ANN:/.test(msg[i]))
        {
            announcemnet.push(msg[i]);
        }
        else if(msg[i].includes("?"))
        {
            quetion.push(msg[i]);
        }
        else{
            normal.push(msg[i])
        }
    }

    return {quetion,announcemnet,normal}

}

export default function Assignment6()
{
    let msg = ["is gaurav single ?","does kun have gf ?","sam's gf ran away with whome?","where Tejas lost his verginity?", "ANN: Gaurav is STill single" ,"ANN: Kiran have GF", "ANN:Sam's GF ran Away with Kun" , "ANN: Tejas Lost his verginity in his town","teajs is still goin on bridge" ,"kun still have fillings for Vish" ,"sam have crush ","gaurav lost his mind"];
let catogories = useMemo(()=>{
    return msgCatogorization(msg);
},[msg])

    let [toggle,setToggle] = useState(false)
    
    return(
        
        <div>
            <p></p>
            <button onClick={()=>setToggle(!toggle)} >show Normal messeges</button>
            <p>Quetions</p>
            <ul>
                {catogories.quetion.map((m,i)=>(
                    <li key={i}>{m}</li>
                ))}
            </ul>

            <p>Announcement</p>
                <ul>
                {catogories.announcemnet.map((m,i)=>(
                    <li key={i}>{m}</li>
                ))}

                {toggle ?             <ul> <p> Normal msg</p>
                {catogories.normal.map((m,i)=>(
                    <li key={i}>{m}</li>
                ))}
            </ul>:""}
            </ul>
        </div>
    )
}