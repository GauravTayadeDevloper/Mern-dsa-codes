import { Link } from "react-router-dom";

export default function Navbar()
{
    return(
        <nav style={{gap:"20px" ,padding:"20px" ,display:"flex"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
             <Link to="/dashboard">Dashboard</Link>  

        </nav>
    )
}