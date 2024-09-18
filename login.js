let apiUser = "https://66ea79ae55ad32cda4790255.mockapi.io/user";

let userName = document.getElementById('userName')
let userPassword = document.getElementById('userPassword')
let signinBTN = document.getElementById('loginBTN')

let userId;

signinBTN.addEventListener("click", () => {


    fetch(apiUser)
        .then(response => response.json())
        .then(data => {
            let userData = data.filter(element => element.username == userName.value && element.password == userPassword.value)
            if (userData.length > 0) {
                sessionStorage.setItem('userID', userData[0].id)
                userId=sessionStorage.getItem('userID')
                console.log(sessionStorage.getItem('userID'))
                window.location.href='profile.html'
            }
            else{
                window.alert('worrong userName or password')
            }
        })







})