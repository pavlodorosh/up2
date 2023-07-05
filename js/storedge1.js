window.addEventListener('storage', function(e){
    console.log('storage');
    this.document.querySelector('.out').textContent = localStorage.getItem('b1');
});