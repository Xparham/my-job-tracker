var ui = new firebaseui.auth.AuthUI(firebase.auth());

let uiConfig = {
    signInOptions : [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "index.html"
}
ui.start('#login-ui', uiConfig)