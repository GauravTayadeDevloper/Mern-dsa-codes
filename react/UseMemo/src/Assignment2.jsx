import { memo, useMemo, useState } from "react";

// const students = [
//   {
//     id: 1,
//     name: "Amit",
//     marks: { math: 78, science: 85, english: 72 },
//   },
//   {
//     id: 2,
//     name: "Neha",
//     marks: { math: 92, science: 88, english: 90 },
//   },
//   {
//     id: 3,
//     name: "Rahul",
//     marks: { math: 65, science: 70, english: 68 },
//   },
//   {
//     id: 4,
//     name: "Pooja",
//     marks: { math: 81, science: 79, english: 75 },
//   },
//   {
//     id: 5,
//     name: "Suresh",
//     marks: { math: 55, science: 60, english: 58 },
//   },
//   {
//     id: 6,
//     name: "Anjali",
//     marks: { math: 89, science: 91, english: 87 },
//   },
//   {
//     id: 7,
//     name: "Vikas",
//     marks: { math: 72, science: 68, english: 70 },
//   },
//   {
//     id: 8,
//     name: "Kiran",
//     marks: { math: 95, science: 93, english: 92 },
//   },
//   {
//     id: 9,
//     name: "Sneha",
//     marks: { math: 84, science: 80, english: 86 },
//   },
//   {
//     id: 10,
//     name: "Rohit",
//     marks: { math: 60, science: 65, english: 62 },
//   },
// ];
function markAverage(marks)
{
    console.log("doing calculation")
    let avg = 0;
    for(let i=0;i<marks.length;i++)
    {
        avg = avg + marks[i];
    }
    
return  avg/3;
}

export default function Assignment2() {
    let [averaeg ,setAverage ] = useState(false);
    const marks = [70, 80, 90];
    let average = useMemo(()=>{
        return markAverage(marks)
    },[marks])
  
    return (
    <div>
      {/* <ol>
        {students.map((std) => (
          <li key={std.id}>
            <h3>{std.name}</h3> 
            <p>{std.marks.math}</p>
            <p>{std.marks.science}</p>
            <p>{std.marks.english}</p>
            <button onClick={()=>setAverage(!averaeg)}> { !averaeg ?"Show Average" : "hide Average"}</button>
            {averaeg ? <p>Average is </p> :""}
          </li>
        ))}
      </ol> */}

      <ol>
        {
            marks.map((val,i)=>(
                <li key={i}>{val}</li>
            ))
        }
        <button onClick={()=>{
            setAverage(!averaeg)
        }}>Show details</button>
        {averaeg ? <p>average {average}</p>:""}
      </ol>
    </div>
  );
}
