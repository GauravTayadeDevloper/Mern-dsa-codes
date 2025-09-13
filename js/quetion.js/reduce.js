let a = [ -5,-1,-2,-6,-3,-4]

let b =  a.reduce((a,e)=>{ 
    return a*e;
},1)
console.log(b);


let s = a.reduce((a,e)=>{return a+e},0);
console.log(s)

let max = a.reduce((a,e)=>{
    if(a<e)
    {
        a=e;
    }
    return a;
});

console.log(max)