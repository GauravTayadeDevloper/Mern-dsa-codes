let a = [9, 9, 8, 1, 1, 2, 2, 3, 3, 8]
let n = a.length;
console.log(freqCount(a,n))

function freqCount(arr,n)
{
    let m = new Map();
    for(let i=0 ;i<n;i++)
    {
        if(m.has(arr[i]))
        {
            m.set(arr[i],m.get(arr[i])+1);
        }
        else
        {
            m.set(arr[i],1)
        }
    }
let maxfreq = 0;
let maxfreqNO = null;

for(let [k,v] of m)
{
    if(v>maxfreq )
    {
        maxfreq = v;
        maxfreqNO = k; 
    }
    else if( v ===maxfreq && k < maxfreqNO)
    {
        maxfreqNO = k;
    }
}

return maxfreqNO    ;


}
