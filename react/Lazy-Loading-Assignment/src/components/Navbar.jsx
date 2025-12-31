import { Link } from "react-router-dom";

export default function Navbar()
{
    return(
        <nav style={{padding :"20" , gap:"10px", display:"flex"}}>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about" >About</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    )
}