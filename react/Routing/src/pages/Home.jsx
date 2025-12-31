
import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";
const allUsers =[{
    id:1,name:"Kiran Padole" ,place:"Pune"
}, {
    id:2,name:"Tejas Shinde" ,place:"Mumbai"
}
,{
    id:3,name:"Nayan Sonkar" ,place:"Amravati"
}
]

export default function Home()
{
 return (
     <div>
        <h1>Home</h1>

         { allUsers.map((user)=>(
                <div key={user.id}> 
                 <Link to={`/users/${user.id}`}>
                    {user.name}
                </Link>
                </div>
            ))}

            <div>
                <PostDetails/>
            </div>

        </div>
  )

}
