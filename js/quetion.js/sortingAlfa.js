const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let bands1=[];

for(let article of bands)
{
    let b=[];
    let i=0;
    let a = article.split(" ");
    if(a[0].toLowerCase() == "an" || a[0].toLowerCase()=="a" || a[0].toLowerCase() == "the")
    {
        i=1;
    }
    for( i;i<a.length;i++)
        {
            b.push(a[i]);
        }

        bands1.push(b.join(" "));
}0

console.log(bands1.sort());

let sortedBand=bands.sort((a,b)=>a.replace(/^(a |the |an )/i, "").localeCompare(b.replace(/^(a |an |the )/i,"")));
console.log(sortedBand);

