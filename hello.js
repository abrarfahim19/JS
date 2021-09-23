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

// The while/for loop is similar to Python

var i = 1;
while (i<=10){
    console.log(i);
    i++
}

for (var i=1; i<=10; i++){
    console.log(i)
}