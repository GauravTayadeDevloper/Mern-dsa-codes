import { useState } from "react";

function Assignment3() {
   let [str, SetString] = useState("true");
   return (
      <>
         <h1>{str ? "Hello Student! " : "Welcome to React!"}</h1>
         <button onClick={() => SetString(!str)}>Change</button>
      </>
   )
}
export default Assignment3;