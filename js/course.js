
let course_slide_index = 1;
show_testi_Slides(course_slide_index);

function social_meida_plusSlides(n) {
    show_testi_Slides(course_slide_index += n);
}

function social_currentSlide(n) {
    show_testi_Slides(course_slide_index = n);
}

function show_testi_Slides(n) {
    let i;
    let slides = document.getElementsByClassName("social_Slides");
    let dots = document.getElementsByClassName("social_dot");
    if (n > slides.length) { course_slide_index = 1 }
    if (n < 1) { course_slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[course_slide_index - 1].style.display = "block";
    dots[course_slide_index - 1].className += " active";
}


var carousalInterval = setInterval(doStuff, 6000);

function doStuff() {
    social_meida_plusSlides(1)
}

function user_click(n) {
    clearInterval(carousalInterval);
    social_meida_plusSlides(n)
    carousalInterval = setInterval(doStuff, 6000);
}









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



var caroInterval = setInterval(doStuff_two, 6000);

function doStuff_two() {
    social_meida_plusSlides_two(1)
}

function user_course_click(n) {
    clearInterval(caroInterval);
    social_meida_plusSlides_two(n)
    caroInterval = setInterval(doStuff_two, 6000);
}




var Ultimate_Guide_image = document.getElementById('Ultimate_Guide_image')
function play_thumnail_video() {

    let myVideo = document.getElementById('myVideo_course');

    myVideo.style.display = 'block';
    Ultimate_Guide_image.style.display = 'block';

    if (myVideo.paused) {
        if (myVideo.requestFullscreen) {
            myVideo.requestFullscreen();
        }
        else if (myVideo.msRequestFullscreen) {
            myVideo.msRequestFullscreen();
        }
        else if (myVideo.mozRequestFullScreen) {
            myVideo.mozRequestFullScreen();
        }
        else if (myVideo.webkitRequestFullScreen) {
            myVideo.webkitRequestFullScreen();
        }
        myVideo.play();
    }
    else {
        myVideo.pause();
    }

}