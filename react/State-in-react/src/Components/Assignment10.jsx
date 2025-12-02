import { useState } from "react";

function Assignment10() {
  let [exp, setExp] = useState("");
  let [amt, setAmt] = useState("");
  let [row, setRow] = useState([]);
  function setValues() {
    
    const Title = exp.trim();
    const Amount = Number(amt.trim());
    if (!Title || !Amount || Amount <= 0) return;
    const newExp = {
      id: Date.now(),
      title: Title,
      amount: Amount,
    };

    setRow((prev) => [...prev, newExp]);

    setExp("");
    setAmt("");
  }

  const total = row.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <>
      <input value={exp}
        onChange={(e) => {
          setExp(e.target.value);
        }}
        placeholder="Exprense title"
      ></input>
      <input value={amt}
        onChange={(e) => {
          setAmt(e.target.value);
        }}
        placeholder="Amount"
      ></input>
      <button onClick={setValues}>ADD Expense</button>
      {row.length === 0 && <p>no Expense added</p>}
      <table>
        <thead>
          <tr>
            <td>Expense</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {row.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>TOTAL = {total}</p>
    </>
  );
}

export default Assignment10;
