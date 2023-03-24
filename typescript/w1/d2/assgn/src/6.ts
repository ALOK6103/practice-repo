class User{
    id:number;
    fullName:string;
    age:number

    constructor(id:number,fullName:string,age:number){
        this.id=id;
        this.fullName=fullName;
        this.age=age
    }
}


enum Gender{
    Male="male",
    Female="female",
    Others="others"
}

interface EmpDetails{
    married:boolean;
    gender:Gender;
    hobbies:["Dsa"|"Coding"|"Cyber Security"|"Competetive Programming"]
}

class Employee extends User{
    married:boolean;
    gender:Gender;
    hobbies:["Dsa"|"Coding"|"Cyber Security"|"Competetive Programming"]

    constructor(empDetails:EmpDetails,id:number,fullName:string,age:number){

        super(id,fullName,age)
        this.married=empDetails.married,
        this.gender=empDetails.gender,
        this.hobbies=empDetails.hobbies

    }
}

let empDetail:EmpDetails={

    married:true,
    hobbies:["Dsa"],
    gender:Gender.Male
}

let emp1=new Employee(empDetail,456,"av",26)
console.log(emp1)