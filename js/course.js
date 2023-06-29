var course_testimonial_box = document.getElementById('course_testimonial_box')
var course_testimonial = [
    `<img src="https://i.postimg.cc/MK04Ngs2/testimonial-image.png" alt="testimonial post" />`,
    `<img src="https://i.postimg.cc/MK04Ngs2/testimonial-image.png" alt="testimonial post" />`,
    `<img src="https://i.postimg.cc/MK04Ngs2/testimonial-image.png" alt="testimonial post" />`,
    `<img src="https://i.postimg.cc/MK04Ngs2/testimonial-image.png" alt="testimonial post" />`,
    `<img src="https://i.postimg.cc/MK04Ngs2/testimonial-image.png" alt="testimonial post" />`,
    `<img src="https://i.postimg.cc/MK04Ngs2/testimonial-image.png" alt="testimonial post" />`,
    `<img src="https://i.postimg.cc/MK04Ngs2/testimonial-image.png" alt="testimonial post" />`
]

var index = 0;

course_testimonial_carousal()
function course_testimonial_carousal() {

    let new_img_box = document.createElement("div");
    new_img_box.classList.add('course_testimonial_box_image');
    new_img_box.classList.add('right_right_active_test_box');
    new_img_box.innerHTML = course_testimonial[index];
    course_testimonial_box.appendChild(new_img_box);


    setTimeout(() => {

        let left_active_test_box = course_testimonial_box.querySelector('.left_active_test_box');
        left_active_test_box.classList.remove('left_active_test_box');

        left_active_test_box.classList.add('left_left_active_test_box');



        let current_active_test_box = course_testimonial_box.querySelector('.current_active_test_box');
        current_active_test_box.classList.remove('current_active_test_box');

        current_active_test_box.classList.add('left_active_test_box');



        let right_active_test_box = course_testimonial_box.querySelector('.right_active_test_box');
        right_active_test_box.classList.remove('right_active_test_box');

        right_active_test_box.classList.add('current_active_test_box');



        let right_right_active_test_box = course_testimonial_box.querySelector('.right_right_active_test_box');
        right_right_active_test_box.classList.remove('right_right_active_test_box');

        right_right_active_test_box.classList.add('right_active_test_box');

    }, 500);


    setTimeout(() => {
        if (index == course_testimonial.length - 1) {
            index = 0
            course_testimonial_carousal();
        }
        else {
            index++;
            course_testimonial_carousal();
        }
    }, 5000);

}