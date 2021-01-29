firebase.auth().onAuthStateChanged((user) => {
    if(user){
        document.querySelector('#user')
            .innerHTML = `${user.displayName}`

    } else{
        window.location.href = 'landing-page.html'
    }
})

