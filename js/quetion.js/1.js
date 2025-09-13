
let arr = [1,5,9,2,77,3]
let num = 5;
let a = mergeSort(arr);
let index;
for(let i=0;i<a.length;i++)
{
  if(a[i]== num)
  {
    index= i;
  }
}
console.log(index)

function mergeSort(arr)
{
  if(arr.length <=1)
  {
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let leftarr= arr.slice(0,mid);
  let rightarr = arr.slice(mid);
  let leftSort = mergeSort(leftarr);
  let rightSort = mergeSort(rightarr);

  return sorted(leftSort,rightSort);
}

function sorted(la,ra)
{
  let a = [];
  let i=0,j=0,k=0;
  while( i < la.length && j < ra.length )
  {
    if(la[i]<ra[j])
    {
       a[k]=la[i];
       i++;
    }
    else
    {
      a[k]=ra[j]
      j++;
    }
    k++;
  }

  while( i< la.length)
  {
    a[k]= la[i];
    i++;
    k++;
  }

while( j < ra.length)
{
  a[k]=ra[j];
  j++;
  k++;
}

return a;

}

 let likes = 10 ,comments= 20 ,shares=5;
 let l =  (likes> comments && likes> shares) ? console.log("likes")
 switch(likes,comments,shares)
 {
	case  likes :
	 console.log("likes");
	 breake;
	 case(comments>likes && comments>shares):
	 console.log("comments");
	 breake;
	 case(shares>comments&& shares>likes):
	 console.log("shares")
 }


 