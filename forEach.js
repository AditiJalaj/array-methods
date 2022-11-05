const a1 = [1, 2, 3]
const mulBy2 = item => item * 2;


console.log(a1.forEach(mulBy2)) //nothing gets returned so undefined
console.log(a1)  //forEach() does not mutate the array on which it is called.

a1.forEach(item => console.log(item + 4))