// function numberprinT()
// {   
//     let k = 5 ,m = 5;
//     for(let i = 1; i<=5;i++)
//     { let line = "";
//         for( let j = m; j<=k;j++)
//         {
//              line += j.toString()
//         }
//         m--;
//         console.log(line)
//     }
// }

// numberprinT()
// let arr = [3, 4 ,-7, 3, 1, 3, 1, -4, -2, -2]
// function zeroSubarray(arr) {
// let k = false ;
// for(let i=0;i<arr.length-1;i++)
// {
//     let sum = 0;
//   for(let j = i;j<arr.length;j++)
//   {
//         sum +=arr[j];
//     if(sum===0)
//     {
//       k =true;
//       console.log(`Subarray found from Index ${i} to ${j}`)

//     }
    
//   }
  

// }
// if(k==false) console.log(-1)
// }
// zeroSubarray(arr)

// for (let i = 5; i > 0; i--) {
//     for (let j = i; j >= 1; j--) {
//         process.stdout.write(j.toString());
//     }
//     console.log();
// }


// for(let i =1;i<=5;i++)
// {
//   for(let j = i; j>0;j--)
//   {
//     process.stdout.write(j.toString())
//   }
//   console.log()
// }

  
// for(let i=arr.length;i>=0;i--)
// {
//   arr.pop(arr[i]);
//   console.log(arr)
// }

a = [1,2,3,4]
console.log(a.indexOf(5))