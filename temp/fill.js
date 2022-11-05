//fill(value, start, end)

const a1 = [2, 4, 5, 566, 9, 3844, 9]
// a1.fill() //undefined


// a1.fill(9)
// a1.fill(200, 1)
a1.fill(10, 2, 4)

console.log('a1 ', a1)

const a2 = new Array(10).fill(23)
console.log(a2)