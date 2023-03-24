"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userProp = { name: "string", getId: () => 5 };
class UserNodeElement {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId;
}
let user = new UserNodeElement(1, "Alok");
//console.log(user)
var CarTypeEnum;
(function (CarTypeEnum) {
    CarTypeEnum[CarTypeEnum["Petrol"] = 0] = "Petrol";
    CarTypeEnum[CarTypeEnum["Diesel"] = 1] = "Diesel";
    CarTypeEnum[CarTypeEnum["EV"] = 2] = "EV";
})(CarTypeEnum || (CarTypeEnum = {}));
class Car {
    door;
    carType;
    constructor(door, carType) {
        this.door = door;
        this.carType = carType;
    }
}
const nexon = new Car(4, CarTypeEnum.Petrol);
console.log(nexon);
