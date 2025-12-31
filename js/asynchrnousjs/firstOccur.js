function  firstOccur()
{
    let maping = new Map();
    str = "i am goat bro"

    for(let char of str)
    {
        if(maping.has(char))
        {
            maping.set(char,maping.get(char) + 1)
        }
        else{
            maping.set(char,1)
        }
    }

for( let [key,val] of maping){
        if(val === 1)
        {
            return key;
        }
    }
    return -1;
        
    
}
let b = firstOccur();
console.log(b)