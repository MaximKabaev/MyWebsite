// $('button').onClick(function() {
//     $(".paperImage").addClass('animated');
//     setTimeout(function() {
//       $(".paperImage").removeClass('animated');
//     }, 1500);
// });

var paper;

function PlayAnimationAbout() {
    paper = GetPaper();
    paper.classList.add('animated');
    let timeout;
    timeout = setTimeout(FinishAnimAbout, 1500);
}

function PlayAnimationProjects() {
    paper = GetPaper();
    paper.classList.add('animated');
    let timeout;
    timeout = setTimeout(FinishAnimProjects, 1500);
}

function PlayAnimationBlog() {
    paper = GetPaper();
    paper.classList.add('animated');
    let timeout;
    timeout = setTimeout(FinishAnimBlog, 1500);
}

function FinishAnimAbout() {
    paper.classList.remove('animated');
    location.href = "About/about.html";
}

function FinishAnimProjects() {
    paper.classList.remove('animated');
    location.href = "Projects/projects.html";
}

function FinishAnimBlog() {
    paper.classList.remove('animated');
    location.href = "Blog/blog.html";
}

function GetPaper() {
    return document.getElementsByClassName("paperImage")[0];
}