// B1: Device → Phone/Laptop
class Device {
  // TODO: constructor(name)
  // TODO: info()
  constructor(name)
  {
    this.name=name;
  }
  info(){
    console.log(`this is name of a ${this.name} device`)
  }
}

class Phone extends Device {
  // TODO: constructor(name, os)
  // TODO: info() // override
constructor(name,os){
    super(name);
    this.os=os;

}
info(){
    console.log(`this device${this.name} have os ${this.os}`)
}

}

class Laptop extends Device {
  // TODO: constructor(name, ram)
  // TODO: info() // override
constructor(name,ram)
{
    super(name);
    this.ram=ram;

}
info(){
    console.log(`this ${this.name} have ${this.ram}`)
}

}
const d =new Device("Pixel");
d.info();
const lap = new Laptop("DEll aspire","16 GB");
lap.info();
const phone = new Phone("Samsung s24 Ultra","Android")
phone.info();

// TODO: demo with multiple instances
