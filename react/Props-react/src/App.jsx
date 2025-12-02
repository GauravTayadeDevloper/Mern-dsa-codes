import "./App.css";
import Assignment1 from "./components/Assignment1";
import Assignment10 from "./components/Assignment10";
import Assignment11 from "./components/Assignment11";
import Assignment12 from "./components/Assignment12";
import Assignment13 from "./components/Assignment13";
import Assignment14 from "./components/Assignment14";
import Assignment15 from "./components/Assignment15";
import Assignment16 from "./components/Assignment16";
import Assignment17 from "./components/Assignment17";
import Assignment18 from "./components/Assignment18";
import Assignment2 from "./components/Assignment2";
import Assignment3 from "./components/Assignment3";
import Assignment4 from "./components/Assignment4";
import Assignment5 from "./components/Assignment5";
import Assignment6 from "./components/Assignment6";
import Assignment7 from "./components/Assignment7";
import Assignment8 from "./components/Assignment8";
import Assignment9 from "./components/Assignment9";
import Buttons from "./components/Buttons";
import Parent from "./components/parent";
// never change props in child becouse it could couse problems x
// function Gretings(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h3>{props.place}</h3>
//       <h4>{props.isActive ? "user IS Active" : "user is not Active"}</h4>
//     </div>
//   );
// }
// function Arrayprops(props) {
//   return (
//     <div>
//       <ul>
//         {props.info.map((n, i) => (
//           <li id={i}>{n}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Objprops(props) {
//   return (
//     <div>
//       <p>{props.detail.name}</p>
//       <p>{props.detail.age}</p>
//       <p>{props.detail.place}</p>
//     </div>
//   );
// }

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <Gretings name="Guarav" age={24} place="Pune" isActive={true} />
        <Arrayprops info={["kiran", 24, "pune"]} />
        <Objprops detail={{ name: "Ronaldo", age: 41, place: "Fucnhal" }} />
        <Card product="Iphone" price="500$" stock="in stock" st={true} />
        <Card product="S24" price="900$" stock="not in stock" st={false} />
        <Buttons />
        <Task name="Gaurav" age={21} email="gaurav@gmail.com" skills={["java","js","sports"]} />
        <Task name="Saurav" age={25} email="saurav@gmail.com" skills={["c","cpp","mern"]} />
        <Task2 one={{}} />
        <Parent/> */}
        <Assignment1 />
        <Assignment2 />
        <Assignment3 />
        <Assignment4 />
        <Assignment5 />
        <Assignment6 />
        <Assignment7 />
        <Assignment8 />
        <Assignment9 />
        <Assignment10 />
        <Assignment11 />
        <Assignment12 />
        <Assignment13 />
        <Assignment14 />
        <Assignment15/>
        <Assignment16/>
        <Assignment17/>
        <Assignment18/>
      </div>
    </div>
  );
}
// function Task2({one})
// {
//   return(
//     <div>

//     </div>
//   )
// }

// function Card({ product, price, stock, st }) {
//   return (
//     <div>
//       <h2>{product}</h2>
//       <h3>{price}</h3>
//       <p style={{ color: st ? "yellow" : "red" }}> {stock}</p>
//     </div>
//   );
// }

// function Task({name,age,email,skills})
// {
//  return(
//   <div>
//     <h1>{name}</h1>
//     <h2>{age}</h2>
//     <h3>{email}</h3>
//     <h1>Skills</h1>
//     <ul>{skills.map((n,i)=>
//       <li key={i} >{n}</li>)}</ul>
//   </div>
//  )
// }

export default App;
