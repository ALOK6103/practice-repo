interface Address{
houseNumber:number;
street:string;
city:string;
state:string;
postalCode:number;
country:string
}

function FullAds(prop:Address){
    return prop
}

let y=FullAds({houseNumber:7,street:"new",city:"fzd",state:"UP",postalCode:224,country:"IND"})

console.log(y)