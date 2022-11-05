// The find() method returns the first element in the provided array that
// satisfies the provided testing function.

const arr = [1, 10, 23, 556]
const greaterThan2 = item => item > 20
console.log(arr.find(greaterThan2))


const greaterThan1000 = item => item > 1000
console.log(arr.find(greaterThan1000)) 