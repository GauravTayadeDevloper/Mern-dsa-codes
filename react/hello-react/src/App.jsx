import { useEffect, useState } from "react";

function App() {

 
    const [timer,ctime] = useState(new Date().toLocaleTimeString();)
    useEffect(()=>{
      setInterval(()=>{
        ctime();
      },1000)
    })
  
    




  return (
    <>
      <h1>Hello React!</h1>
      <h2>By Gaurav Tayade {timer()} </h2>
    </>
    

  )
}

export default App
