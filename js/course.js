
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









let slideIndex_two = 1;
show_testi_Slides_two(slideIndex_two);

function social_meida_plusSlides_two(n) {
    show_testi_Slides_two(slideIndex_two += n);
}

function social_currentSlide_two(n) {
    show_testi_Slides_two(slideIndex_two = n);
}

function show_testi_Slides_two(n) {
    let i;
    let slides = document.getElementsByClassName("social_Two_Slides");
    let dots = document.getElementsByClassName("social_Two_dot");
    if (n > slides.length) { slideIndex_two = 1 }
    if (n < 1) { slideIndex_two = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_two - 1].style.display = "block";
    dots[slideIndex_two - 1].className += " active";
}


var timeout;
function doStuff_two() {
    social_meida_plusSlides_two(1)

    timeout = setTimeout(doStuff_two, 5000);
}
doStuff_two()