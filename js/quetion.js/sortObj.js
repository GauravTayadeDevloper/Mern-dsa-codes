let a = [{"title":"Bill Gates","author":"The Road Ahead","libraryID":1254},{"title":"Steve Jobs","author":"Walter Isaacson","libraryID":4264},{"title":"Mockingjay: The Final Book of The Hunger Games","author":"Suzanne Collins","libraryID":3245}]



for(let i =0;i<a.length-1;i++)
{
    for(let j =0;j<a.length-i-1;j++)
    {
        if(a[j+1].libraryID < a[j].libraryID)
        {
            [a[j+1],a[j]] = [a[j],a[j+1]];
        }
    }
}
for(let i =0;i<a.length;i++)
{
    console.log(a[i].libraryID)
}
for(let key of a)
{
    console.log(key.title)
}