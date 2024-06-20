//  find duplicate element in a give array

const arr = [1,2,3,3,4,5,5,8,9];
let duplicates = arr.filter((ele,index,ar) =>ar.indexOf(ele) !==index)
console.log(duplicates);