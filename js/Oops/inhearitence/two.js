// B2: Employee → Manager/Intern
class Employee {
  // TODO: constructor(name)
  // TODO: intro()
  constructor(name)
  {
    this.name = name;
  }
  intro()
  {
    console.log(`helloe my name is ${this.name}`);
  }
}

class Manager extends Employee {
  // TODO: constructor(name, dept)
  constructor(name,dept){
    super(name);
    this.dept=dept;
  }
  intro(){
    super.intro();
    console.log(`Department: ${this.dept}`);
  }
  // TODO: intro() // call super.intro() then log dept
}

class Intern extends Employee {
  // TODO: constructor(name, durationMonths)
  constructor(name,durationMonths)
  {
    super(name);
    this.durationMonths=durationMonths;
  }
  // TODO: intro() // customized message
  intro()
  {
    console.log(`duration ${this.durationMonths}`)
  }
}

// TODO: demo all three

// let emp = new Employee("Kun");
// emp.intro();
let m = new Manager("Ronaldo","Sports");
m.intro();
let intern = new Intern("Messi","12 Months");
intern.intro(); 