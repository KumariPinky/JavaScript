

//  Input :- Go pageless by default
// Output - go pageless by default

// let input ="Go pageless by default";

const capitalized = function (input) {
let arr = input.split(" ");
for(let i =0;i<arr.length;i++){
   arr[i] = arr[i][0].toLowerCase() + arr[i].substring(1);
}
return arr.join(" ");
}
console.log(capitalized("Go pageless by default"));

