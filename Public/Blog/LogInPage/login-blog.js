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
        signinButton.style.position = 'absolute';

        sendButton.onclick = function() {
            var data = inputField.value;
            inputField.value = '';
            inputField.style.height = "35px";
            applyToFirebase(firebase, user, data, 'login-blog-comments');
        };
    } else {
        inputField.hidden = true;
        sendButton.hidden = true;
        signinButton.hidden = false;
        signinButton.style.position = 'relative';

        signinButton.onclick = function() {
            localStorage.setItem('pageAfterSignIn', '../Blog/LogInPage/login-blog.html');
            location.href = '../../SigninPage/signin.html';
        };
    }
});

//Get all comments from firebase and display them in the page
readFirebase(firebase, 'login-blog-comments', document.getElementById('comments-list'));

//For comment input field..
//Automatically resize the input field to fit the text

inputField.oninput = function() {
    inputField.style.height = "50px";
    inputField.style.height = (inputField.scrollHeight+20)+"px";
}

