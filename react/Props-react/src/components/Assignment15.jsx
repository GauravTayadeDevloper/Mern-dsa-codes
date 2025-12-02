export default function Assignment15()
{
    return(
        <>
        <A status={"Online"} />
        </>
    )
}
function A({status})
{
    return(
        <>
        <B status={status}/>
        </>
    )
}
function B({status})
{
    return(
        <>
        <StatusBox status={status}/>
        </>
    )
}
function StatusBox({status})
{
    return(
        
        <div>
            <h1 style={{ color: "red" }}>Assignment 15</h1>
            {status==="Online" ?<p style={{color:"green"} }>{status} </p> :<p style={{color:"red"}}>{status}</p>
                }
        </div>
        
    )
}