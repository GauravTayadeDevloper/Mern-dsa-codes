// D3: DoorLock
class DoorLock {
   #pin = ""


  setPin(pin)
  {
    if(pin.length == 4)
    {
        this.#pin = ""+pin;
    console.log("pin setting success fully");
    }
    else{
        console.log("its not correct length");
    }
    
  }

  // require 4 chars (string)

  unlock(tryPin)
  {
    if(tryPin ===this.#pin)
    {
        console.log("Unlocked")
    }
    else{
        console.log("incorrect")
    }
  } // compare with #pin
}

// TODO: demo: set pin, try wrong & correct pin; avoid direct access

let p = new DoorLock();
p.setPin("1234");
p.unlock("1234");