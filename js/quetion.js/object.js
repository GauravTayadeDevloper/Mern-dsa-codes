let obj = {
    name : "Gaurav",
    age  : 23,
    city : "Pune"
}
obj.mail = "gaurav69@gmail.com"
console.log(obj.name)
console.log(obj.age)
console.log(obj.city)
console.log(obj["age"])
let m = "mail"
console.log(obj)
console.log(obj[m])
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


// destructuring 

//array Destructuring
let ar=[100,55,8985,53,2]

// let one =ar[0]
// let two =ar[1]
// let three =ar[3]
// let four =ar[3]

// let [one ,two , three, four,five,six = 6]= ar;
// console.log(one ,two , three, four,five,six)
let [one ,two , three, ,five,six = 6]= ar;
console.log(one ,two , three,five,six)

// object Destructuring
let person = {
    name: "leo",
    age : 38,
    // place : 'rosario'
}
// let name = person.name;
// console.log(name)
// let {name,age,place} = person;
// console.log(name ,age, place)
//let {name,age:leoage,place='maimi' } = person;
//console.log(name ,leoage, place)


// spreade operator
// rest operator
let arr=[1,2,3,4];
let a = [...arr];
console.log(a);
let arr1=[5,6,7,8];
let arr3 = [...arr,...arr1];
console.log(arr3)

// rest

function sum1(...numbers)
{
    let sum = 0
    for(let i = 0;i<numbers.length;i++)
    {
        sum = sum + numbers[i];
    }
    console.log(sum)
    // for(n of numbers){
    //     sum += n;
    // }
    return sum;

}
// sum(arr3);
console.log(sum1(1,2,3,4,5,6))

let newob = {...obj,...person};
console.log(newob)

let {name,...rest}= newob;

console.log(name);
console.log(rest)

