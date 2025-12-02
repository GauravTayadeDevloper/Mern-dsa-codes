import { useState } from "react";

function Counter() {
  let [count, SetCount] = useState(0);
  // let [name, Setname] = useState("Gaurav");
  // let [show, Setshow] = useState("false");
  // let [text, Settext] = useState("");
// let [step ,setStep] = useState(0)
// function stepAdd()
// {
    
//     setStep(prev=>Number(prev)+Number(step))
    
// }

  return (
    <div>
      {/* <h1>Counter</h1>
      <p>Count:{count}</p>
      <button onClick={() => SetCount(count + 1)}>Increament</button>
      <button onClick={() => SetCount(count - 1)}>Decreament</button>
      <h2>Name Change : {name}</h2>
      <button
        onClick={() => {
          Setname("Saurav");
        }}
      >
        CHange Name
      </button>
      <h3>Show State</h3>
      <input type={show ? "text" : "password"}></input>
      <button onClick={() => Setshow(!show)}>{show ? "SHOW" : "HIDE"}</button>
      <h1>user Input SHow</h1>
      <input value={text} onChange={(e) => Settext(e.target.value)}></input>
      <p>You Typed: {text}</p> */}



    {/* <button onClick={() => SetCount(count + 1)} > Counter</button>  
    <p>{count}</p> */}
{/* <input type="number" value={step} onChange={(e)=>(setStep(e.target.value))}></input>
<button onClick={stepAdd}>increse</button>
<p> {step}</p> */}


  <button onClick={()=>SetCount(count+1)} disabled={count==10}>increase</button>
  <button onClick={()=>SetCount(count-1)} disabled={count==0}>Decreament</button>
  <p>{count}</p>
    </div>
  );
}
export default Counter;
