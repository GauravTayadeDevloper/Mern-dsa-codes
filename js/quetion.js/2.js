let arr = [23,56,88,6,51]
let bc = smallestGreaterElements(arr);
console.log(bc)
function smallestGreaterElements(arr) {
let m = bubblesort(arr);
let op= [];
for(let i = 0 ;i<arr.length;i++)
{

   op[i]= arr[m.indexOf(arr[i+1])];

}
return op;
}

function bubblesort(a)
{
  let swap =0;
  let n= a.length;
  for(let i =0 ;i<n-1;i++)
  { 
    for(let j = 0 ; j<n-i-1;j++)
    {    
        if(a[j]>a[j+1])
         {
            swap = a[j+1];
            a[j+1]=a[j];
            a[j]=swap;
        }
    }
  }
  return a;
}
