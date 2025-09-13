//haOwnProperty()

let obj = {
    name : "Gaurav",
    age  : 23,
    city : "Pune"
}

let x= JSON.stringify(obj)
console.log(x);
let y = JSON.parse(x)
console.log(y);