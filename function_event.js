function first(name, functionHandler) {
    functionHandler(name)
}

function goodMorning(name){
    console.log("Good Morning " + name)
}

first('Sakib Al Hasan', goodMorning)