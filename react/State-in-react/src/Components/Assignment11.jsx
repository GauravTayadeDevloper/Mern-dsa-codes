import { useState } from "react";

function Assignment11()
{
    function likeup()
    {
        setLike(prev => prev +1)
    }
    function cmntUp()
    {
        setCmnt(prev =>prev+1)
    }
    let [like,setLike] =useState(0);
    let [cmnt ,setCmnt] =useState(0);
    return(
        <>
        <h1> post have {like} likes</h1>
        <button onClick={likeup}>LIke</button>
        <h1> post have {cmnt} comments</h1>
        <button onClick={cmntUp}>LIke</button>
        </>
        
    )

}
export default Assignment11;