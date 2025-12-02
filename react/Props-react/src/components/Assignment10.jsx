export default function Assignment10()
{
    return(
        <>
            <h1 style={{color:"red"}}>Assignment 10</h1>
            <Child onPress={() => alert("Pressed!")} />
        </>
    )
}

function Child({onPress})
{
    return <button onClick={onPress} style={{color:'blue'}}>Click here</button>
}