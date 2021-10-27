// Let is used for variable

for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i) // This will be undefined

// But this (i) wont leak into the global region

// But if we used **var** then, it would leak into global region

for (var i = 0; i < 10; i++){

}
console.log(i)