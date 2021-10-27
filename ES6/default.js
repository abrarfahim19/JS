// Usually function is like

function add(num1, num2){
    return num1+num2
}

console.log(add(2,4))

// but

console.log(add(1)) // This gives NaN

// So we solve it like this

function addDefault(num1, num2 = 0) {
    return num1+num2
}

console.log(addDefault(1))