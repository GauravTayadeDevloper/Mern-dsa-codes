//Regex
// is used to match char in strings

//litral method
 //let pattern = /hello/ ;
 //constructor
 //let pattern = new RegExp("hello")

 //common methods
 //test() // applied on pattern not on string
//  let text  = "hi i am Gaurav"
//  let pattern = /Gaurav/;
//  console.log(pattern.test(text))


// match() gives all  exec() one by one
// let text = "hello hello"
// let pattern = /hello/g; g- global flag used for match  all
// console.log(text.match(pattern));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

//replace g flag for replace all
//  let text = "gavala challoy gavala"
// console.log( text.replace(/gavala/g,'mumbai'))
//search() text returns index
// console.log(text.search(/challoy/));
// split
// let text = 'qw,ss,sssa,dsds'
// console.log(text.split(/,/))


//flags

//g all occurence
//i case sensitivity remove
// let text = "hello";
// console.log(/HELLO/.test(text))
// console.log(/HELLO/i.test(text))
// m multiline consideration
// let text = "helloe\nworld"
// console.log(/^world/.test(text));
// console.log(/^world/m.test(text));
//anchors

//^ is your line start from that pattern
// let text ="hello worlds"
// let pattern = /^hello/;
// console.log(pattern.test(text))
//$ end with that pattern or not
// let text ="hello world"
// let pattern =/world$/;
// console.log(pattern.test(text));
//\b (word boundary)
// let text ="hello worlds"
// let pattern=/\bhello\b/;
// console.log(pattern.test(text));

// \B non word boudary
// let text ="hello worlds"
// let pattern = /\Bell\B/;
// console.log(pattern.test(text));


//Quantifiers
// * : matches 0 or more items
// + : matches 1 or more 
// ? : matches 0 or 1 

// let text ="aaabbbaaa";
// let pattern=/a*/;
// console.log(pattern.exec(text))
// let text ="aaabbbaaa";
// let pattern=/a+/;
// console.log(pattern.exec(text))
// let text ="aaabbbaaa";
// let pattern=/a?/;
// console.log(pattern.exec(text))

//{n} matxhes exactly n times
// let text ="aaabbbaaa";
// let pattern=/a{2}/;
// console.log(pattern.exec(text))

// let text ="aaabbbaaa";
// let pattern=/a{1,}/g;
// console.log(pattern.exec(text))
// console.log(pattern.exec(text))

// {n,m} matches between n to m
// let text ="aaabbbaaa";
// let pattern=/a{1,2}/g;
// console.log(pattern.exec(text))
// console.log(pattern.exec(text))
// console.log(text.match(pattern))

//set 
//char set [abc]
// let text ='cat'
// let pattern = /c[aeiou]t/; // does it exist 
// console.log(pattern.test(text))
// negative char set 
// let text ='cat'
// let pattern = /c[^aeiou]t/; // does it not exist 
// console.log(pattern.test(text))

// ranges
//[a,z][0-9]
//  let text = 'g'
// console.log(/[a-z]/.test(text))
// console.log(/[a-b]/.test(text))
// let n = 100;
// console.log(/[1-9]/.test(n))


//predefined char
//\d any digit
// \w any word char letter digit underscore
//\s any white space
//  let  text = "132asd"
// // console.log(/\d/.test(text))

//  console.log(/\d/g.exec(text))
//  console.log(/\w/.test(text))
// console.log(/\w/g.exec(text))
// console.log(/\s/.test(text))
// console.log(/\s/g.exec(text))

//dot char 
// matches any char except new line
//  let text = "cat"
// console.log(/c.t/.test(text))


// let text ="ad ab ac";
// // let pattern = /ab/g;

// // console.log(pattern.test(text))
// let pattern = /a/g;
// console.log(text.replace(pattern , "L"));


// let text ="hello 1213 ad ab ac";
// let pattern = /ab/g;

// console.log(pattern.test(text))
// let pattern = /d/g;
// console.log(pattern.test(text));

// let pattern = /^hello/
// console.log(pattern.test(text))
// let text ="hello ,1213, ad, ab, ac";
// let pattern = /,/
// console.log(text.split(pattern))

// let text ="hello 1213 ad ab ac";
// let pattern = /ac$/;
// console.log(pattern.test(text));
// console.log(pattern.exec(text));

// let text ="hello 1213 ad ab ac";
// let pattern = /a/gi;
// console.log(text.match(pattern));
// // console.log(pattern.exec(text));

// let text ="cut";
// let pattern = /[aeiou]/;
// console.log(text.match(pattern));
// console.log(pattern.exec(text));

