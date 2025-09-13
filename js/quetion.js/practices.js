let x=-120;
var reverse = function(x) {
    let a=x,sum="";
    if(x<0)
    {   a = Math.abs(a);
        sum="-"
    }
    while(a>0)
    {
        let b= a%10;
         sum += b;
        a=Math.floor(a/10);
    }
    
    return parseInt(sum);
};
console.log(reverse(x))