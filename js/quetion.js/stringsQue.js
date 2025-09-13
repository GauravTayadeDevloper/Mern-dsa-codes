let str = "varaug"
function reverses(str)
{
    let str1 =""
    for(let i = str.length-1;i>=0;i--)
    {
        str1 += str[i]
    }
    console.log(str1)
}
reverses(str);
let c = str.split("").reverse().join("");
console.log(c);
function vovels(str)
{
    let count =0;
    let vo ="aeiou"
    for(let vov of vo)
    {
        for(let ch of str)
        {
            if(vov == ch)
            {
                count++;
            }
        }
    }

    console.log(count)
}
vovels(str)

function palindrome(st)
{
    // let m = st.split("").reverse().join("");
    // if(m===st)
    // {
    //     console.log(true)
    // }
    // else
    // {
    //     console.log(false)
    // }
    let m;
    let i=0,j=st.length-1;
    while(i!=j)
    {m =false
        if(st[i]==st[j])
        {
            m =true
        }
        i++;
        j--;
    }
    if(m==true)
    {
        console.log("palindrome")
    }
    else
    {
        console.log("not a palindrome")
    }
}
palindrome("abcdcba") ;

function splaceDash(str)
{
    // let m = str.replaceAll(" ","-")
    // console.log(m)
    let m=""
    for(let ch of str)
    {
        if(ch===" ")
        {
            m+= "-"
        }
        else
        {
            m+=ch
        }
    }
    console.log(m)
}
splaceDash("i am Gaurav Tayade")

function worsCount(str)
{
    let m = str.trim().split(" ");
    console.log(m.length);
}
worsCount( " i am Gaurav Tayade ")
