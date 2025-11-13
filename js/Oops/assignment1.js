let user={
    name:"Gaurav",
    age:"23",
    info : function ()
    {
        console.log(this.name);
    }
}

user.NewAge="24";
class User{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    getName(){
        let nAge = 2*Number(this.age);
        console.log(this.name,this.age);
        console.log("this is kun ages: " + nAge);
    }
}

let newUser = new User();
newUser.name="Kun";
newUser.age=32;

console.log(user);
console.log(newUser);
newUser.getName();
