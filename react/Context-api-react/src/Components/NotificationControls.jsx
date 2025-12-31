import { NotificationContext } from "../Context/NotificationContext";
import { useContext } from "react";
export default function NotificationControls()
{
    let {showMessage} = useContext(NotificationContext);

    return(
        <button onClick={()=>showMessage("hello im gro")}>
            Show Msg
        </button>
    )
}