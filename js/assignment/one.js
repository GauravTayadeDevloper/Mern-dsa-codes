// let arr=[1,2,3,4];
// let sum=0;
// arr.forEach((e,ind)=>{
//     console.log(e,ind)
// sum=e+sum;

// })
// console.log(sum)

// function applyToEach(arr,cb){
//     for(let i=0;i<arr.length;i++)
//     {
//         cb(arr[i],i);
//     }
// }
// applyToEach([10,20,30],(v,i)=>{
//     console.log(i,v);
// });

// function fetchDtat(url,callback)
// {
//     setTimeout(()=>{
//         let data = {message:"hii iam the goat"};
//         handelDtat(data);
//     },800)

// }
// function handelDtat(data)
// {
//     console.log(data.message);
// }

// fetchDtat("asdsa.com/data",handelDtat);

// function getUser(id) {
 
//        return new Promise((resolve, reject) => {
//         setTimeout(() => {
   
//             if(id) {
//                 resolve(id);
//             } else {
//                 reject(new Error("Error fetching the data "+id));
//             }
//         }, 700);
//     });

// }

// getUser(1)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));

// getUser(0)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));

//   function add1(x){ return Promise.resolve(x + 1); }
// function double(x){ return Promise.resolve(x * 2); }




// async function run() {
//   // TODO: Use await add1(5) and await double(result)
//   // TODO: Print the final result
// }
// run();

function df(){
fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
    return res.json();
})
.then((data)=>{
    for(let i=0;i<data.length;i++)
    {
        console.log(data[i].name);
    }
    
})
.catch((error)=>{
    console.log(error);
})

}
df();

async function fetchDATA()
{
    try{
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let user = await data.json();
        for(let i=0;i<user.length;i++)
        {
            console.log(user[i].email);
        }
    }       
     catch(error) {
        console.log(error)
    };
}

fetchDATA();