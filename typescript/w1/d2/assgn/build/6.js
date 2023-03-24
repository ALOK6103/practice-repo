class User {
    id;
    fullName;
    age;
    constructor(id, fullName, age) {
        this.id = id;
        this.fullName = fullName;
        this.age = age;
    }
}
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Others"] = "others";
})(Gender || (Gender = {}));
class Employee extends User {
    married;
    gender;
    hobbies;
    constructor(empDetails, id, fullName, age) {
        super(id, fullName, age);
        this.married = empDetails.married,
            this.gender = empDetails.gender,
            this.hobbies = empDetails.hobbies;
    }
}
let empDetail = {
    married: true,
    hobbies: ["Dsa"],
    gender: Gender.Male
};
let emp1 = new Employee(empDetail, 456, "av", 26);
console.log(emp1);
