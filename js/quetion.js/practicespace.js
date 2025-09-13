// // // let l2 =[1,2,4,6]
// // // let l1 =[1,2,4,22,5,6]
// // // let n = parseInt(l1.join(""));
// // //  let m = parseInt(l2.join(""));
 
// // //  console.log(n,m) 

// // //  let b = n-m;
// // //   let arr = b.toString().split("").map(Number);
// // //  //return arr;
// // //  console.log(arr)
// // let arr=[3,2,7,1]
// // let m =findTargetIndex(4,arr,2);
// // console.log(m)
// // function findTargetIndex(n, arr, target) {
   
// //    let a = arr;
// //     let b = mergeSort(a);
// //     for(let i = 0;i<n;i++)
// //     {
// //         if(b[i]==target)
// //         {
// //             console.log(i)
// //             return i;
// //         }
// //     }
// // }

// // function mergeSort(a)
// // {
// //     if(a.length<=1)
// //     {
// //         return a;
// //     }
// // let mid = Math.floor(a.length/2)
// // let left  = a.slice(0,mid);
// // let right = a.slice(mid);
// // let SortedLeft = mergeSort(left);
// // let SortedRight = mergeSort(right);
// // console.log(SortedLeft,SortedRight)
// // return merg(SortedLeft,SortedRight);

// // }
// // function merg(l,r)
// // {
// //     let a = [];
// //     let i=0,j=0,k=0;
// //     while( i<l.length && j<r.length)
// //     {
// //         if(l[i]>r[j])
// //         {
// //             a[k]=l[i];
        
// //             i++;
// //         }
// //         else
// //         {
// //             a[k]=r[j]
// //             j++;
// //         }
// //         k++;
// //     }

// //     while(l.length>i)
// //     {
// //         a[k]=l[i];
// //         i++;
// //         k++;
// //     }
// //     while(r.length>j)
// //     {
// //         a[k]=r[j];
// //         j++;
// //         k++;
// //     }
// //     console.log(a)
// //     return a;
// // }

// let arr= ['asdsd','asdsds','sdsd'];
// console.log(arr[0].length)


// let a = [["1", "Dish1", 10],["2", "Dish2", 20], ["3", "Dish3", 30]];
// // console.log(a[2][0],a[2][1],a[2][2])
// for(let i =0;i<3;i++)
// {
//     for(let j =0;j<3;j++)
//     {
//         console.log(a[i][2])
//     }
// }
// let mat =[[1,2,3],[4,5,6],[7,8,9]]
// alternateMatrixSum(mat,3)
// function alternateMatrixSum(mat, n) {
//   let blacks =0,whites=0;
//   for(let i = 0;i<n;i++)
//   {
//     for(let j = 0 ; j<n;j++)
//     {
//       if((mat[i][j])%2!=0)
//       {
//         blacks +=mat[i][j];
//       }
//       else 
//       {
//         whites+=mat[i][j];
//       }
//     }
//   }
// let  a =[8,6,3,4,5,9,12,7,20,22,31,38]
// function solve(arr, n) {
//   let k,count=0;
//   for(let i = 0,j=i+3 ; i<n-3 ;i++,j++)
//   {
//     let m = 0;
//     for(k = i;k<j;k++)
//     { 
      
//       if(arr[k]<arr[k+1])
//       {
//         m++;
//       }
     

//     }
//      if(m==3)
//       {
//       count++;
//       }

//   }
//   console.log(count)
//   return count;
// }
// solve(a,12)
	
//   console.log(blacks,whites);
	
// }


//   for(let i = 0,j=i+4 ; i<a.length-4 ;i++,j++)
// {
// console.log(a[i],a[j])
// }


// nums =[0,0,1,1,1,2,2,3,3,4]
//  let a = new Set(nums);
//   b = Array.from(a);
//   console.log(b);
let prices =[1,2,2]
let pricesa ={"why":"we dont know"};
console.log(typeof(prices)) 
console.log(typeof(pricesa))  
// let max=0;
//     for(let i=0;i<prices.length;i++)
//     {
//         let maxp =0;
//           for(let j=i+1;j<prices.length;j++)
//             {
//               if(prices[i]<prices[j])
//               {
//                 maxp = prices[j]-prices[i];
                
//               }   
//             }
//             if(max < maxp)
//             {
//               console.log(max)
//                 max=maxp;
//             }
//     }
//     console.log(max) ;