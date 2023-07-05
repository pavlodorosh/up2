// document.querySelector('.i-1').onkeydown = function (event) {
//     console.log('onkeydown');
//     console.log(event);
//     console.log('charCode: ' + event.charCode);
//     console.log('code: ' + event.code);
//     console.log('key: ' + event.key);
//     console.log('keyCode: '+event.keyCode);
//     if(event.key == 'CapsLock'){
//         document.querySelector('.ch-1').checked = true;
//         console.log('CapsLock ON');
//     }else{
//         document.querySelector('.ch-1').checked = false;
//         console.log('CapsLock OF');
//     }
// };
// document.querySelector('.i-1').onkeypress = function (event) {
//     console.log('onkeypress');
//     console.log(event);
//     console.log('charCode: ' + event.charCode);
//     console.log('code: ' + event.code);
//     console.log('key: ' + event.key);
//     console.log('keyCode: '+event.keyCode);
// };
// document.querySelector('.i-1').onkeyup = function (event) {
//     console.log('onkeyup');
//     console.log(event);
//     console.log('charCode: ' + event.charCode);
//     console.log('code: ' + event.code);
//     console.log('key: ' + event.key);
//     console.log('keyCode: '+event.keyCode);
// };
// document.querySelector('.i-2').onkeypress = function (event) {
//     console.log('onkeypress');
//     console.log(event);
//     console.log('charCode: ' + event.charCode);
//     console.log('code: ' + event.code);
//     console.log('key: ' + event.key);
//     console.log('keyCode: '+event.keyCode);
//     const a = {
//         q: 'w',
//         w: 'e'
//     };
//     document.querySelector('.i-2').value += a[event.key];
//     return false;
// };
// document.querySelector('.one').onclick = function(e){
//     console.log(e);
// };
// document.querySelector('.two').onclick = function(e){
//     console.log('click');
//     // console.log(e);
// };
// document.querySelector('.two').ondblclick = function(e){
//     console.log('dblclick');
//     // console.log(e);
// };
// document.querySelector('.two').oncontextmenu = function(e){
//     console.log(e);
// };

// document.querySelector('.three').onmouseenter = function(e){
//     document.querySelector('.three').style.background = 'red';
//     console.log(e);
// };
// document.querySelector('.three').onmouseleave = function(e){
//     document.querySelector('.three').style.background = 'green';
//     console.log(e);
// };
// document.querySelector('.three').onmousedown = function(e){
//     document.querySelector('.three').style.background = 'orange';
//     console.log(e);
// };
// document.querySelector('.three').onmouseup = function(e){
//     document.querySelector('.three').style.background = 'blue';
//     console.log(e);
// };
// let pV = 10;
// document.querySelector('button').onclick = function(e){
//     pV++;
//     document.querySelector('progress').value = pV;
// };


// document.querySelector('.block-1').addEventListener('touchstart', myTouch);
// document.querySelector('.block-1').addEventListener('touchend', myTouchEnd);
// document.querySelector('.block-3').addEventListener('touchmove', myTouchMove);

// function myTouch(event){
//     // console.log(event);
//     console.log('touch');
//     document.querySelector('.out-1').innerHTML = event.touches.length;
//     document.querySelector('.out-1').innerHTML += 'touch';
// }
// function myTouchEnd(event){
//     console.log(event);
//     console.log('end');
//     document.querySelector('.out-2').innerHTML += 'end';
// }
// function myTouchMove(event){
//     // console.log(event);
//     console.log('move');
//     document.querySelector('.out-2').innerHTML += 'move';
// }

let block3 = document.getElementById('block-3');

document.addEventListener('click', function(event){
    let targetElement = event.target;
    if(!block3.contains(targetElement)){
        console.log('click out block-3');
    }
});
