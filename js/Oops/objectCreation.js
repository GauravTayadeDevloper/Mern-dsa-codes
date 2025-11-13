// //object litral


// let usr ={
//     name:"gaurav",
//     age:"23",
//     contact: function()
//     {console.log("23211454")},
//     lastName(){
//         console.log("tayade")
//     }
// }
// usr.city= "pune";
// usr.contact();
// console.log(usr);
// console.log(usr.age);

// usr.lastName();

// let usrAge = "age";

// console.log(usr[usrAge]);

// // constructor Function

// function User(name,lastName,age){
//     this.name=name;
//     this.lastName=lastName;
//     this.age=age;
// }

// let newUser = new User("Gaurav","Tayade",24);

// console.log(newUser)
// console.log(newUser.age);

// // for(let [key,val] in newUser)
// // {
// //     console.log(key,val);

// // }

//classes

let user1 ={
    name:"gaurav",
    last:"tayade",
    age:"23"
}

let user2 =Object.create(user1);
console.log(user2);
console.log(user2.last);

console.log(user1.__proto__);
console.log(user2.__proto__);

let str="this is prototype check";

console.log(str.__proto__); //protype strings
console.log(str.__proto__.__proto__); // Object
console.log(str.__proto__.__proto__.__proto__); //null

// String
// Boolean
// Number

// Wrapper classes

let s = new String("this i wrapping primitive datat types in objects");
// str.__proto__ = String.prototype

// let arr =[];
// let arr1 = new Array();
let u1 ={
    x1:"inside u1"
}
let u2 ={
    x2:"inside u2",
    __proto__:u1
}
let u3 ={
    x3:"inside u3",
    __proto__:u2
}

console.log(u3.x3 , u3.__proto__,u2.__proto__ , u1.__proto__);

class USers{
    constructor(name)
    {
        this.name = name;
    }
}

let usr1 = new USers("Gaurav");
console.log(usr1);
console.log(usr1.__proto__);


