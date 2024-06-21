//  Input :- Go Pageless By Default
// Output - Go PAGELESS By Default

function capitalizeMiddleWord(input) {
  let words = input.split(' ');
  words[1] = words[1].toUpperCase();
  return words.join(' ');
}

let input = "Go Pageless By Default";
let output = capitalizeMiddleWord(input);
console.log(output); // Output: "Go PAGELESS By Default"