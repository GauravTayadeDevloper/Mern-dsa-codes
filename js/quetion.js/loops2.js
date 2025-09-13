for(let i = 1 ; i<=4;i++ )
{
    for (let j = 1;j<=i;j++)
    {
            process.stdout.write("* ")
    }
    console.log()
}

for(let i = 1; i<=5;i++)
{
    for(let j = 1; j<=i;j++)
    {
        process.stdout.write(j.toString());
    }
    console.log()
}

for(let i=1;i<=5;i++)
{for(let j=1;j<=i;j++)
{
    process.stdout.write(i.toString())

}
console.log()
}

for(let i = 5; i>0;i--)
{
    for(let j = 1; j<=i;j++)
    {
        process.stdout.write("*")
    }
    console.log()
}

for(let i = 5; i>0;i--)
{
    for(let j = 1; j<=i;j++)
    {
        process.stdout.write(j.toString())
    }
    console.log()
}


for(let i = 1 ; i<=4;i++ )
{
    for (let j = 1;j<=i;j++)
    {
            process.stdout.write("* ")
    }
    console.log()
}

function pyramid()
{
    let n = 7;
let sp  = n-1;
let st = 1;

for(let i = 1; i<=n;i++)
    {
        for(let j = 1; j<=sp;j++)
            {
                process.stdout.write(" ")
            }
     
        for(let k = 1 ; k<=st ;k++)
            {
                process.stdout.write("*")
            } 
     sp--;
    st+=2;
    console.log()
    }

}
pyramid();
 
function pyramid_ulta()
{
        
let n = 7 ; 
let sp = 0 ,st = n*2-1;
for(let i = 1; i<=n;i++)
{
    for(let j = 1 ; j<=sp ;j++)
    {
        process.stdout.write(" ");
    }
    for( let k = 1; k<=st;k++)
    {
        process.stdout.write("*")

    }

    st-= 2;
    sp ++;
    console.log()
}

}

pyramid_ulta()

function diamond()
{
 let  n =7;
 let sp = n-1;
 st = 1;
 for(let i = 1; i<=n*2;i++)
 {
    for(let j =1 ;j<=sp;j++)
    {
        process.stdout.write(" ")
    }
    for(let k = 1 ;k<=st;k++ )
    {
        process.stdout.write("*")
    }

    if(i<= n-1)
    {
        sp--;
        st+=2;
    }
    else if(i==n)
    {
        sp=0;
        st = 2*n-1;
    }
    else
    {
        sp++;
        st -=2;
    }
    console.log()
 }
}
diamond();
  let sp = n - 1;  // spaces before stars
  let st = 1;      // number of stars on current row

  for (let i = 1; i <= n; i++) {
    // print leading spaces
    for (let j = 1; j <= sp; j++) {
      process.stdout.write(" ");
    }

    // print stars with spaces between them
    for (let k = 1; k <= st; k++) {
      // print star on edges or if last row
      if (k === 1 || k === st || i === n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }

      // print space between stars except after last star
      if (k < st) {
        process.stdout.write(" ");
      }
    }

    console.log();

    sp--;
    st++;
  }



