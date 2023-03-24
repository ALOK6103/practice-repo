type PersonDetails1={

    personName:string,
    phoneNumber:number,
    married:boolean
}

let arr:PersonDetails1[]=[]

function PhoneBook(arg:PersonDetails1){

    arr.push(arg)
}

PhoneBook({personName:"alok",phoneNumber:7272,married:true})
PhoneBook({personName:"vishal",phoneNumber:7272,married:true})
console.log(arr)