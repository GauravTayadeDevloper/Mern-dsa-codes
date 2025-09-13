let arr = [2,5,6,7,8,9,11,16,25,31,35];
let m =binarysearch(arr,3);
console.log(m)
function binarysearch(arr,n)
{   let size = arr.length;
  
    let low  = 0;
    let high = size-1;
    let not;

    while(low<=high)
    {
        let mid = Math.floor((low + high)/2);
        if(arr[mid]==n)
        {
            return mid;
        }
        else if(arr[mid]>n)
        {
            not = mid;
            high = mid-1;

        }
        else if(arr[mid]<n)
        {
            not = mid;
            low = mid+1;
        }
    }
    return not;
}

function reverseArray(arr) {
//   let b = [],j =0;
//   for(let i = arr.length-1; i>0;i--)
//   {
//     b[j] = arr[i];
//     j++;
//   }
//   return b;
let i = 0, j = arr.length-1,s=0;
  for( i=0;i!=j;i++,j--)
  {
    s=arr[i];
    arr[i]=arr[j];
    arr[j]=s
  }
  return arr;
}
 let k = reverseArray(arr);
 console.log(k)