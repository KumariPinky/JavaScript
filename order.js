// write a function that takes an array of number and returns a new array with only the even number.

let arr = [1,2,3,4,5,6,7,8,9,10,12]
function even(arr){
return arr.filter(num => num %2 ==0);
}
console.log(even(arr));