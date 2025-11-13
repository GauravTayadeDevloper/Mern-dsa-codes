

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("three");
// }, 3000);
// console.log("four");
// 200 lines (sync)


// output
// -------------
// one
// two
// four
// three

// let arr = [2, 4, 6];

// arr.forEach((elem) => {
//     console.log(elem);
// });


// function fetchData(url,callback)
// {
//     setTimeout(()=>{
//         let data = {message: "here is data my boi take it"};
//         callback(data);

//     },2000);
// }

// function callback(data)
// {
//     console.log(data.message);
// }

// fetchData("eaxample.com",callback);


// callback
// function fetchData(url, callback) {
//     setTimeout(() => {
//         let data = {message: "here is data required"};
//         callback(data);
//     }, 2000);
// }

// function handleData(data) {
//     console.log(data);
// }

// fetchData("example.com/data", handleData);



// promise

// function fetchData(url)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let data = {message:"Take this new data my boi"};
//             if(data)
//             {
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("error in data fetching my boi"));
//             }
//         },2000)
//     })
// }

// fetchData("exaples.com/data").then((data)=>{
//     console.log(data.message);
// })
// .catch((error)=>{
//     console.log(error);
// });

// function fetchData(url) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         let data = {message: "here is data required"};
    //         if(data) {
    //             resolve(data);
    //         } else {
    //             reject(new Error("Error fetching the data"));
    //         }
    //     }, 2000);
    // });
// }

// then and catch
// fetchData("example.com.data")
// .then((data) => {
//     console.log(data.message);
// })
// .catch((error) => {
//     console.log(error);
// })

// async await

// async function printData() {
//     try{
//         let data = await fetchData("exaple.com/data");
//         console.log(data.message);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
    
// }
// printData();

// fetch
// fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// then and catch for fetch
 
// async await for fetch

async function fetchData(){
    try{
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json();
    console.log(data);
    }
    catch(error) {
        console.log(error)
    };
    // .then((data)=>{
    //     console.log(data);
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })
}

fetchData();