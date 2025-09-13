let s1="FrontendDeveloper"
let a= s1.slice(s1.search("Developer"))
console.log(a)
let str = " JAVASCRIPT is FUN "

let s = "gaurav tayade"
    console.log(s.startsWith("gaurav"))
    console.log(s.endsWith("tayade"))

let b = s.split(" ").map(w=> w[0].toUpperCase() + w.slice(1)).join(" ");
console.log(b)
let s2 ="4567yuohiubj323456789@#$%^&)(*&^tyH"
let a1 = s2.replace(/[^a-zA-Z0-9]/g,"")
console.log(a1)

let s3 = "https://www.example.com"
let a2 = s3.replace("https://www.", "")
console.log(a2)

let s4="123456789"
let a3 = s4.slice(0,s4.length -4).replaceAll(/[0-9]/g,"*").concat(s4.slice(-3))
console.log(a3)

console.log(ocount("oookjsbxsooishcboskhasposnlbco"))
function ocount(str)
{let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==="o")
            count++;
    }
    return count ;
}



str1 = str.toLowerCase().trim();
console.log(str1)

console.log(str.split("").reverse().join("").trim())


let s5="Python, Java, and JavaScript are cool"
console.log(s5.match(/Java/g))

let a4 = s5.split(" ").filter(m => m.includes("Java"));
console.log(a4)

console.log(s5.replaceAll(" ","-"))





function expand(str6)
{
    let expanded=""
    for(let i =0;i<str6.length;i++)
    {
        let letter = str6[i];
        let count = str6[i+1];

        if(!isNaN(count))
        {
            // expanded += letter.repeat(Number(count));
            // i++

            for(let j=0;j<(Number(count));j++)
            {
                expanded += letter;
            }
            i++;
        }
        else
        {
            expanded += letter;
        }
    }
    return expanded;
}
console.log(expand("A4B5C8"))


let a5="resume.pdf"
let s6 = a5.slice(a5.search(/\./g)+ 1)
console.log(s6)







 

let vovels =0
let consent=0;
for(let i=0;i<str.length;i++)
{
    if(str[i].match(/[aAeEiIoOuU]/g))
    {
        vovels++;
    }
    else
    {
        if(str[i].match(/[a-zA-z]/))
        {
            consent++;
        }
    }
}

console.log(vovels,consent)

let s7="This is a long message"
console.log(s7.slice(0,10).trim()+"...")


s8="camelCaseStringExample"
let camelCase=s8[0].toUpperCase()+"";
for(let i=1;i<s8.length;i++)
{
    if(s8[i].toUpperCase() === s8[i] )
    {
        camelCase += " ";
    }
    camelCase+=s8[i]
}

console.log(camelCase)


let a6="123lk5"
console.log(!isNaN(a6[2]))
console.log(stringOfNumber(a6))

function stringOfNumber(a6)
{
let a =a6.match(/[0-9]/g);
if(a.length== a6.length)
{
    return true;
}
return false;
}

let a7 = camelCase.split(" ").reverse().join(" ")
console.log(a7)
