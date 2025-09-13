// // let  board =[[1,2,3],[4,5,6],[7,8,9]];

// let count1=0;
// let matrix = [[4,7,2],[9,6,1],[8,3,5]]
// for(let i =0;i<matrix.length;i++)
// {
//     for(let j =0;j<matrix[i].length;j++)
//         {
//                 if(matrix[i][j]%2!=0)
//                 {
//                     count1++;
//                 }
//         } 

//     }
//     console.log(count1)



// let matrix =[[1,2,3],[4,5,6]];
// let b = matrixTranspose(matrix);
// function matrixTranspose(matrix) {
//   let rows = matrix.length;
//   let cols = matrix[0].length;
//   let matr = [];

//   for (let i = 0; i < cols; i++) {
//     matr[i] = [];
//     for (let j = 0; j < rows; j++) {
//       matr[i][j] = matrix[j][i];
//     }
//   }
//   return matr;
// }
// console.log(b)
let matrix =[[1,2,3],[4,5,6],[7,8,9],[11,12,13]];

// let sum=0,sum2=0 ;
// let m;
// for(let i = 0 ; i<matrix.length;i++)
// {
//     let sum=0 ;
//     for(let j =0 ;j<matrix[i].length;j++)
//     {
//         sum=sum+matrix[i][j];
//         if(sum >sum2 )
//             {
//                 sum2 = sum;
//                 m =i+1;
//             } 
//     }
// }
// console.log(m)

let j =0;
for(let i = 0 ; i<matrix.length;i++)
{
   if( j <matrix.length-1)
   {
    for( j =0 ;j<matrix[i].length;j++)
        {
            console.log(matrix[i][j])
        }
    }
    else
    {
          for(j =matrix[i].length-1 ;j>=0;j--)
        {
             console.log(matrix[i][j])
        }  
    }
}
