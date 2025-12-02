// // ✅ SECTION A — Very Easy (Basics) (1–10)
// // 1. Write a program using setTimeout to print “Hello JS” after 2 seconds.
// // 2. Write a program to print numbers 1 to 5 with 1-second delay using setInterval.
// // 3. Write a callback function that prints your name.
// // 4. Create a function that accepts a callback and executes it.
// // 5. Using a callback, first print “Start”, then after 1 second print “End”.
// // 6. Simulate fetching data using callback (print {id:1,name:"Jay"} after 2 sec).
// // 7. Write an async callback using setTimeout to display “Task Completed!”.
// // **8. Convert an array [1,2,3] into output:
// // Start
// // 1
// // 2
// // 3
// // End
// // using forEach.**


// //1 
// function hello()
// {
//     setTimeout(()=>{
//         console.log("hello")
//     },2000)
// }
// hello();


// //2
// function delay()
// {
//     let j=0;
//    let i= setInterval(()=>{
        
//         console.log(j++);
//         if(j==6)
//         {
//             clearInterval(i);
//         }
//     },1000)
// }
// delay();

// //3,4

// function callingName(call,name)
// {
//   return call(name);
// }
// function call(name)
// {
//     console.log(`my name is ${name}`)
// }
// callingName(call,"gaurav");


// //5
// function startEnd(callback,s,e)
// {
//         callback(s);
//         setTimeout(()=>{
//             callback(e)
//         },2000)

// }

// function sePrint(w)
// {
//     console.log(w)
// }

// startEnd(sePrint,"Start","End");

// //6

// function fakeFetching(callback)
// {
//     let data ={id:1,name:"Jay"}
//     setTimeout(()=>{
//         callback(data);
//     },2000)
// }

// function desplayFetch(data)
// {
//     console.log("data recieved :",data)
// }

// fakeFetching(desplayFetch);

// //7
// //8
// //9
// let a = new Promise((resolve,_)=>{
//     resolve("success");
// })

// a.then((msg)=>{
//     console.log(msg);
// })

// let b= new Promise((_,reject)=>{
//     reject("Error ocurred")
// })

// b.then((data)=>{
//     console.log()
// }).catch(err=>{
//     console.log(err)
// })


// function promises()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Data Loaded")
//         },3000)
//     })
// }

// let a = promises();
// a.then((data)=>{
//     console.log(data)
// })



// function ageChecker(age)
// {
//     return new Promise((resolve,reject)=>{
//             if(age >= 18)
//             {
//                 resolve("Its adult")
//             }
//             else{
//                 reject("its minor")
//             }
//     })
// }
// let a = ageChecker(18);
// a.then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// });


// function chaining(msg,time)
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(msg);
//             resolve();
//         },time)
//     })
// }

// chaining(1,1000).then(
//     ()=> {return chaining(2,1000)}
// ).then(()=>{
//     return chaining(3,1000)
// })

function fetching(data)
{
    return fetch(data).then((res)=>{
     return   res.json();
    }).then((user)=>
        console.log(user)
    ).catch(err=>{
            console.log(err)
    })
}

fetching("https://jsonplaceholder.typicode.com/users");