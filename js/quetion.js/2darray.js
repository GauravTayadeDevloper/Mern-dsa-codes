//  var a =[[1,2,3],[4,5,6],[7,8,9]];

// // for(let i = 0;i<a.length;i++)
// // {
// //     for(let j =0 ;j<a[i].length;j++)
// //     {
// //         console.log(a[i][j])
// //     }
// // }

// // for(let e of a)
// // {
// //     for(let v of e)
// //     {
// //         console.log(v)
// //     }
// // }



// let data  =[[40,60],[70,80],[90,100]]

// console.log(data[1][1])
// data[1][0]=95;
// console.log(data)

// for(let el of data)
// {
//     for(let v of el)
//     {
//         console.log(v)
//     }
// }


// let count=0
// for(let i=0;i<a.length;i++)
// {
//     count +=a[i].length;
// }
// console.log(count)


// let sum1 =0;
// for(let el of data)
// {
//     for(let v of el)
//     {
//         sum1=sum1+v;
//     }
// }
// console.log("sum "+sum1)
// let newa=[],k=0;

// for(let i =0;i<a.length;i++)
// {
//     for(let j =0;j<a[i].length;j++,k++)
//         {
//                 newa[k]=a[i][j]
//         } 
// }
// // converting 2d array into 1d array
// console.log(data.flat())
// console.log(newa)

// for(let i = 0;i<a.length;i++)
// {
//     console.log(a[i][0]);

// }

// for(let e of a)
// {
//     for(let j of e)
//     {
//         if(j%2==0)
//         {
//             j = 0;
//         }
//     }
// }
// console.log(a)



// for(let i =0;i<a.length;i++)
// {
//     for(let j =0;j<a[i].length;j++,k++)
//         {
//                 if(a[i][j]%2==0)
//                 {
//                     a[i][j]=0;
//                 }
//         } 
//     }
// console.log(a)
// var a =[[1,2,3],[4,5,6],[7,8,9]];
// let count1=0
// for(let i =0;i<a.length;i++)
// {
//     for(let j =0;j<a[i].length;j++,k++)
//         {
//                 if(a[i][j]%2!=0)
//                 {
//                     count1++;
//                 }
//         } 

//     }
//     console.log(count1)


//     let s =[["as","sa"],["ws","wq"]]

//     s.push(["ds","Ssd"])
//     console.log(s)

let  board =[[1,2,3],[4,5,6],[7,8,9]];

let count1=0;
let matrix = [[4,7,2],[9,6,1],[8,3,5]]
for(let i =0;i<matrix.length;i++)
{
    for(let j =0;j<matrix[i].length;j++,k++)
        {
                if(matrix[i][j]%2!=0)
                {
                    count1++;
                }
        } 

    }
    console.log(count1)