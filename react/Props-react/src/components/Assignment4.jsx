export default function Assignment4()
{
    return (
        <>
                <Greeting name="Aarav" city="Delhi" />
           
        </>
    )
}


function Greeting({name,city})
{
    return <>    <h1 style={{color:"red"}}>Assignment 4</h1>
    <h1> hello my name is {name} and i am from  {city}</h1></>
}