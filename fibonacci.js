function fibonacci(n){
    let fib = [0,1]
    if (n==0){
        return 0;
    }
    if (n==1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
console.log(fibonacci(6))


function fibonacciSeries(n){
    if (n==0){
        return [0]
    }
    if (n==1){
        return [0,1]
    }
    else {
        let fibo = fibonacciSeries(n-1);
        let nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo}
}

console.log(fibonacciSeries(5))