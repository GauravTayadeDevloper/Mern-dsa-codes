import { Link, Outlet } from "react-router-dom";

export default function DashBoard()
{
    return(
        
        <>
        <h1>User DashBoard</h1>
        <nav style={{display:"flex", gap:"10px"}}>
            <Link to='settings'>Setting</Link>
            <Link to='billing'>Billing</Link>
        </nav>
        <Outlet/>
        </>
    )
}
