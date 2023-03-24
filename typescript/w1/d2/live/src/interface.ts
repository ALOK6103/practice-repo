import { isThisTypeNode } from "typescript";

interface UserNode{
    name:string;
}

interface UserNode{
    getId:()=>number
}

const userProp:UserNode={name:"string",getId:()=>5}


class UserNodeElement implements UserNode{
    id; 
    name

    constructor(id:number,name:string){
        this.id=id;
        this.name=name
    }

    getId: () => number;
}

let user=new UserNodeElement(1,"Alok")
//console.log(user)

enum CarTypeEnum{
    Petrol,
    Diesel,
    EV
}

class Car{
    door:number
    carType:CarTypeEnum

    constructor(door,carType){
        this.door=door
        this.carType=carType
    }
}

const nexon=new Car(4,CarTypeEnum.Petrol)

console.log(nexon)


