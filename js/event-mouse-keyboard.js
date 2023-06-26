document.querySelector('.one').onclick = function (event) {
    console.log(event);
    console.log('click');
};

document.querySelector('.two').onclick = function (event) {
    console.log('click2');
};

document.querySelector('.two').ondblclick =function (event) {
    console.log('double');
};

document.querySelector('.two').oncontextmenu = function (event) {
    console.log('right button');
};

document.querySelector('.i-1').onkeypress = function (event) {
    console.log('keypress');
};

document.querySelector('.i-1').onkeydown = function (event) {
    console.log('keydown');

};

document.querySelector('.i-1').onkeyup = function (event) {
    console.log('keyup');
};

document.querySelector('.i-2').onkeypress = function (event) {
    console.log('keypress');

};