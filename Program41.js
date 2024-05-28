// 41. Program to accept a string and check the given string is palindrome or not .

// var string = prompt("Enter any string that read from farward and backword as same");

var str = "dad"; //madam
// console.log("String the value");
var len = str.length;
var msg ="It is a Palindrome";
for(var i =0;i<len/2;i++){
    if(str[i]!=str[len - 1 -i]){
        msg='It is a not palindrome';
    }
}
console.log(`${str}:${msg}`);
