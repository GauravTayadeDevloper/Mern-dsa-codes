import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PostDetails()
{
    const {postId} = useParams();
    const [post,setPost] =useState([]);
   
   useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res=>res.json())
    .then(data=> setPost(data))

   },[postId])

    return(
        <div>
            <p>{post.userId}</p>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            
        </div>
    )

}