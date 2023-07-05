console.log("post-get");

let xttp = new XMLHttpRequest();
let a = 0;
xttp.onreadystatechange = function () {
    console.log(this);
    if(this.readyState == 4 && this.status == 200 ){
        xttpfunction(this.responseText);
    }
};

xttp.open('GET', 'https://ventapl.dahpro.com.ua/server.php?auth=key2023&action=5&num1=5&num2=1', true);
xttp.send();

function xttpfunction(data){
    console.log('get',data);
}

let xttp2 = new XMLHttpRequest();
xttp2.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200){
        xttpfunction2(this.responseText);
    }
};

xttp2.open('POST', 'https://ventapl.dahpro.com.ua/server.php', true);
xttp2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
let params = 'auth=key2023&action=5&num1=5&num2=1';
xttp2.send(params);

function xttpfunction2(data){
    console.log('post',data);
}

fetch('https://ventapl.dahpro.com.ua/server.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        auth: 'key2023',
        action: '5',
        num1: 5,
        num2: 1
    })
})
.then(response => response.text())
.then(response => {
    console.log(response);
});


fetch('https://ventapl.dahpro.com.ua/server.php?auth=key2023&action=5&num1=5&num2=1')
.then(date => date.text())
.then( data =>{
    console.log(data);
    return data;
})
.then(date => {
    console.log(date);
});
