//Code used to set all slide shows on web pages
var index = 1;
showSlides(index, "friends-slides");
showSlides(index, "family-slides");
// Next/previous controls
function moveSlides(n, slideName) {
    showSlides(index += n, slideName);
}

function showSlides(n, slideName) {
    var i;
    //Getting the array of slides for the gallery
    var slides = document.getElementsByClassName(slideName);
    //Once the current index exceeds the length, we restart
    if (n > slides.length) { index = 1 }

    //Iterating through all slides to hide them
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //Current Index - 1 since we start at 1, we display it
    slides[index - 1].style.display = "block";
}