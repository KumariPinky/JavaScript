// 44. Program to accept two 3 dimensional array and store addition of those into arrays into the third array .


let arr= [
    [1,2,3],
    [2,3,4],
    [4,5,6,[9,8,6]]
];

let result = arr.reduce((x,y)=>{
    return (x+y);

})
console.log(result);