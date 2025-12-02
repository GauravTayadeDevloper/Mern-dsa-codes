export default function Assignment5()
{
    return(
        <div>
                <h1 style={{color:"red"}}>Assignment 5</h1>
            <Parent/>
        </div>
    )
}
function Parent()
{
    let name="Gaurav";
    let age = 24;
    let isOnine = true;
    return <Child name={name} age ={age} isOnine={isOnine}/>
}

function Child({name,age,isOnine})
{
    return <h4>{name} of age {age} {{isOnine} ? "is online" : "not online"}</h4>
}