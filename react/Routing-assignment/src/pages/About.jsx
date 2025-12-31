import { Link, Outlet } from "react-router-dom"
export default function About()
{
    return (
        <>
        <h1>About</h1>
        <nav style={{gap:"20px",display:"flex"}}>
            <Link to="team">Team</Link>
            <Link to="Company">Comapany</Link>
        </nav>
        <Outlet/>
        </>
    )
}