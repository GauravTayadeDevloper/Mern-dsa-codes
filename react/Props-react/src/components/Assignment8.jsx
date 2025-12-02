export default function Assignment8()
{
    return (
        <>
            <h1 style={{color:"red"}}>Assignment 8</h1>
        <Button text="Login" color="green" />
<Button text="Signup" color="blue" />

        </>
    )

}

function Button({text , color})
{
    return <button style={{color:color}}>{text}</button>
}