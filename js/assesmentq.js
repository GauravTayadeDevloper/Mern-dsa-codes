let input = 365;
let year = 2025 , days = 30 ,month = 4 , rem;
 year = parseInt(input/365);
 rem = input%365;
month = parseInt(rem/30);
days = rem%30;
console.log(year,month,days);


 let  leap = (year % 4 == 0) ? true : false;
 
if((days==30 )&& (month == (4|| 6 ||9 ||11) ) ||( days == 29 && month == 2 && leap == true )  )
{      
        console.log("valid");
}
else if (days == 31 && month ==(1||3 ||5 || 7 ||8 ||10 ||12))
{
           console.log("valid");
}
else
{
    console.log("invalid")
}