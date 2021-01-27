const loginBtn = document.querySelector("#login")
const registerBtn = document.querySelector("#register")
const loginModal = document.querySelector("#login-modal")
const registerModal = document.querySelector("#register-modal")

const userEmail = document.querySelector("#email")
const userPass = document.querySelector("#password")
const confirmPass = document.querySelector("#confirm_password")

function login(){
    window.alert("Working");   

}

loginBtn.addEventListener('click', function(){
    loginModal.classList.remove('hidden')


})

registerBtn.addEventListener('click', function(){
    registerModal.classList.remove('hidden')
})


