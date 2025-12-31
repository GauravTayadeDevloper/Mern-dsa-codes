import React from "react"
const Child = React.memo(({handleClick})=>{
console.log("child rendered")
    return (
    <button onClick={handleClick}>Button</button>
    )
})

export default Child;
