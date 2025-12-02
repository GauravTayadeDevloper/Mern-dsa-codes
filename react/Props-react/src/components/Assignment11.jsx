export default function Assignment11()
{
    return (
        <>
            <h1 style={{color:"red"}}>Assignment 11</h1>
        <Level1 name="Ujjwal"/>
        </>
    )
    
}

function Level1({name})
{
    return(
        <Level2 name ={name}/>
    )
}

function Level2({name})
{
    return(
        
            <Level3 name={name}/>
        
    )
}

function Level3({name})
{
    return(
        <h1>{name}</h1>
    )
}
