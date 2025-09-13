let arr1= [1,2,3,4,5]
function bubbleSort(arr1)
{
    for(let i = arr1.length-1;i>=1;i--)
    {
        let swap =false;
        for(let j = 0 ; j<=i-1;j++)
        {

            if(arr1[j] >arr1[j+1])
            {
               [arr1[j],arr1[j+1]] = [arr1[j+1],arr1[j]]
               swap = true;
            }

        }
        if(!swap)
        {
            break;
        }
    }

    return arr1
}
console.log("Bubble sort "+ bubbleSort(arr1));