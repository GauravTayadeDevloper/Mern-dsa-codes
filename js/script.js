function reverse(arr)
{
    return arr.reverse();
}
let a = [1,2,3,4 ,3,4,5,5,6,7,8]
console.log(a)
console.log(reverse(a));
let rev = a.reverse();

let max = Math.max(...a);
let min = Math.min(...a);


console.log(max,min);

let b = [1,2,3,4,5,6,7,8]

let sum = b.reduce((acc , val)=>acc+val,0);
console.log(sum);

function isSorted(a)
{
    for(let i=1; i<a.length; i++)
    {
        if(a[i] < a[i-1])
            return false;
        else
            return true;
    }
   
}

function countEvenOdd(a)
{
    let even =0 ,odd=0;
    for(let i=0; i< a.length;i++)
    {
        if(a[i]%2 === 0)
        {
            even++;
        }
        else{
            odd++;

        }
        
    }
    return {odd: odd,even: even};
}
let arr = [1, 2, 3,0, 4,0 ,5 ,6];
let even = arr.filter(x => x % 2 === 0).length;
let odd = arr.filter(x => x % 2 !== 0).length;
console.log("Even:", even, "Odd:", odd);



let oe = countEvenOdd(a);
console.log(oe)

console.log(isSorted(rev));

function Searchelement(a,target)
{
    return a.indexOf(target) !==-1;
}
console.log(Searchelement(a,3));

let ducplicate = a.filter((d,i)=>a.indexOf(d) !==i);
console.log([...new Set(ducplicate)]);


function Rotate(arr, r)
{
    for(let i = 0 ; i<r; i++)
    {
        let last = arr.pop();
        arr.unshift(last);

    }
    return arr;
}
let r = 6;
let rota = Rotate(arr,r);
console.log(rota);


function SecondLarge(arr) {
    let second = [...new Set(arr)].sort((a,b)=>b-a);
    console.log(second[1]);
    
}
SecondLarge(arr);


function Move0end(arr)
{
    let result = arr.filter(x=> x !==0);
    let zero = arr.length - result.length;
    return result.concat(Array(zero).fill(0));
}

console.log(Move0end(arr));


let pn = 1234321
function Palindromeany(pn)
{
    return pn < 0 ? false : pn == pn.toString().split("").reverse().join("");
}

let palno = Palindromeany(pn);
console.log(palno)

function fibonacci (n) {
    let fib=[0,1];

    for(let i=2; i <= n ;i++)
    {
        fib.push(fib[i-1]+fib[i-2]);

    }
    return fib[n];
}
let nombur = 10
let fibooo = fibonacci(nombur)
console.log(fibooo)


function anagram(a,b)
{
    return a.split("").sort().join("") == b.split("").sort().join("") ? true : false
}

let an = 'anagram'
let bn = 'nagram'
console.log(anagram(an,bn));


function twoSum(a,t)
{
    for(let i=0;i< a.length ;i++ )
     {
        for(let j = i+1 ; j< a.length;j++)   
            {
              if((a[i] +a[j] ) == t )
                return [i,j];
             }
     }
}

console.log(twoSum([1,3,7,2,4],9));


function maxpofit(a)
{
    let Minprice = a[0];
    let profit = 0;
    for(let i=1;i<a.length;i++)
    {
        if(a[i]< Minprice)
        Minprice= a[i];
    profit = Math.max(profit,a[i]-Minprice);
    }
    return profit;
}
console.log(maxpofit([0,3,2,7,2]));


function mergeSort(arr)
{
    if(arr.length<=1)
    {
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid)
    let right = arr.slice(mid);
    let shortedleft=mergeSort(left)
    let shortright=mergeSort(right)

    return merge(shortedleft,shortright);
}

function merge(l,r)
{
    let result = [];
    let i=0,j=0;
    while(i<l.length && j<r.length)
    {
        if(l[i]<r[j])
        {
            result.push(l[i]);
            i++
         }
         else {
            result.push(r[j]);
            j++;
         }
    }

    return result.concat(l.slice(i)).concat(r.slice(j));
}
let sortedArr = mergeSort(arr);
console.log(sortedArr); 


function findDuplicate(arr)
{
    let size = arr.length
    let freq = [0];
    let k=[0];
    for(let i =0 ;i<size;i++)
    {
        freq[arr[i]]++;
    }
    let j =0;
    for(let i = 0; i<size;i++)
    {
        if(freq[i] > 0)
        {
            k[j]=a[i];
            j++;
        }

    }

    console.log(k);
}
findDuplicate(arr);


function supermarket(prices, n, k) {
 let m = mergeSort(prices);
 let cost =0;
 for(let i=2;i<n && i<k+2;i++)
 {
      cost = cost + m[i];
 }
return cost;
  }

function mergeSort( prices)
{
  if(prices.length <= 1)
  {
    return prices;
  }
  let mid = Math.floor(prices.length/2);
  let left=prices.slice(0,mid);
  let right=prices.slice(mid);
  let mergeSortLeft= mergeSort(left);
  let mergeSortRight= mergeSort(right);

  return merge(mergeSortLeft,mergeSortRight);
}

function merge(ls,rs)
{
  let sorted = [];
  let i=0,j=0,k=0;
  while(ls.length > i && rs.length >j )
  {
      if(ls[i]<rs[j])
      {
        sorted[k]= ls[i];
        i++;
      }
      else
      {
        sorted[k]=rs[j];
        j++;
      }
    k++;
  }
  while(i<ls.length)
  {
    sorted[k]=ls[i];
    i++;
    k++;
  }
  while(j<rs.length)
  {
    sorted[k]=rs[j];
    j++;
    k++;
  } 

return sorted;

}



let xya = 9 ;
console.log(--xya);
console.log(xya)

console.log(xya--)