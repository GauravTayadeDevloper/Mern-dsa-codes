//assignment 1

// function task(name,ms)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`${name} done in ${ms} ms`)
//         },ms)
//     })
// }

// let a = task("kun",1000);
// let b = task("gro",5000)
// let c= task("sam",3000);

// Promise.all([a,b,c]).then((res)=>{
//     res.forEach(element => {
//         console.log(element)
//     });
// }).then(()=>
// {     console.log("all task Finished");
// }).catch(err=>{
//     console.log(err)
// })

//2


// function task(name,ms)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`${name} done in ${ms} ms`)
//         },ms)
//     })
// }

// let a = task("kun",1000);
// let b = task("gro",5000)
// let c= task("sam",3000);

// Promise.all([a,b,c]).then((res)=>{
//     console.log(res);
//         console.log(`first result is ${res[0]}`)
    
// }).then(()=>
// {     console.log("all task Finished");
// }).catch(err=>{
//     console.log(err)
// })

//3

// function convert(n,ms){
//  return new Promise(resolve=>{
//     setTimeout(() => { 
//         resolve(n*2)       
//     }, ms);

//  })
// }
// let nums =[3,5,9,12];
// let x =nums.map((n)=>{
//     return convert(n,300)
// });

// Promise.all(x).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


//4 

// function okAfter(ms){
//     return new Promise(resolve=>{
//         setTimeout(()=>{resolve(`ok after ${ms}ms`);},ms)
        
//     })
// }
// function failAfter(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(`Fail After ${ms}ms`);
//         },ms)
        
//     })
// }

// Promise.all([okAfter(500),failAfter(800),okAfter(400)]).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })


// function Fakeapi(n,d){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//            console.log(`${n} completed`);
//            resolve(n) 
//         },d);
//     })
// }

// Promise.all([Fakeapi( 'Task 1' ,1500), Fakeapi('Task 2', 10000),Fakeapi( 'Task 3', 500)]).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

// function fakeAPI(n,d)
// {
//     return new Promise(resolve=>{
//         setTimeout(()=>{
    
//             resolve(n);
//         },d)
//     })
// }

// Promise.race([fakeAPI("Promise 1",2000),fakeAPI("Promise 2",700),fakeAPI("Promise 3",1200)]).then(res=>{
//     console.log(`${res} wins`)
// }).catch(err=>{
//     console.log(err)
// })

// let t1 =  new Promise(resolve=>{setTimeout(()=>{resolve('DAta OK')},2500)});
// let t2 =  new Promise((_,reject)=>{setTimeout(()=>{reject('Network Error')},900)});

// Promise.race([t1,t2]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err)
// })

// function timeout(ms){
//     return new Promise((_,reject)=>{
//         setTimeout(()=>{
//             reject("Request timed OUt");
//         },ms)
//     })
// }

// function fakeAPI(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{resolve("Data recieved")},ms)
//     })
// }

// Promise.race([fakeAPI(1200),timeout(1200)]).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

function orderPizza(name,time,shouildfail){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       if(shouildfail===false)
        {

            resolve(`${name} arrived`)
     
        }
        else{
            reject(`${name} failed`)
            
        }
        },time)
        
    })
}

Promise.allSettled([orderPizza("DOminos",1400,false),orderPizza("Pizza Hut",900,true),orderPizza("mojo",600,false)]).then((res=>{
   let arrived = res.filter((r)=>{
    return r.status==="fulfilled";
   })
     let reject = res.filter((e)=>{
        return e.status === "rejected";
    })
   console.log(arrived)
   console.log(reject)
}))
