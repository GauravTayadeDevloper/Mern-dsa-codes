import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";


export default function Login()
{
    let [userName,setUserName] = useState("")
    let {user,login } = useContext(LoginContext);

function handleLogin()
{
    if(userName.trim()==="")
    {
        return;
    }
    login(userName);
    setUserName("");
}
if(user)
{
    return;
}
    return(
        <div>
            <div>
                <input value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter User Name" ></input>
                <button onClick={handleLogin} >Login</button>
        </div>
        </div>
    )
}