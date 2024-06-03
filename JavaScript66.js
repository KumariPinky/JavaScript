// Identify the second largest element in an array.

let arr = [1,15,20,3,45,5,11];
let largest = Number.MIN_VALUE;
let secondLargest = Number.MIN_VALUE;

for(let i =0;i<arr.length;i++){
    if(largest<arr[i]){
       secondLargest = largest;
       largest=arr[i];
    }
}
console.log(secondLargest);