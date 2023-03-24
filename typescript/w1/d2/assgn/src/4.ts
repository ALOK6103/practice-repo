interface PersonDetails{
    prefix ?:string;
    phones:number[];
    address:string[];
    email:string;
    firstname:string;
    lastname:string
};

function Details(prop:PersonDetails){
    return prop
}

let z=Details({prefix:"Mr",firstname:"Alok",lastname:"verma",phones:[12,25],address:["d","c"],email:"ak@gmail.com"})

console.log(z)