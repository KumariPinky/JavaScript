// 

// let arr = [10,20,30,40,50];
// function dobleValue(arr){
//     return arr.map((num) => num*2)}

// console.log(dobleValue(arr));


// find the largest element in an array using the reduce() method

var array = [11,13,12,1,2,3,4,5]
function largest(arr){
    return arr.reduce((max,current) =>
           current > max ? current : max)
}

   console.log(largest(array));  