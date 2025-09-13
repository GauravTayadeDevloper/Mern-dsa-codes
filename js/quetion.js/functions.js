// when we call a function we give arguments gaurav(arguments)
// when we write the fuctions we give parameters function gaurav(parameter)

// traditional function
function f1() {
  console.log("yay");
}

f1();
// function expression
//anynomuos function

let sum = function (a, b) {
  let res = a + b;
  return res;
};
console.log(sum(35, 34));

// arrow function
let sum1 = (a, b) => a + b;
console.log(sum1(50, 49));

let s  =a => a+89;
console.log(s(8))


//     *
//   * * *
// * * * * *
//   * * *
//     * 