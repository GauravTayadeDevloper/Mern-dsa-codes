// let strArray= ["dog", "cat", "zebra", "ant"]

// let str = "cristiano ronaldo"
// console.log(endswiths(str,"ronado"))
// function endswiths(str,s)
// {
// let word = str.slice(str.length-s.length)
// if(s===word)
// {
//     return true
// }
// else 
// {return false}

// }
// function endswiths(str,s)
// {
//     let newstring ='' 
//     for(let i = str.length-s.length;i<str.length;i++)
//     {
//         newstring += str[i]
//     }
//     if(newstring===s)
//     {
//         return true;
//     }
//     else
//     return false;
// }

    // let str = "We promptly judged antique ivory buckles for the prize"
    // isPangram(str)
    // function isPangram(str)
    // {let str1 = str.toLowerCase(),count=0;
    // for(let i = "a".charCodeAt(0);i<="z".charCodeAt(0);i++ )
    // {
    //     if(str1.includes(String.fromCharCode(i)))
    //     {
    //     count++;
    //     }
    // }
    // if(count==26)
    // {
    //     console.log("panagram")
    // }
    // else
    // {
    //     console.log("no panagram")
    // }
    // }
let s="asd_sdas_ssda"
//splitfun(str," ")

let k = s.split("_");
 for(let i =1;i<k.length;i++)
 {
  k[i][0]=k[i][0].toUpperCase();
 }
 console.log(k)