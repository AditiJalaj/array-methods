//The join() method creates and returns a new string by
//concatenating all of the elements in an array 
//(or an array-like object), separated by commas or a specified separator string.
//default separator is comma

const a1 = ['array', 'is', 'interesting']

const s1 = a1.join() //same as .join(',')
console.log('s1 is ', s1)

const s2 = a1.join(' ') //space separated
console.log('s2 is ', s2)

const s3 = a1.join('-') // - separated
console.log('s3 is ', s3)

const s4 = a1.join('') //no space separation
console.log('s4 is ', s4)
