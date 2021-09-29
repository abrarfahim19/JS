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
    } else if (n<=20){
            total = (n-10)*12 + 10*15;
    } else if (n>20){
            total = 10*15 + 10*12 + (n-20)*10;
    } return total*1000;
}

console.log(brickCalculator(11))

function tinyFriend(Array){
    if (Array.length == 0) {
        return "Bro! You got no friend"
    } else {
        let tiny = Array[1]
        for(i=0; i<Array.length;i++) {
            if (Array[i].length < tiny.length){
                tiny = Array[i];
    } 
    } return tiny;
}
}

console.log(tinyFriend([]))