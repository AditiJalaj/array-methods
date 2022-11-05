//slice  returns a shallow copy of a portion of an array into a 
//new array  selected from start to end (end not included) and does not modify original array

//slice(start, end)

const months = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'dec']


console.log(months.slice(1))  //['feb', 'march', 'april', 'may','june', 'july','dec']
console.log('original array', months)

console.log(months.slice(-2)) // [ 'july', 'dec' ]

