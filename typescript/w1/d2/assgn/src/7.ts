interface PerDet{
    phone:number[]
    firName:string
    lasName:string
    adds:string[]

}

let obj1:PerDet=({phone:[874,9554],firName:"Alok",lasName:"Verma",adds:["kjjhg","jkiu"]})

let arr1:PerDet[]=[]

function PhoneBook1(arg:PerDet):void{
     arr1.push(arg)
}

let p=PhoneBook1(obj1)

console.log(arr1)