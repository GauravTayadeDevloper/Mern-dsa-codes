// ## Assignment 4

// ### Description

// Use a base object to share a method, and make a new object from it using `Object.create`. The child object should have its own `title` and use the base’s `describe()`.

// ### TODOs

// - TODO 1: Make a base object with `describe()` returning `"Title: <title>"`.
// - TODO 2: Create a child object via `Object.create(base)`.
// - TODO 3: Set `child.title = "My Note"` and call `child.describe()`.

// function Describe(title)
// {    
//         this.title =title;
   
// }
// let parent = new Describe("Ronaldo jr")

// let child = Object.create(parent);

// Describe.prototype.t =function(){
//     console.log(this.title);
// }
// parent.t();
// child.t();

const base={
    describe(){
        return `Title: ${this.title}`;
    }
};

const note = Object.create(base);
note.title = "my notesss";
console.log(note.describe());