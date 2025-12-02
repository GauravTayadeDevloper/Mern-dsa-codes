function Buttons()
{
    return (
        <div>
            <Button color="green" text="login"/>
            <Button color="blue" text="sign up"/>
            <Button color="red" text="log out"/>
        </div>
    )
}

function Button({color,text})
{
    return (
        <div>
            <button style={{backgroundColor:color}}>{text}</button>
        </div>
    )
}
export default Buttons;

