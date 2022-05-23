// let element_list = document.getElementById('list');
// let new_li = document.createElement('li');
// new_li.innerText = 'Banana';

// element_list.appendChild(new_li);
// let new_li2 = document.createElement('li');
// new_li2.innerText = 'Kiwi';

// element_list.appendChild(new_li2);
// let new_li3 = document.createElement('li');
// new_li3.innerText = 'Watermelon';

// element_list.appendChild(new_li3);

var asters = ['assets/images/2.png', 'assets/images/3.png', 'assets/images/4.png', 'assets/images/1.png'];


document.getElementById('next').addEventListener('click', (event) => {
    asters.push(asters.shift());
    let element_image = document.getElementById('image');
    element_image.setAttribute("src", asters[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
    asters.unshift(asters.pop());
    let element_image2 = document.getElementById('image');
    element_image2.setAttribute("src", asters[0]);

});

$(document).ready(function () {
    $("#ab-btn").on("click", function () {
        $(".landing-page").addClass("display-none");
        $(".contact-page").addClass("display-none");
        $(".about-section").removeClass("display-none");
    });
    $("#contact-btn").on("click", function () {
        $(".landing-page").addClass("display-none");
        $(".about-section").addClass("display-none");
        $(".contact-page").removeClass("display-none");
    });
    $("#home-btn").on("click", function () {
        $(".about-section").addClass("display-none");
        $(".contact-page").addClass("d-none");
        $(".landing-page").removeClass("display-none");
    });
});