// let text ="cat";
// let pattern = /c.t/;
// console.log(text.match(pattern));
// console.log(pattern.exec(text))
// console.log(pattern.test(text));
// let text ="554";
// let pattern = /^\d+$/;
// console.log(text.match(pattern));
// console.log(pattern.exec(text))
// console.log(pattern.test(text));

// let text ="aaasssssxscscss";
// let pattern = /a{3}/;
// console.log(text.match(pattern));
// console.log(pattern.exec(text))
// console.log(pattern.test(text));

// let text ="aaasssssxaascscaass";
// let pattern = /a/g;
// console.log(text.match(pattern));

// for(let i =0 ;i<text.length;i++)
// {
//     console.log(pattern.exec(text))

//     }
// console.log(pattern.test(text));


// let text ="the end";
// let pattern = /\bthe\b/;
// console.log(text.match(pattern));
// console.log(pattern.exec(text))
// console.log(pattern.test(text));


// let text ="the ULTRA end";
// let pattern = /[a-z]/g;
// console.log(text.match(pattern));
// console.log(pattern.exec(text))
// console.log(pattern.test(text));

// let text ="gaurvtayde@gmail.com";
// let pattern = /^\w+@\w+\.\w+$/;
// console.log(text.match(pattern));
// console.log(pattern.exec(text))
// console.log(pattern.test(text));

// let text ="gaurvtayde@gmail.com";
// let pattern = /^\w+@\w+\.\w+$/;
// console.log(text.match(pattern));
// console.log(pattern.exec(text))
// console.log(pattern.test(text));


// let text ="8008008691";
// let pattern = /^\d{10}$/;
// console.log(text.match(pattern));
// console.log(pattern.exec(text))
// console.log(pattern.test(text));

// let text ="gauravs4";
// let pattern = /^[a-zA-Z0-9]{6}$/;
// console.log(text.match(pattern));
// console.log(pattern.exec(text))
// console.log(pattern.test(text));


// let text ="aeiou"
// let pattern = /[aeiou]/
// let count=0;
// for(let i=0;i<text.length;i++)
// {
//     if(pattern.test(text[i]))
//     {
//         count++;
//     }
// }
// console.log(count)

// let text ="a eio   u"
// let pattern = / {2,}/g
// console.log(text.replace(pattern ," "));


// let text ="A eio   u"
// let pattern = /^[A-Z]/g
// console.log(pattern.test(text));
let str = "aabbbbcc";

// let matches = str.match(/(.)\1*/g); // ['aa', 'bbbb', 'cc']

// let result = {};
// for (let group of matches) {
//   let ch = group[0];
//   result[ch] = group.length;
// }

// console.log(result);
// Output: { a: 2, b: 4, c: 2 }

// let s = new Set(str)
// let b =[],k=0;
// for( let i of s)
// {
//   b[k++] = str.match(/+i+/);

// }
// let key = "AAAABBBBB"
// let Andrianp = "ABC";
// let Brunop ="BABC";
// let Goranp ="CCAABB"
// let score ={
//   Andrian :0,
//   Bruno : 0,
//   Goran: 0
// }
// for(let i=0;i<key.length;i++)
// {
//  if(key[i]===Andrianp[i%Andrianp.length]) score.Andrian++;
//  if(key[i]===Brunop[i%Brunop.length]) score.Bruno++;
//  if(key[i]===Goranp[i%Goranp.length]) score.Goran++;
// }
// let maxsc = Math.max(score.Andrian,score.Bruno,score.Goran);
// console.log(score)
//   console.log(maxsc);
// let stdu =["Adrian", "Bruno", "Goran"];
//   for (let i=0;i<stdu.length;i++ ) {
//     if (score[stdu[i]] == maxsc) {
//       console.log(stdu[i]);
//     }

//   }



// let s ="gald"
// let sm="asdfghjkl"
// let ans =true;
// for(let i =0;i<s.length;i++)
// {
//   let ch = s[i];
// if(!(sm.includes(ch)))
// {
//   ans = false;
// }
// }

// if(ans) console.log(s);

function convertKeyboardLayout(layout1, layout2, text) {
  let ans = "";
  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    let index = layout1.indexOf(ch.toLowerCase());

    if (index !== -1) {
 
      let convertedChar = layout2[index];
      if (ch === ch.toUpperCase()) {
        ans += convertedChar.toUpperCase();
      } else {
        ans += convertedChar;
      }
    } else {
      ans += ch;
    }
  }
  return ans;
}

// Example usage:
let layout1 = "qwertyuiopasdfghjklzxcvbnm";
let layout2 = "veamhjsgqocnrbfxdtwkylupzi";
let text = "FpcpEbb2019";

let output = convertKeyboardLayout(layout1, layout2, text);
console.log(output); // Output: BoloApp2019

