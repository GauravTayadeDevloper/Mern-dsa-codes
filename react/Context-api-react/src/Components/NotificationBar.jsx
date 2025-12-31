import { useContext } from "react";
import { NotificationContext } from "../Context/NotificationContext";

export default function NotificationBar()
{
    let {msg,clearMessage} = useContext(NotificationContext);
    if(!msg)
    {
        return
    }
    return(
        <div>
             <div>
                <p>{msg} </p> 
                 <button onClick={clearMessage}>delete</button>
             </div>
        </div>
        
    )
}