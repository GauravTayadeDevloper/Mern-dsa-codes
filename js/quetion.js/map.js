// let m  = new Map();
// m.set("name","gaurav");
// m.set("age",23)
// m.set("place","pune");
// console.log(m)



// console.log(m.get("age"))

// console.log(m.has("place"))

// for(let [key ,values] of m)
// {
//     console.log(key,values)
// }
// m.forEach((key,value) => {
// console.log(key,value)
    
// });

// let newMap = new Map()
// newMap.set(0,'g')
// newMap.set(1,"s")
// newMap.set(2,"n")

// let a = [[1,"dss"],[2,'ssad'],[3,'ssa']]

// let nmap = new Map(a)


// console.log(newMap.get(0))
// for(let [key ,values] of newMap)
// {
//     console.log(key,values)
// }

// for(let [k,v] of nmap)
// {
// console.log(k,v)
// }

// newMap.forEach((k,v)=>{
//     console.log(k,v)
// });
// console.log(newMap.get(0))
// console.log(newMap.has(1))
// newMap.delete(2)
// console.log(newMap.has(2))
// console.log(newMap.size)
// newMap.clear()
// console.log(newMap.size)

// for(let key of nmap.keys())
// {
//     console.log(key)
// }


// for(let val of nmap.values())
// {
//     console.log(val)
// }


// for(let [key,val] of nmap.entries())
// {
//     console.log(key,val)
    
// }


str = "iam gaurav tayade"
console.log(Alphabets(str));

function Alphabets(str) {
  const map = new Map();

  // Initialize map with all alphabets a-z with count 0
  for (let i = 0; i < 26; i++) {
    map.set(String.fromCharCode(97 + i), 0);
  }

  str = str.toLowerCase();

  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      map.set(char, map.get(char) + 1);
    }
  }

  // Convert map values to a space-separated string
  return Array.from(map.values()).join(' ');
}
