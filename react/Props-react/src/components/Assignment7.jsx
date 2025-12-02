export default function Assignment7()
{
 return(
    <>
        <h1 style={{color:"red"}}>Assignment 7</h1>
    <User info={{ name: "Sara", age: 20, email: "sara@mail.com" }} />

    </>
 )
}

function User({info})
{
    return (
        <>
            <h5>{info.name}</h5>
        <h5>{info.age}</h5>
        <h5>{info.email}</h5>
        </>
    )
}
