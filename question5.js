// how to find max/min in a given array in javascript.

const maxs = [1,7,9,5,10,4,17,13,6,35];

// const maxFunction = (maxs) => {
//     return maxs.reduce(function (pre,cur) {
//         return pre > cur ? pre : cur
//     })
// }
//  console.log(maxFunction(maxs))



 const minFunction = (maxs) => {
    return maxs.reduce(function (pre,cur) {
        return cur > pre ? pre : cur
    })
}
 console.log(minFunction(maxs))