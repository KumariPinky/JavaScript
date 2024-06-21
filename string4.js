// Input :- go pageless by default
// Output - Go Pageless By DEFAULT

function capitalizeLastWord(input) {
  let words = input.split(' ');
  words[words.length - 1] = words[words.length - 1].toUpperCase();
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let input = "go pageless by default";
let output = capitalizeLastWord(input);
console.log(output); // Output: "Go Pageless By DEFAULT"






// let output =arr.map((word) => word.toUpperCase().join(" "))
// console.log(output);