function getName({ fName, lName }) {
    return `${fName} ${lName}`;
}
let x = getName({ fName: "Alok", lName: "Verma" });
console.log(x);
