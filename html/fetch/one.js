fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data[0]);
})
.catch((error)=>{
    console.log(error);
})