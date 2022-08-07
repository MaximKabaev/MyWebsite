// $('button').onClick(function() {
//     $(".paperImage").addClass('animated');
//     setTimeout(function() {
//       $(".paperImage").removeClass('animated');
//     }, 1500);
// });

function PlayAnimation() {
    var paper = document.getElementsByClassName("paperImage")[0];
    paper.classList.add('animated');
    let timeout;
    timeout = setTimeout(FinishAnim, 1500);
}

function FinishAnim() {
    location.href = "About/about.html";
}