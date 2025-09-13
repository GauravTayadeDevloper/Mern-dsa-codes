
let str = "NOjobsHere"

let str1 = "        NOjobsHere        "
 console.log(str.concat("rightNow"))
 console.log(str1.trim())
 console.log(str.startsWith("N"))
 console.log(str.endsWith("e"))
console.log(str.includes("job"))
console.log(str1.slice(8,13))
let str2 =str1.toLocaleUpperCase();
let str3 = str.toLocaleLowerCase();
console.log(str2,str3)
console.log(str.indexOf("job")+"first Index")
console.log(str.lastIndexOf("e"))
let str4 = str.replace("N","y")
console.log(str4)
let str5 = str.replaceAll("e","i")
console.log(str5)
console.log(str.charAt(3))


let stringss = "i am  ma i"
let s = stringss.replaceAll(" ","")
console.log(s)



let text = "Hello Hello World";
console.log(text.slice(0, 5)); // "Hello" (start, endIndex)
console.log(text.slice(-1));   // "World" (negative = from end)
console.log(text.substring(0, 5)); // "Hello" (no negative index)

console.log(text.search("Hello"))


console.log(firstaoccurence(str,"job"))

function firstaoccurence( str , a )
{
    return str.indexOf(a)
}

console.log(undefined > 5)