// ## Assignment 8

// ### Description

// Make one function “type” and another that reuses the first one’s method by linking prototypes. Override a method on the second.

// ### TODOs

// - TODO 1: Create a function with a `kind` field and a `sound()` on its prototype.
// - TODO 2: Create another function that sets its own field (e.g., `name`).
// - TODO 3: Set the second’s prototype to an object linked to the first’s prototype.
// - TODO 4: Override `sound()` on the second’s prototype.
// - TODO 5: Make an instance of the second and call `sound()`.

function One(kind){
    this.kind=kind;
} 
function Two(name)
{
    this.name=name;
}
One.prototype.sound=function(){
    console.log("this is sound ");
}

Two.prototype = Object.create(One.prototype);

Two.prototype.sound=function(){
    console.log(this.name+"this is modified Sound");
}

let instance = new Two("this is for Sound");
instance.sound();