//The flat() method creates a new array with all 
//sub-array elements concatenated into it recursively up to the specified depth.
//by default the depth is 1

const a1 = [1, 2, 3, [4, 56, 6]]
console.log(a1.flat())
// console.log('original a1', a1) //does not modify the array

const a2 = [23, 455, 78, [[1, 2, 3, 4]]]
console.log(a2.flat(2))
