

let arr = [1,2,3,4,5,6,7,8];
let k= 4;

function rotationClockWise(arr,k){
    for(let i =0; i<k ; i++){
        let element = arr.shift()
        arr.push(element);
    }
 
}
rotationClockWise(arr,k);
console.log(arr);



// rotationAntiClockWise

// function rotationAntiClockWise(arr,k){
//     for(let i =0; i<k ; i++){
//         let element = arr.pop()
//         arr.unshift(element);
//     }
 
// }
// rotationAntiClockWise(arr,k);
// console.log(arr);



