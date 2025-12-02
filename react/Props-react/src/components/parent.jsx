export default function Parent()
{
    return (
        <div>
        <Dashboard/>
        <Buttons>Log in</Buttons>
        <Buttons>Log out</Buttons>
        <Buttons>Sign In</Buttons>
        </div>  
    )
}

function Dashboard()
{
    let user ={name:"GAURAV" ,age:26};
    return <Sidebar user={user}/>;
}
function Sidebar({user})
{
    return <Userinfo user={user}/>;
}

function Userinfo({user})
{
    return <Avatar user={user}/>
}

function Avatar({user})
{
    return <h1>{user.name}</h1>
}

function Buttons({children})
{
    return <button>{children}</button>
}

