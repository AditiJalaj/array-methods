// The every() method tests whether ALL  elements in the array pass
//  the test implemented by the provided function. It returns a Boolean value.
//pass a function to it

const arr1 = [1, 2, 3]
const greaterThanOne = item => item > 1
const greaterThanZero = item => item >= 1

console.log(arr1.every(greaterThanOne))
console.log(arr1.every(greaterThanZero))

