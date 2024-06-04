// Remove duplicate from a sorted array 


let arr =[2,4,6,8,10,10,12,14,14,16,16];

let unique= [...new Set(arr)];
console.log(unique)

// let nums =[];
// function duplicate(){
// let j= 1;
// for(let i =1; i<arr.length ; i++){
//     if(arr[i] != arr[i-1]){
//         arr[j] = arr[i]
//         j++;
//     }
// }
// return j;
// }

// console.log(duplicate());

