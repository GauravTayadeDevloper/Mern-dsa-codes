// Promise.all()

// function orderPizza(name,time)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`${name} Arrived`);
//         },time)
//     })
// }
// let p1 = orderPizza("pizza HUt",2000)
// let p2 = orderPizza("Dominos",3000)
// let p3=orderPizza("Mojo",1500);

// Promise.all([p1,p2,p3]).then((result)=>{
//     result.forEach((ele)=>{
//         console.log(ele);
//     })
//     console.log("all Pizzas Arived")
// })
// .catch((err)=>{
//     console.log(err);
// })

// const p1= Promise.resolve("Success 1")
// const p2= Promise.reject("Failed 2")
// const p3= Promise.resolve("Success 3")
// const p4= Promise.reject("Failed 4")

// Promise.all([p1,p2,p3,p4]).then((results)=>{
//     console.log(results);
// })
// .catch((err)=>{
//     console.log(err);
// })

const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");
// Promise.all([userData,postData,commentData]).then(res=>{
//     res.forEach((ele)=>{
//         ele.json(ele).then((e)=>{
//             console.log(e)
//         }

//         )
//     })
// }).catch(err=>{
//     console.log(err);
// });
Promise.all([userData,postData,commentData]).then((res)=>{
    return Promise.all(res.map ((e)=>{
        return e.json();
    }))
}).catch(err=>{
    console.log(err);
});


// let  p1=Promise.resolve(userData);
// let  p2=Promise.resolve(postData);
// let  p3=Promise.resolve(commentData);
// Promise.all([p1,p2,p3]).then(res=>{
//     res.forEach((ele)=>{
//         ele.json(ele).then((e)=>{
//             console.log(e)
//         }

//         )
//     })
// }).catch(err=>{
//     console.log(err);
// });



// parallel
// function fakeAPI(name, delay) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log(name + " completed");
//       resolve(name);
//     }, delay);
//   });
// }



// Promise.all([
//   fakeAPI("Task 1", 2000),
//   fakeAPI("Task 2", 3000),
//   fakeAPI("Task 3", 1000)
// ])
// .then(function() {
//   console.log("✅ All done (Parallel)");
// });

// SEQUENTIAL


// fakeAPI("TASK 1",2000).then(()=>{
//     return fakeAPI("TASK 2",3000);
// }).then(()=>{
//     return fakeAPI("TASK 3",1000);
// }).then(()=>{
//     console.log("all done seqentially")
// }).catch(err=>{
//     console.log(err)
// })

//Promise.race()


// Promise.race()
// example - 1
// const p1 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 1"), 2000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 2"), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 3"), 3000));

// Promise.race([p1, p2, p3])
// .then((result) => {
//     console.log("First resolved", result);
// })
// .catch((err) => {
//     console.log(err);
// })




// example - 2
// const p1 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 1"), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => reject("🏆 Promise 2 failed"), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 3"), 3000));

// Promise.race([p1, p2, p3])
// .then((result) => {
//     console.log("First completed", result);
// })
// .catch((err) => {
//     console.log(err);
// })



// example - 3
const pizzaDelivery = (name, time, shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldFail
                ? reject(`${name} failed ❌`)
                : resolve(`${name} delivered in ${time / 1000}s 🍕`);
        }, time);
    });
};

const dominos = pizzaDelivery("Dominos", 3000, false);
const pizzaHut = pizzaDelivery("Pizza Hut", 2000, false);
const mojo = pizzaDelivery("Mojo", 1000, false);

Promise.race([dominos,pizzaHut,mojo]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})


// API Timeout
// Timeout promise
// const timeout = (ms) => new Promise((resolve, reject) => {
//     setTimeout(() => reject("⏰ Request timed out!"), ms);
// });

// Fake API request
// const fakeAPI = new Promise(resolve => {
//     setTimeout(() => resolve("✅ Data received successfully"), 2000);
// });

// Run race between API & timeout

Promise.race([fakeAPI,timeout(1000)])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
});


// predict output - 1
// const fast = new Promise(resolve => setTimeout(() => resolve("🚀 Fast"), 1000));
// const medium = new Promise(resolve => setTimeout(() => resolve("🚗 Medium"), 2000));
// const slow = new Promise(resolve => setTimeout(() => resolve("🐢 Slow"), 3000));

// Promise.race([fast, medium, slow])
//   .then(res => console.log("Winner:", res));





// predict output - 2
// const p1 = new Promise(resolve => setTimeout(() => resolve("✅ Success"), 3000));
// const p2 = new Promise((_, reject) => setTimeout(() => reject("❌ Error"), 1000));

// Promise.race([p1, p2])
//     .then(result => console.log("Result:", result))
//     .catch(error => console.log("Caught:", error));


// Promise.allSettled()
// You want each promise’s result, success or failure.
// Promise.allSettled()

// example - 1
// const p1 = Promise.resolve("✅ User loaded");
// const p2 = Promise.reject("❌ Posts failed");
// const p3 = Promise.resolve("✅ Comments loaded");


// Promise.allSettled([p1, p2, p3])
// .then((results) => {
//     // console.log(results);
//     results.forEach((result) => {
//         if(result.status === "fulfilled") {
//             console.log(result.value);
//         } else {
//             console.log(result.reason);
//         }
//     })
// })




// example - 2
const orderPizza = (name, time, shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldFail ? reject(`${name} failed ❌`) : resolve(`${name} arrived 🍕`);
        }, time);
    });
};

const dominos = orderPizza("Dominos", 2000, false);
const pizzaHut = orderPizza("Pizza Hut", 1500, true);
const mojo = orderPizza("Mojo", 1000, false);

Promise.allSettled([dominos, pizzaHut,mojo])
.then((results) => {
    let arrived = results.filter((result) => {
        return result.status === "fulfilled"
    })
    .map((result) => {
        return result.value
    })

    let failed = results.filter((result) => {
        return result.status === "rejected"
    })
    .map((result) => {
        return result.reason
    })

    console.log("Arrived", arrived);
    console.log("Failed", failed);
})

// arrived : [Dominos arrived, Mojo arrived]
// not-arrived : [Pizza Hut Failed]


//Promise.any()
//Success matters more than speed; failures are acceptable.

// Promise.any()
const cab = (name, time, willArrive) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            willArrive
                ? resolve(`${name} confirmed 🚕`)
                : reject(`${name} canceled ❌`);
        }, time);
    });

let p1 = cab("Ola", 2000, false);
let p2 = cab("Uber", 1500, true);
let p3 = cab("rapido", 1800, true);

Promise.any([p1, p2, p3])
.then((result) => {
    console.log("First confirmed:", result);
})
.catch((err) => {
    console.log(err);
})

fake