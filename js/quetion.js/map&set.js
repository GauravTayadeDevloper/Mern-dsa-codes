let a =[1,2,2,3,3,2]
// let a =[1,2,3]

// // let s = new Set(a)
// console.log(s.size);

// for(let i=0;i<a.length;i++)
// {
//     s.add(a[i])
// }

// console.log(s.size);

// function dp(a){
//let s = new Set()
// for(let i=0;i<a.length;i++)
// {
//         if(s.has(a[i]) )
//         {
//             return true;
//         }
//         s.add(a[i])

// }
//     return false;
// }

// function dp(a){

// let j = new Set(a)
// if(j.size !== a.length) return true;
// else{
//     return false;
// }
    
// }

// console.log(dp(a))

 let s= "abc"
// function freqcount(s)
// {
//  let frqMap = new Map()

//  for(let i=0;i<s.length;i++ )
//  {
//     if(frqMap.has(s[i]))
//     {
//         frqMap.set(s[i],frqMap.get(s[i])+1)
//     }
//     else
//     {
//         frqMap.set(s[i],1)
//     }
//  }
//  console.log(frqMap)
// }
// freqcount(s)

function repeat(s)
{
    let m =[]
    let rep = new Set()
    for(let i=0;i<s.length;i++)
    {
        if(rep.has(s[i]))
        {
            return s[i];
        }
        else{
            rep.add(s[i])
        }
    }
return null
}
console.log(repeat(s))



// function minDeletions(word1, word2) {
//   let w1 = word1.split("").sort().join("");
//   let w2 = word2.split("").sort().join("");
// let count=0;
// if(w2 ===w1)
// {
//   return count;
// }
// let s1 = new Set(w1)
// let s2 = new Set(w2)

// let wrd1 = Array.from(s1)
// let wrd2= Array.from(s2)
// let n=0;
// if(wrd1.length>wrd2.length)
// {
//   n =wrd1.length;
// }
// else
// {
//   n =wrd2.length;
// }
//   for(let i =0 ;i<n;i++)
//   {
//     if(!(wrd1.includes(wrd2[i])) ||!(wrd2.includes(wrd1[i])) )
//     {
//       count++;
//     }

//   }

// let diff =w1.length -  s1.size;
// let diff2 = w2.length - s2.size;

// // console.log(count,diff,diff2)

// return count+diff+diff2;



// }