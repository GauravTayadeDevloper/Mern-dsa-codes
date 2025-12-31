import { useState } from "react";
import { NotificationContext } from "./NotificationContext";

export default function NotificationProvider({children})
{
    let [msg ,setMsg] = useState(null);
  function  showMessage(text)
  {
    setMsg(text);
  }
  function clearMessage()
  {
        setMsg(null)
  }

    return(
        <NotificationContext.Provider value={{msg,showMessage,clearMessage}}>
          {children}
        </NotificationContext.Provider>
    )
}