// It is a spread operator.
// সহজ বাংলায় মাখাই দেওয়া অপারেটর।

const ar1 = [1,2,3,4]
const ar2 = [5,6,7,8]

const addedArray = [...ar1, 5, ...ar2]

console.log(addedArray)

const ar3 = [1,2,3,4,5]

console.log(Math.max(...ar3))