//The split() method takes a pattern and divides a
//String into an ordered list of substrings by searching for the pattern,
//puts these substrings into an array, and returns the array.

const s1 = 'hello aditi what\'s up'
const a1 = s1.split() //default is a single array item
console.log('a1 is', a1) //a1 is [ "hello aditi what's up" ]

const a2 = s1.split('')
console.log('a2 is', a2) //a2 is ['h', 'e', 'l', 'l', 'o', .....]

const a3 = s1.split(' ')
console.log('a3 is ', a3) //a3 is  [ 'hello', 'aditi', "what's", 'up' ]