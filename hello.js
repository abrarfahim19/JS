// The print() of python in Javascript is console.log()
// For instance

var price = 12;
console.log(price);

// The variable name is case sensative.
// The practice is usually CamelCasing.
// For instance

var bananaPrice = 20;
var productName = "Chicken";
var isCheap = true;

// Find type of variable by simply typing

console.log( typeof bananaPrice )
console.log( typeof productName )
console.log( typeof isCheap )

// Some string operation

var bananaPrice = 20;
var priceTag = "20"
var sound = 'kooKKuruuu'

console.log(productName + " " + sound)
console.log(bananaPrice + " " + sound)
console.log(bananaPrice + sound)

console.log(bananaPrice + +priceTag)                        // + sign here transformes the string to int
console.log(bananaPrice + parseInt(priceTag))               // Inteager way to do this
console.log(bananaPrice + parseFloat(priceTag))             // Floating way to do this
console.log(bananaPrice + Number(priceTag))                 // Number/NAN way to do this

console.log( sound.toUpperCase() )
console.log( sound.toLowerCase() )
console.log( sound.indexOf("u") )
console.log( sound.indexOf("P") )
console.log( sound.split("k") )

// Some Number operation

var fractionNumber = 1.2;
var solidNumber = 2;

console.log( fractionNumber + solidNumber);
console.log( fractionNumber - solidNumber);
console.log( fractionNumber * solidNumber);
console.log( fractionNumber / solidNumber);
console.log( fractionNumber % solidNumber);

console.log(Math.ceil(fractionNumber))
console.log(Math.floor(fractionNumber))
console.log(Math.round(fractionNumber))

console.log(Math.random())

// Array Operation

var a = [1,54,6,6,4];
console.log(a);

a.push(4);
console.log(a);

a.pop();
console.log(a);

a.unshift(4)
console.log(a)

a.shift();
console.log(a)


// Conditional is like python.

// if (condition){
//     do 1
// }
// else if(condition2){
//     do 2
// }
// else{
//     do 3
// }

var hasWork = true;
var savings = 100000;

if (hasWork == true && savings >= 100000){
    console.log("You may get married. Barakallau Fik")
}
else if (hasWork ==true || savings >= 100000){
    console.log("Have some patience Brother! ")
}
else{
    console.log("Pray & Work brother... ")
}

// Switch Case is following

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

console.log("Today is "+ day)


// The while/for loop is similar to Python

var i = 1;
while (i<=10){
    console.log(i);
    i++
}

for (var i=1; i<=10; i++){
    console.log(i)
}

// Function calling is similar too... But you dont have to use the def word
// But say its a function


function square(n){
    return n*n
}

console.log(square(5));


// A recursive approach to finding factorial using function is following

function factorial(n){
    if ((n==1) || (n==0)){
        return n
    }
    else{
        return(n*factorial(n-1))
    }
}

console.log(factorial(5))

// Object is created with properties. The object property can be called through 3 process.

var employee1 = {name:"A", car: "Fiat", sallary: 3000}
var employee2 = {name:"B", car: "Tesla", sallary: 7000}


// Acessing the data

console.log(employee2.car)
console.log(employee2["car"])
var key = "car"
console.log(employee2[key])

// Updating the data

employee2.car = 'porsche';
employee2["car"] = 'Ford';
employee2[key]= 'Marcedez'
console.log(employee2.car)