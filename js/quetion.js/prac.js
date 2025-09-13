
// let str = 'a man, a plan, a canal Panama'
// let n = str.replace(/[^a-z0-9]gi/,'').toLowerCase();
//  console.log(n)
//  let o =n.split('').reverse().join('').toLowerCase();


// console.log(o)

// if(n===o)
// {
//     console.log(1)
// }
// else 
//     {
//         console.log(0)
//     }

// let arr = [21,54,5,6,8,6,9,7]
// let m = mergesort(arr);
// console.log(m)
// function mergesort(arr)
// {
//   if(arr.length <=1)
//   {
//     return arr;
//   }
//   let mid = Math.floor(arr.length/2);
//   let left = arr.slice(0,mid);
//   let right = arr.slice(mid);
//   let mergesortleft = mergesort(left);
//   let mergesortright = mergesort(right);
//   return sorting(mergesortleft,mergesortright)
// }
// function sorting(l,r)
// {
//   let sorted = [];
//   let i=0,j=0;
//   while(l.length >i && r.length >j)
//   {
//     if(l[i]>r[j])
//     {
//       sorted.push(r[j]);
//       j++;

//       }
//       else{
//         sorted.push(l[i]);
//         i++;
//       }
//   }
//   for(;l.length>i;i++)
//   {
//     sorted.push(l[i])
//   }
//   for(;r.length>j;j++)
//   {
//     sorted.push(r[j])
//   }
// return sorted;
// }
StrangeString(5)
function StrangeString(n)
{
    let result = [];
    let charCode = "a".charCodeAt(0);
    for(let i =0;i<n;i++)
    {
        let ch = String.fromCharCode(charCode);
        if(i%2==0)
        {
            result.unshift(ch);
        }
        else
        {
            result.push(ch)
        }
        charCode++;

        if(charCode > "z".charCodeAt(0))
        {
            charCode = "a".charCodeAt;
        }
    }
    console.log(result)
}
