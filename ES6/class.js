class student{
    constructor(name,ID){                           // This handles the input
        this.name = name;
        this.id = ID;
        this.school = 'BBC High School'             // This is the native value
    }
}

const student1 =new student('Lonewolf19',19)
const student2 =new student('Shaddow',20)

console.log(student1, student2.name)


// class className{
//     constructor(par1,par2,par3){
//         this.par1 = something1;
//         this.par2 = something2;
//         this.par3 = something2;
//     }
// }