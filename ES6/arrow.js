//Single parametre
const doubleIt = num => num*2 ;
console.log(doubleIt(4));

//Multi parameter
const add = (x,y=0) => x+y;
console.log(add(2,5));

// No parameter
const five = () => 5;
console.log(five())

// Multiline
const multiLine = (x,y) => {
    sum = x+y;
    dif = x-y;
    return -sum*dif
}    
console.log(multiLine(2,3));