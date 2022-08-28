/////////////////////////////////////////////////////////////////////////////////////
//Sign in process
console.log(firebase);

const auth = firebase.auth();
const analytics = firebase.analytics();

//Change providers

const signInGoogle = document.getElementById('signin-google');
const signInGithub = document.getElementById('signin-github');
const signInEmail = document.getElementById('signin-email');

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

console.log(signInGithub);
console.log(signInGoogle);
signInGithub.onclick = () => auth.signInWithPopup(githubProvider).catch(function(error) {
    if (error.code === 'auth/account-exists-with-different-credential') {
        var pendingCred = error.credential;
        var email = error.email;
        auth.fetchSignInMethodsForEmail(email).then(function(methods) {

        });
    }
});
signInGoogle.onclick = () => auth.signInWithPopup(googleProvider);

auth.onAuthStateChanged(user => {
    if (user) {
        firebase.analytics().logEvent('login');
        location.href = localStorage.getItem('pageAfterSignIn');
    }
});

/////////////////////////////////////////////////////////////////////////////////////