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
bodyElement.style.backgroundImage = "url('Pictures/paper.jpg')";

var typing;

var i = 0;
var txt = 'Welcome to my Website :)';
var speed = 75;

let stateCheck = setInterval(() => {
    typing = document.getElementsByClassName("typing")[0];
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
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
  if (i < txt.length) {
    typing.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//
//END OF ANIMATION

var paper;

function PlayAnimationAbout() {
    paper = GetPaper();
    paper.classList.add('animated');

    let timeout;
    timeout = setTimeout(FinishAnimAbout, 1000);
}

function PlayAnimationProjects() {
    paper = GetPaper();
    paper.classList.add('animated');
    let timeout;
    timeout = setTimeout(FinishAnimProjects, 1000);
}

function PlayAnimationBlog() {
    paper = GetPaper();
    paper.classList.add('animated');
    let timeout;
    timeout = setTimeout(FinishAnimBlog, 1000);
}

function FinishAnimAbout() {
    var contentBodyElement = document.getElementById("content-body");
    contentBodyElement.style.display = "none";

    var bodyElement = document.getElementById("body");
    bodyElement.style.backgroundImage = "url('Pictures/paper.jpg')";

    paper.classList.remove('animated');
    location.href = "About/about.html";
}

function FinishAnimProjects() {
    var contentBodyElement = document.getElementById("content-body");
    contentBodyElement.style.display = "none";

    var bodyElement = document.getElementById("body");
    bodyElement.style.backgroundImage = "url('Pictures/paper.jpg')";

    paper.classList.remove('animated');
    location.href = "Projects/projects.html";
}

function FinishAnimBlog() {
    var contentBodyElement = document.getElementById("content-body");
    contentBodyElement.style.display = "none";

    var bodyElement = document.getElementById("body");
    bodyElement.style.backgroundImage = "url('Pictures/paper.jpg')";
    
    paper.classList.remove('animated');
    location.href = "Blog/blog.html";
}

function GetPaper() {
    return document.getElementsByClassName("paperImage")[0];
}

setTimeout(function(){
    document.body.className="preload";
},3500);