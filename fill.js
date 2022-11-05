//fill(value, start, end)
//modifies the original Array
const a1 = new Array(26).fill(0) //another array of creating and filling values to an array

const arr = [1, 2, 23, 34, 5, 45]
console.log(arr.fill(99, 0, arr.length))

console.log('orig arr', arr) //should be modified 
console.log(arr.fill(0))  // a value is needed , start and end index are start of array and end of array by default