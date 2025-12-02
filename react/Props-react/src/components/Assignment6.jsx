export default function Assignment6()
{
    return(
        <>
            <h1 style={{color:"red"}}>Assignment 6</h1>
             <Skills list={["HTML", "CSS", "React"]} />
        </>
    )
}
function Skills({list})
{
    return <ul>{
            list.map((s,i)=>(
                <li key={i}>{s}</li>
            ))
        }</ul>
}