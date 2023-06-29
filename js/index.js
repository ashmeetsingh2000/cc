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

var comunity_post_arr = [
    `<img src="https://i.postimg.cc/CxhYcntc/5.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/G28bk0Nr/6.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/tgmXZRB2/7.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/852N4KQv/8.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/C5bYQGSQ/9.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/1zzm3Vr8/10.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/1RF9XQwr/11.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/8z4kGmM8/1.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/pXtPn6Bb/2.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/m2NB3ydc/3.jpg" alt="Latest wins First Image" />`,
    `<img src="https://i.postimg.cc/3xthVJQY/4.jpg" alt="Latest wins First Image" />`
]



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


var socialtimeout;
function do_social_Stuff() {
    social_plusSlides(1)

    socialtimeout = setTimeout(do_social_Stuff, 5000);
}
do_social_Stuff()

function social_stop_auto_carousal() {
    clearInterval(socialtimeout);
}
function social_continue_auto_carousal() {
    do_social_Stuff()
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


var timeout;
function doStuff() {
    plusSlides(1)

    timeout = setTimeout(doStuff, 5000);
}
doStuff()

function stop_auto_carousal() {
    clearInterval(timeout);
}
function continue_auto_carousal() {
    doStuff()
}

// ====== [ Testimonial ] =============






//  three person workings









var three_persona_image_Container = document.getElementById('three_persona_image_Container');
var last_active = document.getElementById('person_box_topic');

var last_heading_active = document.getElementById('person_box_name');

function open_image_close(field) {

    let active_field = three_persona_image_Container.querySelector('.person_box_open');
    active_field.classList.remove('person_box_open');

    field.classList.add('person_box_open');

    let heading_line = field.children[1].children[0].children[0];
    last_heading_active.classList.add('name_rotate_ninty');
    heading_line.classList.remove('name_rotate_ninty');
    last_heading_active = heading_line;


    let topic_line = field.children[1].children[0].children[1];
    last_active.style.display = 'none';
    topic_line.style.display = 'block';
    last_active = topic_line;

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




// mobile client review carousal
var mobile_review_carousal = document.getElementById('mobile_review_carousal')
var mobile_review_arr = [
    `
        <div class="client_box_image">

            <video controls id='myVideo_Parul'>
                <source src="./Parul_s_testimonial.mov" type="video/mp4">
            </video>

        </div>
        <div class="client_review_box_heading">
            Parul Sharma
        </div>
        <div class="client_review_box_client_Name" id='Parul_para'>
            Chetali's reviews are a boon for people like me who have zero knowledge
            on skincare and haircare. She connects instantaneously with her viewers
            and she is loved by so many like me
        </div>
        <div class="invisible_play_button" onclick="paly_video('myVideo_Parul')"></div>
    `,
    `
        <div class="client_box_image">

                        <video controls id='myVideo_Rashmi'>
                            <source src="./Rashmi_s_Testimonial.mov" type="video/mp4">
                        </video>

                    </div>
                    <div class="client_review_box_heading">
                        Rashmi Ranjan
                    </div>
                    <div class="client_review_box_client_Name">
                        I love all of your videos, and I am truly inspired by them. Love the
                        fact that before sharing any product information, you do a lot of
                        research and due diligence.
                    </div>
                    <div class="invisible_play_button" onclick="paly_video('myVideo_Rashmi')"></div>
    
    `,
    `
        <div class="client_box_image">

            <video controls id='myVideo_Shikha'>
                <source src="./Shikha_s_testimonial.mp4" type="video/mp4">
            </video>

        </div>
        <div class="client_review_box_heading">
            Shikha Lal
        </div>
        <div class="client_review_box_client_Name">
            Been following Chetali for a while now, and I absolutely love her
            recommendations - non-biased, very well-researched, thorough, yet they
            are simple!
        </div>
        <div class="invisible_play_button" onclick="paly_video('myVideo_Shikha')"></div>

    `,
    `
    <div class="client_box_image">

                        <video controls id='myVideo_Shilu'>
                            <source src="./Shilu_s_testimonial.mp4" type="video/mp4">
                        </video>

                    </div>
                    <div class="client_review_box_heading">
                        Shilu Khanna
                    </div>
                    <div class="client_review_box_client_Name">
                        Been watching your videos for a couple of years, and must admit that it
                        has completely changed my skincare game. Straight forward, easy to
                        understand and adopt.
                    </div>
                    <div class="invisible_play_button" onclick="paly_video('myVideo_Shilu')"></div>
    `,
    `
    <div class="client_box_image">

                        <video controls id="myVideo_Mehak">
                            <source src="./Mehak_Testimonial.mp4" type="video/mp4">
                        </video>

                    </div>
                    <div class="client_review_box_heading">
                        Mehak Chadha
                    </div>
                    <div class="client_review_box_client_Name">
                        I have been following Chetali's YT channel since 3 years now, and
                        whatever recommendations I have followed have magically worked for me
                    </div>
                    <div class="invisible_play_button" onclick="paly_video('myVideo_Mehak')"></div>
    `,
    `
    <div class="client_box_image">

                        <video controls id='myVideo_Gita'>
                            <source src="./Gita_s_testimonial.mp4" type="video/mp4">
                        </video>

                    </div>
                    <div class="client_review_box_heading">
                        Gita Choprra
                    </div>
                    <div class="client_review_box_client_Name">
                        Big shoutout to Chetali for doing an incredible job in creating such honest content!
                    </div>
                    <div class="invisible_play_button" onclick="paly_video('myVideo_Gita')"></div>

    `
]

var mobile_index = 0;

mobile_review_carousal_workings()
function mobile_review_carousal_workings() {

    let box = document.createElement("div");
    box.classList.add('client_review_mobile_box');
    box.classList.add('mobile_right_right_side');
    box.innerHTML = mobile_review_arr[index];
    mobile_review_carousal.appendChild(box);
    truncateText()

    setTimeout(() => {

        let remove_current_active = mobile_review_carousal.querySelector('.current_Active');
        remove_current_active.classList.remove('current_Active');
        remove_current_active.classList.add('mobile_left_side');

        setTimeout(() => {
            remove_current_active.remove()
        }, 1500);

        let remove_right_active = mobile_review_carousal.querySelector('.mobile_right_side');
        remove_right_active.classList.remove('mobile_right_side');
        remove_right_active.classList.add('current_Active');

        let remove_right_right_active = mobile_review_carousal.querySelector('.mobile_right_right_side');
        remove_right_right_active.classList.remove('mobile_right_right_side');
        remove_right_right_active.classList.add('mobile_right_side');

    }, 500);


    setTimeout(() => {
        if (mobile_index == mobile_review_arr.length - 1) {
            mobile_index = 0
            mobile_review_carousal_workings();
        }
        else {
            mobile_index++;
            mobile_review_carousal_workings();
        }
    }, 5000);

}

function truncateText() {

    if (document.getElementById("Parul_para")) {
        var parul_text = document.getElementById("Parul_para").innerHTML;
        var parul_text_truncated = parul_text.substring(0, 151) + "...";
        document.getElementById("Parul_para").innerHTML = parul_text_truncated;
    }
}
// mobile client review carousal



var mobile_three_person_image = document.getElementById('mobile_three_person_image')
function open_close_mobile_box(field) {

    let active = mobile_three_person_image.querySelector('.active_mobile_box');
    if (active == undefined) { }
    else {
        active.classList.remove('active_mobile_box');
    }

    field.classList.add('active_mobile_box');

}