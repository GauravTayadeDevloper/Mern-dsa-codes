let arr= [1,2,5,7,7,8,5,5]
// array to set
let s = new Set(arr)
console.log(s)
// set to array
m =Array.from(s);
console.log(m)
// size of set
console.log(s.size)
// accesing traversing through the set
for(let a of s)
{
    console.log(a)
}
s.forEach(element => {
 console.log(element)   
});
// does set have this value
console.log(s.has(7))
// delete that set value
s.delete(5)
console.log(s)

function GoodSTing(s ,A,n)
{   let count =0;
    let charSet = new Set(s);
    for(let i =0;i<n;i++)
    {
        let word = A[i];
        let Good= true;
        for(let ch of word)
        {
            if(!(charSet.has(ch)))
            {
                Good = false;
                break;
            }
        }
        if(Good)
        {
            count++;
        }
    }
    console.log(count);
}
let sstr ="abc";
let A = ['ab','abd','cacb','cabef']
GoodSTing(sstr,A,A.length   )



let ns = new Set()
ns.add(2)
ns.add(3)
ns.add(4)

for(let s of ns)
{
    console.log(s)
}

ns.delete(3)
console.log(ns.has(3))
for(let s of ns)
{
    console.log(s)
}
console.log(ns.has(4))
console.log(ns.size);
ns.clear()
console.log(ns.size);


let list1=[1,2,3]
let list2=[3,4,5]
let op = []
   op.push(new Set([...list1,...list2]).size);
   console.log(op)