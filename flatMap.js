//map followed by flat . returns a new array

const arr1 = [1, 2, 23, 4, 45, 5, [120, 232]]

const twiceFn = x => x * 2
console.log('first flat then map', arr1.flat().map(twiceFn))

const flattenedByFlatMap = arr1.flatMap(twiceFn)
console.log('flattenedByFlatMap', flattenedByFlatMap)

console.log('map then flat', arr1.map(twiceFn).flat())

//let's see what happens when u multiply 2 with [2,3]
//array muliplication

console.log('2*[2,4]', 2 * [2, 4]) //returns NaN
console.log('[2]*[2,4]', [2] * [2, 4]) //returns NaN

//you can map with the twiceFn callback