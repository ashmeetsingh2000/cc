
let slideIndex = 1;
show_testi_Slides(slideIndex);

function social_meida_plusSlides(n) {
    show_testi_Slides(slideIndex += n);
}

function social_currentSlide(n) {
    show_testi_Slides(slideIndex = n);
}

function show_testi_Slides(n) {
    let i;
    let slides = document.getElementsByClassName("social_Slides");
    let dots = document.getElementsByClassName("social_dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var timeout;
function doStuff() {
    social_meida_plusSlides(1)

    timeout = setTimeout(doStuff, 5000);
}
doStuff()