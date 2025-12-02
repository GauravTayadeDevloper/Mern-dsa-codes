function solve(operation, input) {
    // Write your code here
    let A = input[0];
    let B =input[1];
    if(operation==="NOT")
    {
       return !A;
    }
    else if(operation ==="AND")
    {
        return A && B;
    }
    else if(operation==="OR")
    {
        return A||B;
    }
}
console.log(solve("AND" [0,1]));