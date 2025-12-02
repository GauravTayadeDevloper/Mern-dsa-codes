export default function Assignment3()
{
    let age=18;
    if(age>=18)
    {
        return <Major/>
    }
    else
    {
        return <Minor/>
    }
   
}
function Major()
{
    return (
    <>
        <h1 style={{color:"red"}}>Assignment 3</h1>
    <h2>info : Major</h2></>
    )
}

function Minor()
{
    return 
    <>
        <h1>Assignment 3</h1>
    <h2>info : Minor</h2>
</>
}