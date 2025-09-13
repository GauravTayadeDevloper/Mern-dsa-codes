

let str = "qwerty"
function reversestring(str)
{
    let s="";
    
    for(let i=str.length-1;i>=0;i--)
    {
        s += str[i];
    }
    return s;
}
console.log(reversestring(str))

function factorial(n)
{
    if (n==0 || n==1)
    {
        return 1;
    }
   
    return n*factorial(n-1)
}

console.log(factorial(5))
let arr=[1,6,5,8,6,9]
console.log(secondLargest(arr))
function secondLargest(arr)
 {
// let large = -Infinity;
// let secondLarge = -Infinity;
// for(let i=0;i<arr.length;i++)
//     {
//         secondLarge = large;

//         if(large < arr[i])
//         {
//             large = arr[i]
                
            
//         }
//     }
    
// console.log(large,secondLarge)
let a = [...new Set(arr)].sort((a,b)=>a-b);
if(a.length<2)
{
    return -1;
}

return a[a.length-2]
}

function anagram(s1,s2)
{
    if(s1.split("").sort().join("") === s2.split("").sort().join(""))
    {
        return true;
    }
    return false;
}

function fib(n)
{
    if(n===1)
    {
        return 0;
    }
    if(n== 2)
    {
        return 1;
    }
    return fib(n-2) + fib(n-1)
}

console.log(mergeSort(arr))

function mergeSort(arr)
{
    if(arr.length<=1)
    {
        return arr;
    }
    let left = arr.slice(0,Math.abs(arr.length/2))
    let right = arr.slice(Math.abs(arr.length/2))

    let leftsort = mergeSort(left)
    let rigthsort = mergeSort(right)

    return merg(leftsort,rigthsort);
}
function merg(l,r)
{
    let i =0 , j =0, a=[];
    while(i<l.length && j<r.length)
    {
        if(l[i]>r[j])
        {
            a.push(l[i])
            i++;
        }
        else
        {
            a.push(r[j])
            j++;
        }
    }

    while(i<l.length)
    {
        a.push(l[i])
        i++;
    }
    while(j<r.length)
    {
        a.push(a[j])
            j++;
    
    }
    return a;
}


let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];

let filtered = users.filter(user=> user.age> 23).map(user => user.name)
console.log(filtered)