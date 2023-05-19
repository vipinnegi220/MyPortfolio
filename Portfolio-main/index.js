// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// var interval;


// for (var i = 0; i < navMenuAnchorTags.length; i++) {
//     navMenuAnchorTags[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         console.log(this.textContent);
//         var targetSection = document.getElementById(targetSectionID);
//         console.log(targetSection);
//         //    interval = setInterval(scrollVertically, 20, targetSection);

//         interval = setInterval(function () {
//             scrollVertically(targetSection);
//         }, 20);
//     });
// }


// function scrollVertically(targetSection) {
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if (targetSectionCoordinates.top <= 0) {
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0, 50);
// }


// // console.log("Hello World");

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for(var i=1;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();

        // if(targetSectionId == home){
        //     break;
        // }

        var target = document.getElementById(targetSectionId);
        console.log(target);
        console.log(targetSectionId);
        interval = setInterval(function(){
            scrollVertically(target);
        },20);

    });
}

function scrollVertically(target){
    var targetCordinates = target.getBoundingClientRect();

    if(targetCordinates.top <= 0){
        clearInterval(interval);
    }
    window.scrollBy(0,50);

}


var skills  =  document.getElementById('skills-container');
var progressBars = document.querySelector('.skill-progress > div');

function initialise(){
    for(var bar of progressBars){
        this.style.width = 0 + '%';

    }
}

// var scroll = window.
