function feetToMile(n){
    if (n<0){
        return "Distance cannot be negative"
    } else{
        return (n*0.000189394)
    }
}

console.log(feetToMile(1000))

// chair = 1 , table = 3 , bed = 5
function woodCalculator(chair, table, bed){
    if (Math.floor(chair) == chair && Math.floor(table)==table && Math.floor(bed)){
        let sum = chair*3 + table*3 + bed*5;
        return sum;
    } else {
        return "You cant have fraction of Furniture"}
}

console.log(woodCalculator(1,5,4))

function brickCalculator(n){
    let total = 0;
    if (n<0){
        return "Matir tole kiya building banaiba?"
    } else if (n<=10) {
            total = n*15;
            break;
        case n<=20:
            total = (n-10)*12 + 10*15;
            break;
        case n>20:
            total = 10*15 + 10*12 + (n-20)*10;
            break;
    } return total*1000;
    }
}

console.log(brickCalculator(100))