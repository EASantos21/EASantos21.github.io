//Code used to set all slide shows on web pages
var index = 1;
showSlides(index, "friends-slides");

// Next/previous controls
function moveSlides(n, slideName) {
    showSlides(index += n, slideName);
}

function showSlides(n, slideName) {
    var i;
    var slides = document.getElementsByClassName(slideName);
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}