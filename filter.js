const arr = [1, 4, 8, 13, 15]
const divisibleBy4 = item => item % 4 === 0

console.log(arr.filter(divisibleBy4))
//filter creates a new array and does NOT modify the original aray