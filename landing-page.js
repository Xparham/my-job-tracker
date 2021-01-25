const loginBtn = document.querySelector("#login")
const registerBtn = document.querySelector("#register")
const loginModal = document.querySelector("#login-modal")
const registerModal = document.querySelector("#register-modal")

loginBtn.addEventListener('click', function(){
    loginModal.classList.remove('hidden')


})

registerBtn.addEventListener('click', function(){
    registerModal.classList.remove('hidden')
})
