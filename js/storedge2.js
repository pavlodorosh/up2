let count = 123;
document.querySelector('.button-primary-2').onclick = () =>{
    count++;
    localStorage.setItem('b1',count);
};