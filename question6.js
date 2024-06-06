// how to find second largest values, and remove first largest value in array.

const second = [10,4,6,8,12,15,9,2];
const large = (arr) =>{
    firstLargest = Math.max(...arr)
    index =  arr.indexOf(firstLargest)
    arr.splice(index,1)
    secondLargest = Math.max(...arr)
    return (secondLargest)
}
console.log(large(second))