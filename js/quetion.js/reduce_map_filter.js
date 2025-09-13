const students = [
  { name: "Ravi", marks: [45, 55, 60] },
  { name: "Anjali", marks: [30, 40, 35] },
  { name: "Neha", marks: [70, 80, 90] },
  { name: "Aman", marks: [50, 45, 55] }
];

let a = students.map(student=>({
    ...student,
    average : student.marks.reduce((sum,marks)=>sum+marks,0) /student.marks.length
}))

let b = a.filter(student=>student.average >50);
let c = b.map(student=>student.name.toUpperCase())

console.log(a,b,c)