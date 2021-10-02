// When to use function?
// If we need something done again and again. Then, Function needs to be called.]

// When to use return?

// If we need something to be returned, then we use return. Otherwise we dont use return.

// Case Handling:

function instruction(name, age, work) {
    console.log('Your name is ',name);
    console.log('Your age is ',age);
    work();
}

function fight() {
    console.log('Fight');
}

function eat() {
    console.log('Eat before you fight');    
}

instruction('Abrar', 19, eat)