/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

function signUp(){
    let Name=document.getElementById("name").value
    let Image=document.getElementById("image").value 
    let Email=document.getElementById("email").value 
    let Country=document.getElementById("country").value

    let obj={
        name:Name,
        image:Image,
        email:Email,
        country:Country
    }

    
    localStorage.setItem("user1",JSON.stringify(obj))

     document.getElementById("name").value=""
    document.getElementById("image").value=""
    document.getElementById("email").value=""
    document.getElementById("country").value=""

}