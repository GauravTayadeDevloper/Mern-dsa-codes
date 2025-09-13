let marks = 69 ;

if(marks>= 90)
{
    console.log("A");
}
else if(marks>=  70 &&  marks<=  89 )
{
    console.log("B");
}
else if(marks>= 50 && marks <=69)
{
    console.log("C");
}else if(marks<= 50)
{
    console.log("F");
}

if(marks>= 90)
{
    console.log("A");
}
else if(marks>=  70  )
{
    console.log("B");
}
else if(marks>= 50)
{
    console.log("C");
}else 
{
    console.log("F");
}


let amount = 0 ;
 if( amount  > 0)
    {
        console.log("Positive")
    } 
    else if( amount < 0)
    {
        console.log('negative')
    }
    else 
    {
        console.log("Zero"); 
    }

UName = "admin";
Pswd = "1234";

if( UName === "admin" && Pswd === "1234")
{

    console.log("Valid Details accepted")
}
else
{
    console.log("inValid Details not accepted")
}

let year = 2024;

if( year % 4 == 0  && year %4!=100)
{
    console.log("leap year")
}
else if( year % 400 )
{
    console.log("leap year")
}
else
{
    console.log("Not leap year ")
}


let age = 18;

let varification = (age >= 18) ? " Valid": "not valid";

console.log(varification);





let number = 6;

switch(number)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("Saterday");
        break;
    case 7:
        console.log("Sunday");
        break;        
}

scolor = "green";

if(scolor === "red")
{
    console.log("Stop")
}
else if(scolor === "yellow")
{
    console.log("Drive Slow")
}
else if( scolor === "green")
{
    console.log("GO GO GO")
}
else 
{
    console.log("invalid action")
}






let amount1 = 454;

if(amount1  % 5 == 0)
{
    console.log("valid amount")
}
else 
{
    console.log("Not valid amamount ")
}


let PAswd = "4545"

if(PAswd.length >8 )
{
    console.log("Strong");
}
else 
{
    console.log("weak");
}

let num = 5
  if ( num %3 == 0 && num %5 == 0)
{
    console.log("FizzBuzz");
}
else if(num % 5 == 0)
{
    console.log("Buzz");
}
else if( num %3 ==0)
{
    console.log('Fizz');
}
else 
{
    console.log(num);
}


let charecter = 'H';

if(charecter === charecter.toLowerCase())
{
    console.log("Lower case")
}
else if(charecter=== charecter.toUpperCase())
{
    console.log("Upper case");
}
else 
{
    console.log("Invalid Input")
}



//let age1= 45, score = 32;

//if( age1 >=50 && age1 >= 10)
//{

//}


let amount2 = 1000;

if(amount2 >= 1000)
{
    console.log(amount2 - (amount2 * 0.1))
}



let age1 = 15;
if(age1 >= 1 && age1<= 11)
{
    console.log("Child")
}
else if(age1 >=12 && age1 >=18)
{
    console.log("teen")
}
 else if(age1 >=19 && age1 >=45)
{
    console.log("adult")
}
else if(age1 >=46)
{
    console.log("sinior")
}




let email = '';
let phone = '8989898989'; 

if(email.length > 4 || phone.length >= 10 )
{
    console.log("LOg in BRov ")
}
else
{
    console.log("no LOgin available bro")
}









