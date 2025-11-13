// C3: Shape Areas
class Shape {
  // TODO: area()
  area()
  {
    console.log("we calculate area here ")
  }
}
class Circle extends Shape {
  // TODO: constructor(r)
  constructor(r)
  {
    super();
 this.r= r;
  }
  // TODO: area()
  area()
  {
    let pi = 3.14;
    let a = pi*(this.r * this.r);
    console.log("area of circle is "+ a)
  }

}
class Rectangle extends Shape {
  // TODO: constructor(w, h)
  constructor(w,h)
  {
    super();
    this.w=w;
    this.h=h;
  }
  area()
  {
    let a = this.w* this.h;
    console.log("Area of Rectangle"+a);
}
}
class Triangle extends Shape {
  // TODO: constructor(b, h)
  // TODO: area()
  
  constructor(b,h)
{
    super();
    this.b=b;
    this.h=h;
  }
  area()
  {
    let a= (this.b* this.h)/2;
    console.log("area of Traingle is "+a);
  }
}

// TODO: demo: array of shapes → compute total area
let shape= [new Shape(),new Circle(6),new Rectangle(5,6),new Triangle(6,8)];
shape.forEach(x=>{
    x.area();
})