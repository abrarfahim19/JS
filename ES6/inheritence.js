class father{
    constructor(){
        this.clan = 'Patwari';
    }
}


class son extends father{
    constructor(name){
        super();
        this.name = name;
    }
    clanName(){                             // Method
        return this.clan
    }
}

const firstBorn = new son('Azim');
console.log(firstBorn.clanName())