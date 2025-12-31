import { Link, useParams } from "react-router-dom"
const allUsers =[{
    id:1,name:"Kiran Padole" ,place:"Pune"
}, {
    id:2,name:"Tejas Shinde" ,place:"Mumbai"
}
,{
    id:3,name:"Nayan Sonkar" ,place:"Amravati"
}
]

export default function UserDetailes()
 {
    const {userid} =useParams();
    const user = allUsers.find(u=>u.id===Number(userid));
return (

        <div>
           {user ?(
                <>
                    <h2>User details</h2>
                    <p>name :{user.name}</p>
                     <p>place :{user.place}</p>

                </>
           ) :(
            <h3>
                user Not found
            </h3>
           )
        }
        <Link to="/" >Home</Link>
        </div>
    )
 }
