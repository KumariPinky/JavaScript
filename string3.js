
//  Input :- Go Pageless By Default
// Output - Go pageless By Default

// const output = function(str){
//     let aa = str.split(" ");
//     for(let i =0;i<aa.length; i++){
//     aa[i] = aa[1][0].toLowerCase()+aa[i].substring(1);
//     console.log(aa[i]);
//     }
//     return aa.join(" ")
    
// }
// console.log(output("Go Pageless By Default"));

// javascript
function capitalizeFirstLetter(input) {
  return input.charAt(0).toUpperCase()+input.charAt(1).toLowerCase()+"  "+input.charAt(3).toLowerCase()+input.slice(4).toLowerCase();
}

const input = "Go Pageless By Default";
const output = capitalizeFirstLetter(input);

console.log(output); // Output: Go pageless By Default



