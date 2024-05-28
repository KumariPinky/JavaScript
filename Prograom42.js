// 42.Program to accept values into 3 dimensional  array and print .

const arr =[
    ['zone_1','zone_2'],
    ['zone_3','zone_4'],
    ['zone_5','zone_6'],
    ['zone_7','zone_8',['third_3','third_2']],
    ['zone_9','zone_10', ['zone_11','zone_12']],
];

const red = arr.reduce((x,y)=>{
return x.concat(y)
})
console.log(red);

// for(i=0;i<=arr.length;i++){
// console.log(arr[i]);
// }

