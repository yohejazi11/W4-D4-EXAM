let apiUser="https://66ea79ae55ad32cda4790255.mockapi.io/user";

let namef=document.getElementById('Name')
let userName=document.getElementById('userName')
let userEmail=document.getElementById('userEmail')
let userPassword=document.getElementById('userPassword')
let signupBTN=document.getElementById('signupBTN')


signupBTN.addEventListener("click",()=>{

    if(namef.value.length<=3){

        window.alert("name should more then 3 letters")
    }
    else if(!/[A-Z]/.test(userName.value)){

        window.alert("username should have one capital letter at least")

    }
    else if(!userEmail.value.includes('@')){
        window.alert("enter a correct email containe @")

    }
    else if(userPassword.value.length<=4){
        window.alert("enter a password more then 4 letters")

    }
    else{
        fetch(apiUser,{
            method:"POST",
            body:JSON.stringify({
                name:namef.value,
                username:userName.value,
                email:userEmail.value,
                password:userPassword.value
            }),
            headers: {"Content-Type": "application/json",}    
                })
    }






})