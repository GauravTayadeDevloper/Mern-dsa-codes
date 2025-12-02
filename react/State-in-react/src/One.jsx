import { useState } from "react";

function One() {
  let [items, Additmes] = useState([]);
  let [items1, Removeitems] = useState(["item 1", "item 2", "item 3"]);
  let [ip, Setip] = useState({ name: "", age: "" });
  let [num, Setrandom] = useState();
  let [n, SetCount] = useState(0);
  let [numbers, SetNum] = useState(0);
  let a = 0;
  return (
    <>
      <button
        onClick={() => {
          Additmes([...items, `item ${items.length} `]);
        }}
      >
        Add item
      </button>
      <p>{items}</p>
      {/* 
        <button onClick={()=>{Additmes(items1.filter(item=>item!== "item 1"))}} >Remove item</button> */}

      <button onClick={() => Additmes(items.slice(1))}>Remove item</button>
      <p>{items}</p>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => Setip({ ...ip, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => Setip({ ...ip, age: e.target.value })}
      />
      <p>
        {ip.name}-{ip.age}
      </p>

      <button onClick={() => Setrandom(parseInt(Math.random() * 100 + 1))}>
        Random
      </button>
      <p>Random number: {num}</p>

      <input type="number" onChange={(e) => SetNum(parseInt(e.target.value))} />
      <button onClick={() => SetCount(n + numbers)}>Increase Count</button>
      <p>Count:{n}</p>
    </>
  );
}
export default One;
