//splice is like slice functionality but it alters the contents of the array
//The splice() method changes the contents of an array by removing or 
//replacing existing elements and/or adding new elements

//splice(start, deleteCount, item1, item2, itemN)
//if deleteCount is 0 , then nothing deleted but at start index item1,.. inserted
const months = ['jan', 'feb', 'march', 'april', 'jul', 'dec']
months.splice(4, 0, 'may', 'jun') //inserts at index 4
console.log('months', months) //['jan','feb', 'march', 'april', 'may', 'jun','jul', 'dec']

months.splice(-1, 1, 'ayoo') //replaces last element 
console.log('months', months)

