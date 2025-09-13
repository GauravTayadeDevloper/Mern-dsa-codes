let mns = 1
console.log(`LOOPS ${mns+mns}`);
let sqr =0;
for(let i = 1 ; i<=10;i++)
{
    sqr = i*i;
    console.log(`square ${i} is ${sqr}`);
}

let sum=0
for(let i=2; i<=50;i+=2)
{
        sum = sum +i;
        
    
}
console.log(`sum of 50 even num ${sum}`);

for(let i = 10 ; i<=100;i+=10)
{
    console.log(`${i}%`)
}
var i = 10 ;
while(i!=0)
{
    console.log(`${i}`);
    i--;
}

for(let i = 1 ; i<=10;i++)
{
    sqr = 7*i;
    console.log(`table 7 x ${i} = ${sqr}`);
}
let number = 1234;
let sum1 = 0,x=0;;
//for(let i = 0;i<number.length(toString);)
while( number >0 )
{
   x = number%10;
   sum1= sum1 + x;
    number = Math.floor(number/10) 

}
console.log(sum1)


let strings = "asasdsdasdasd";

for(let i = 0 ; i<strings.length;i++)
{
    console.log(strings[i]);
}
let factof = 5;
let fact=1;
for(let i = 1 ; i<=factof ; i++)
{
    if(factof==0)
    {
        console.log(fact)

    }
    else
    {
        fact = fact* i;
    }

}
console.log(fact)







let count = 0;
for(let i = 1 ;i<=50;i++ )
{
    if(i%7==0)
    {
        count = count+1;
    }
}

console.log(count)


function qwe()
{ let b = 10;
    for(let  i = 0;i<5;i++)
    {
        let sum = i+i;
      
    }
console.log(sum)
    console.log(i)

}

qwe();