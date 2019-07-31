const body = document.querySelector('body');

const img_num = 3;

function paintImg(imgN) {
    const image = new Image;
    image.src = `images/img0${imgN}.jpg`;
    image.classList.add('bg-img');
    body.prepend(image);
};

function genRandom() {
    const num = Math.floor(Math.random() * img_num) + 1;
    return num;
};

function init() {
    const randomNumber = genRandom(); 
    paintImg(randomNumber);
};

init();