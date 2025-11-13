// D1: WashingMachine (Abstraction)
class WashingMachine {
  // TODO: start() → call private steps in order
    start()
    {
        console.log("washing Mechine started");
        this.#fillWater();
        this.#wash();
        this.#rinse();
        this.#spin();
        console.log("Washing Cloths Completed")
    }
   #fillWater(){
    console.log("Water Filling Completed");
   }

   #wash(){
    console.log("cloths washig Completed");
   }

   #rinse()
   {
    console.log("cloths rinsing Completed");
   }

   #spin()
   {
    console.log("spinning to dry cloths");
   }
}

// TODO: demo: call start(); keep commented line calling a private method
let wm = new WashingMachine();
wm.start();