const person = {id: 'Abrar', phone:123456789, adress: 'Abrado', salary: 1 }

const { phone } = person;       //Advanced way to deconstruct the value
const id = person.id;           // Manual way to deconstruct the value

console.log(phone,id);

// How about a array?
// Let's unfold the case here

const ar1 = [1,32,232,5343,64,45,2]

const [first, second, third, ...restOfThem] = ar1

console.log(first, second, third);

console.log('Rest is bellow')

console.log(restOfThem);
console.log(...restOfThem);                 // It spreds out the rest of the component
