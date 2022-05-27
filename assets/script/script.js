var asters = ['assets/images/test/1.png', 'assets/images/test/2.png', 'assets/images/test/3.png', 'assets/images/test/4.png'];


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

const homeBtn = document.querySelector('#home-btn');
const aboutBtn = document.querySelector('#ab-btn');
const contactBtn = document.querySelector('#contact-btn');

const homePage = document.querySelector('.landing-page');
const aboutPage = document.querySelector('.about-section');
const contactPage = document.querySelector('.contact-page');

function hidePages() {
    aboutPage.classList.add('display-none');
    contactPage.classList.add('display-none');
};

hidePages();

homeBtn.addEventListener('click', function () {
    aboutPage.classList.add('display-none');
    contactPage.classList.add('display-none');
    homePage.classList.remove('display-none');

});

aboutBtn.addEventListener('click', function () {
    homePage.classList.add('display-none');
    contactPage.classList.add('display-none');
    aboutPage.classList.remove('display-none');
});

contactBtn.addEventListener('click', function () {
    aboutPage.classList.add('display-none');
    homePage.classList.add('display-none');
    contactPage.classList.remove('display-none');
});

var message;

function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
        return value
    } else {
        return number_value
    }
}

document.getElementById('post-message').addEventListener('click', (event) => {
    message = [];
    message.push(getNumberOrString(document.getElementById('inputz').value));
    let element_message_board = document.getElementById('message-board');
    message.forEach((message) => {
        let new_li = document.createElement('li');
        new_li.innerText = message;
        element_message_board.appendChild(new_li);
        new_li.style.textAlign = "center";
        element_message_board.classList.add('message-board-style');
        let iField = document.getElementById('inputz');
        iField.value = '';
    });
});
