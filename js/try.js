
if(document.querySelector('.block-1')){
    document.querySelector('.block-1').innerHTML = 'block';
}


try{
    document.querySelector('.block-1').innerHTML = 'block';
}catch(err){
    console.log(err);

}
console.log("test-data");