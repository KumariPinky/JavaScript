// how to find Duplicate elements in a given array?

const arr = [1,2,3,4,5,6,6,7,8,8,];
const duplicate = arr.filter((element,index,arr)=>arr.indexOf(element)!==index)
console.log(duplicate);