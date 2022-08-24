// $('button').onClick(function() {
//     $(".paperImage").addClass('animated');
//     setTimeout(function() {
//       $(".paperImage").removeClass('animated');
//     }, 1500);
// });

// location.replace('https://www.albinauric.com/index.html');

var contentBodyElement = document.getElementById("content-body");
contentBodyElement.style.display = "visible";

var bodyElement = document.getElementById("body");
bodyElement.style.backgroundImage = "radial-gradient( rgba(0, 150, 0, 0.75), black 120%)";

/////////////////////////////////////////////////////////////////////////////////////
//Sign in process
console.log(firebase);

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => location.href = "SigninPage/signin.html";

signOutBtn.onclick = () => auth.signOut();

//Checking if signed in

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const userDetails = document.getElementById('userDetails');

var userName = '';

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userName = `${user.displayName}`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userName = 'Maxim kabaev';
    }
});

/////////////////////////////////////////////////////////////////////////////////////
//Check appropriate font size for welcome message

const _typing = document.getElementById('tp');
_typing.innerHTML = 'Welcome' + ' ' + userName + ' ' + 'to my Website :)';
_typing.style.hidden = true;

var typingFontSize = 100;
_typing.style.fontSize = (typingFontSize) + 'px';

while(check(_typing)){
    typingFontSize = typingFontSize - 1;
    _typing.style.fontSize = (typingFontSize) + 'px';
}

console.log(typingFontSize);


function check(el) {
    var curOverf = el.style.overflow;
      
    if ( !curOverf || curOverf === "visible" )
        el.style.overflow = "hidden";
      
    var isOverflowing = el.clientWidth < el.scrollWidth
        || el.clientHeight < el.scrollHeight;
      
    el.style.overflow = curOverf;
      
    return isOverflowing;
}




//Assigning/Removing class to navlink class
var navLinks = document.querySelectorAll(".nav-link-parent");
var count = 0;
var lastCount = -1;

setInterval(function() {
    if(count != lastCount && count < navLinks.length) {
        navLinks[count].classList.add("animate__animated", "animate__backInUp"); //adding animation class to navlink
        navLinks[count].classList.remove("invisible"); //removing invisible class from navlink
        navLinks[count].style.setProperty('--animate-duration', '0.25s'); //adding animation duration to navlink
        lastCount = count; //setting lastCount to count
        navLinks[count].addEventListener('animationend', () => {
            navLinks[count].classList.remove("animate__animated", "animate__backInUp");
            count++;
        }
        );
    }
}
, 5);


var i = 0;
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      _typing.style.hidden = false;
      _typing.innerHTML = '';
      typeWriter();

    //   typing.classList.remove("preload");
    //   typing.classList.add("added");
    }
    // else{
    //     typing.classList.add("preload");
    // }
}, 100);  

//TYPING ANIMATION
//
function typeWriter() {
    var txt = 'Welcome' + ' ' + userName + ' ' + 'to my Website :)';
    var speed = 75;
    if (i < txt.length) {
        _typing.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
//
//END OF ANIMATION

var paper;

function PlayAnimationAbout() {
    LeavingAnimation();

    let timeout;
    timeout = setTimeout(FinishAnimAbout, 1000);
}

function PlayAnimationProjects() {
    LeavingAnimation();
    let timeout;
    timeout = setTimeout(FinishAnimProjects, 1000);
}

function PlayAnimationBlog() {
    LeavingAnimation();
    let timeout;
    timeout = setTimeout(FinishAnimBlog, 1000);
}

function FinishAnimAbout() {
    LeavingPage();

    paper.classList.remove('animated');
    location.href = "About/about.html";
}

function FinishAnimProjects() {
    LeavingPage();

    paper.classList.remove('animated');
    location.href = "Projects/projects.html";
}

function FinishAnimBlog() {
    LeavingPage();
    
    paper.classList.remove('animated');
    location.href = "Blog/blog.html";
}

function GetPaper() {
    return document.getElementsByClassName("paperImage")[0];
}

function LeavingAnimation() {
    paper = GetPaper();
    paper.classList.add('animated');
    // var navLinks = document.querySelectorAll(".nav-link-parent");

    // for(var i = 0; i < navLinks.length; i++){
    //     navLinks[i].classList.add("animate__animated", "animate__backOutUp");
    // }
}

function LeavingPage(){
    var contentBodyElement = document.getElementById("content-body");
    contentBodyElement.style.display = "none";

    var bodyElement = document.getElementById("body");
    bodyElement.style.backgroundImage = "url('Pictures/paper.jpg')";
}

setTimeout(function(){
    document.body.className="preload";
},3500);