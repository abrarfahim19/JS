function isLeapYear(n){
    if (n%4==0){
        if (n%100==0){
            if (n%400==0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}

console.log(isLeapYear(1900))