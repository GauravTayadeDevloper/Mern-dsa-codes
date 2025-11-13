// let fileUpload = new Promise((resolve,reject)=>{
//     let speed= 50;
//     console.log("upload a file")
//     setTimeout(()=>{
//         if(speed >=40)
//         {
//             resolve("file uploading ....")
//         }
//         else
//         {
//             reject("file cant be uploaded speed to low.....")
//         }
//     },2000)
// })

// fileUpload.then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("task completed")
// })


// let transaaction = new Promise((resolve,reject)=>{
//     let amount = 5000;
//     let widrawal=3000;
//     console.log("amount widrawing")
//     setTimeout(()=>{
//         if(amount>=widrawal)
//         {
//             resolve("widrawed amount successfully...")
//         }
//         else{
//             reject("mony cant be widrawn...")
//         }
//     },2000)
// })

// transaaction.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Transaction Completed")
// })


// promise chaining
// login
// fetch user detail
// render dashboard
new Promise((resolve) => {
    setTimeout(() => {
        resolve("step 1: user logged in 👤")
    }, 1500)
})
.then((msg) => {
    console.log(msg);
    return "step 2: fetched user detail 📦"
})
.then((msg) => {
    console.log(msg);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("step 3: rendered user dashboard 🖥️")
        }, 1000);
    })
})
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("rendering dashboard process completed!");
})