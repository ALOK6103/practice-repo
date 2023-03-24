interface User{
    id:number;
    name:string
}

let users:User[]=[
    {id:1,name:"Manish"},
    {id:2,name:"Masai"}
]

const getValue=(user:User,key:keyof User)=>{
    return user[key]
}


let response=getValue(users[1],"name");

console.log(response)