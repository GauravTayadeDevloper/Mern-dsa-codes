import { useState } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");

  // TODO: addQuote function
  // TODO: deleteQuote function
function addQuote()
{
     if (quote.trim() === "") {
      setError("Quote cannot be empty");
      return;
    }

    setQuotes([...quotes, quote]);
    setQuote("");  
    setError("");

}
function deleteQuote(index)
{
 setQuotes( quotes.filter((_,i)=>i!==index));
}

  return (
    <div id="app-container">
      <h1 id="title">MiniQuotes</h1>

      {/* Input Section */}
      <div id="input-section">
        <input
          id="quote-input"
          type="text"
          placeholder="Write a quote..."
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button id="add-btn" onClick={addQuote}>Add</button>
      </div>

      {/* Error Message */}
      <p id="error-msg">{/* show error conditionally */}
        {error}
      </p>

      {/* Quotes List */}
      <div id="quotes-list">
        {/* TODO: show empty state */}
        {/* TODO: list of quotes */}
        {quotes.length ===0 ?(<p>List is Empty </p>):
          (  quotes.map((q,i)=>(<div key={i}>
         <div className="quote-card"> <p>{q}</p> <button className="delete-btn" onClick={()=>deleteQuote(i)}>Delete</button> </div>
         </div>)))
        }

      </div>
    </div>
  );
}
