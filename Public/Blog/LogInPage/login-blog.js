import {applyToFirebase, readFirebase} from '../../fire-database.js';

const inputField = document.getElementById("input-field");
const sendButton = document.getElementById("send-button");
const signinButton = document.getElementById("signin-button");
const auth = firebase.auth();
auth.onAuthStateChanged(user => {
    if (user) {
        inputField.hidden = false;
        sendButton.hidden = false;
        signinButton.hidden = true;

        sendButton.onclick = function() {
            var data = inputField.value;
            inputField.value = '';
            applyToFirebase(firebase, user, data, 'login-blog-comments');
        };
    } else {
        inputField.hidden = true;
        sendButton.hidden = true;
        signinButton.hidden = false;

        signinButton.onclick = function() {
            localStorage.setItem('pageAfterSignIn', '../Blog/LogInPage/login-blog.html');
            location.href = '../../SigninPage/signin.html';
        };
    }
});

//Get all comments from firebase and display them in the page
readFirebase(firebase, 'login-blog-comments', document.getElementById('comments-list'));

