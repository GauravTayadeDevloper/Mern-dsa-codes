// C2: Transport Fare
class Transport {
  // TODO: fare(km) // default
  fare(km)
  {
    console.log(`20rs for per ${km} km`);
  }
}
class Bus extends Transport {
  // TODO: fare(km) // per km
  fare(km)
  {
    console.log(`5rs for per ${km} km`);
  }
}
class Taxi extends Transport {
  // TODO: fare(km) // base + per km
    fare(km)
  {
    console.log(`25rs is base and for per ${km}km is 30rs `);
  }
}
class Metro extends Transport {
  // TODO: fare(km) // slab rules
    fare(km)
  {
    console.log(`15rs for per ${km}km`);
  }
}

// TODO: demo: mixed transports + km array → loop → log fare

let trnsprt = [new Transport(),new Bus(),new Taxi(),new Metro()];
trnsprt.forEach(x=>{
    x.fare("30");
})