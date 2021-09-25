function inchToFit(n){
    let feet = (n/12);
    feet = Math.floor(feet)
    inch = n-feet*12
    return feet+" feet and "+inch+" inch"   
}
console.log(inchToFit(143))