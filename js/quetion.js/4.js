
function smallestGreaterElements(arr) {
let sort = arr;
let m = bubblesort(sort);
let op= [],k=0;
for(let i = 0 ;i<arr.length;i++)
{
     for(let j= 0 ;j<arr.length;j++)
     {
       if( arr[i]==m[j])
              {
                op[k]=m[j+1];
                k++;
              }
           
     }

}
console.log(op);
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


