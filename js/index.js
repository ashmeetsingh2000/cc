// Hamburger Workings
var hamburger_sidebar = document.getElementById('hamburger_sidebar')
function open_close_hamburger() {
    if (hamburger_sidebar.classList.contains('hamburger_open')) {
        hamburger_sidebar.classList.remove('hamburger_open')
    }
    else {
        hamburger_sidebar.classList.add('hamburger_open')
    }
}
// Hamburger Workings










// ====== [ Social Media Community] =============
let socialIndex = 1;
show_social_Slides(socialIndex);

function social_plusSlides(n) {
    show_social_Slides(socialIndex += n);
}
function social_currentSlide(n) {
    show_social_Slides(socialIndex = n);
}

function show_social_Slides(n) {
    let i;
    let slides = document.getElementsByClassName("social_Slides");
    let dots = document.getElementsByClassName("social_dot");
    if (n > slides.length) { socialIndex = 1 }
    if (n < 1) { socialIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[socialIndex - 1].style.display = "block";
    dots[socialIndex - 1].className += " active";
}


var socialInterval = setInterval(do_social_Stuff, 6000);

function do_social_Stuff() {
    social_plusSlides(1)
}

function social_user_click(n) {
    clearInterval(socialInterval);
    social_plusSlides(n)
    socialInterval = setInterval(do_social_Stuff, 6000);
}

// ====== [ Social Media Community] =============








// ====== [ Testimonial ] =============
let slideIndex = 1;
show_testi_Slides(slideIndex);

function plusSlides(n) {
    show_testi_Slides(slideIndex += n);
}

function currentSlide(n) {
    show_testi_Slides(slideIndex = n);
}

function show_testi_Slides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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





var carousalInterval = setInterval(doStuff, 6000);

function doStuff() {
    plusSlides(1)
}

function user_click(n) {
    clearInterval(carousalInterval);
    plusSlides(n)
    carousalInterval = setInterval(doStuff, 6000);
}

function stop_auto_carousal() { }
function continue_auto_carousal() { }

// ====== [ Testimonial ] =============






//  three person workings
var three_persona_image_Container = document.getElementById('three_persona_image_Container');

var last_heading_active = document.getElementById('person_box_name');

function open_image_close(field) {

    let active_field = three_persona_image_Container.querySelector('.person_box_open');
    active_field.classList.remove('person_box_open');

    field.classList.add('person_box_open');

    let heading_line = field.children[1].children[0].children[0];
    last_heading_active.classList.add('name_rotate_ninty');
    heading_line.classList.remove('name_rotate_ninty');
    last_heading_active = heading_line;

}

//  three person workings



// video play on full screen
function paly_video(what) {
    let myVideo = document.getElementById(what);

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
// video play on full screen









var mobile_three_person_image = document.getElementById('mobile_three_person_image')
function open_close_mobile_box(field) {

    let active = mobile_three_person_image.querySelector('.active_mobile_box');
    if (active == undefined) { }
    else {
        active.classList.remove('active_mobile_box');
    }

    field.classList.add('active_mobile_box');

}


















let mobile_socialIndex = 1;
show_mobile_social_Slides(mobile_socialIndex);

function mobile_social_plusSlides(n) {
    show_mobile_social_Slides(mobile_socialIndex += n);
}

function mobile_social_currentSlide(n) {
    show_mobile_social_Slides(mobile_socialIndex = n);
}

function show_mobile_social_Slides(n) {
    let i;
    let slides = document.getElementsByClassName("mobile_social_Slides");
    let dots = document.getElementsByClassName("mobile_social_dot");
    if (n > slides.length) { mobile_socialIndex = 1 }
    if (n < 1) { mobile_socialIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[mobile_socialIndex - 1].style.display = "block";
    dots[mobile_socialIndex - 1].className += " active";
}


// var socialtimeout;
function do_mobile_social_Stuff() {
    mobile_social_plusSlides(1)
}

var mobile_socialInterval = setInterval(do_mobile_social_Stuff, 6000);

function mobile_social_user_click(n) {

    clearInterval(mobile_socialInterval);
    mobile_social_plusSlides(n)

    mobile_socialInterval = setInterval(do_mobile_social_Stuff, 6000);

}





















let mobile_review_Index = 1;
show_mobile_review_Slides(mobile_review_Index);

function mobile_review_plusSlides(n) {
    show_mobile_review_Slides(mobile_review_Index += n);
}

function mobile_review_currentSlide(n) {
    show_mobile_review_Slides(mobile_review_Index = n);
}

function show_mobile_review_Slides(n) {
    let i;
    let slides = document.getElementsByClassName("mobile_review_Slides");
    let dots = document.getElementsByClassName("mobile_review_dot");
    if (n > slides.length) { mobile_review_Index = 1 }
    if (n < 1) { mobile_review_Index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[mobile_review_Index - 1].style.display = "block";
    dots[mobile_review_Index - 1].className += " active";
}


// var mobile_review_Interval = setInterval(do_mobile_review_Stuff, 6000);

function do_mobile_review_Stuff() {
    mobile_review_plusSlides(1)
}


function mobile_review_user_click() {

    // clearInterval(mobile_review_Interval);
    mobile_review_plusSlides(1)

    // mobile_review_Interval = setInterval(do_mobile_review_Stuff, 6000);

}


















function Redirect(which) {

    let current_url;

    if (window.location.href.includes('index')) {
        current_url = window.location.href.slice(0, -11);
    }
    else {
        current_url = window.location.href.slice(0, -1);

    }

    if (which == 'course_1') {
        location.replace(`${current_url}/course.html`);
    }
    if (which == 'course_2') {
        location.replace(`${current_url}/`);
    }
    if (which == 'course_3') {
        location.replace(`${current_url}/`);
    }

}