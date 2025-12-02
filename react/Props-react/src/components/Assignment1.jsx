export default function Assignment1()
{
    const isLoggedIn ="true";
    const UserName = "Guarav"
    
    return(
        <>
        <h1 style={{color:"red"}}>Assignment 1</h1>
            <p>{isLoggedIn ? `Welcome ${UserName}`: "please log in to continue"}</p>
        </>
    )


}

