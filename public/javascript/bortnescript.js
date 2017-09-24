
var slideIndex = 0;
showSlide();

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("image-in-container");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    setTimeout(showSlide, 3000);
}

var music = new Audio('music/wait_a_minute.mp3');
var playing = 0;
function playMusic() {
    if (playing ===0){
        music.play();
        playing=1;
    }
    else{
        music.pause();
        playing=0;
    }
}

function stopMusic() {
    music.pause();
}

