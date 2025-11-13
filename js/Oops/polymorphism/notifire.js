// C1: Notifier Polymorphism
class Notifier {
  // TODO: notify(msg)
  noify(msg)
  {
    console.log(msg );
  }
}
class EmailNotifier extends Notifier {
  // TODO: notify(msg) // override
   noify(msg)
  {
    console.log(`${msg} Email`);
  }
}
class SMSNotifier extends Notifier {
  // TODO: notify(msg) // override
    noify(msg)
  {
    console.log(`${msg} SMS`);
  }
}

let no = [new Notifier(),new EmailNotifier(),new SMSNotifier()];
no.forEach(x=>{
    x.noify("this is notification");
})
// TODO: demo: array of notifiers, call notify in a loop
