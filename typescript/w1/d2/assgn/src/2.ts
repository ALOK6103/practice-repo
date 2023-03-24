interface FullNameProp{
    fName:string;
    lName ?:string
}


function getName({fName,lName}:FullNameProp){
  return  `${fName} ${lName}`
}

let x=getName({fName:"Alok",lName:"Verma"})
console.log(x)

