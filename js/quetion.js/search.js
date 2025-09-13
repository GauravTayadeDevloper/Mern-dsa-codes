let f=5;

let a= [1,2,3,5,5,5,5,5,5,5,5,6,7,8,10,22]

// function search(f,a)
// {
//     let index=-1;
//     for(let i=0;i<a.length;i++)
//     {
//         if(f===a[i])
//         {
//             index = i;
//             return index
//         }
//     }
//     return index
// }

// console.log(search(f,a))
console.log(binaraysearch(f,a))
function binaraysearch(f,a)
{
    let n =a.length;
    let high = n-1;
    let low = 0;
   
    while(low<=high)
    {
        let mid = Math.floor((low+high)/2)
        if(a[mid]==f)
        {
            return mid;
            //high = mid-1; //
        }
        else if( a[mid]>f)
        {
           
            high = mid-1;
        }
        else if(a[mid]<f){
            low =mid+1;
        }
    }
    return -1;

}