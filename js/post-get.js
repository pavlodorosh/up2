console.log("post-get");


////////////////////
let xttp = new XMLHttpRequest();
xttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200 ){
        xttpfunction(this.response);
    }
};
// let urlreq = '';
// let action = 2;
// urlreq = '?a123=key2023&action='+action;
// if (action == 2) {
//     urlreq += '&num1=5&num2=1';
// }
// if (action == 5){
//     urlreq += '&num5=5&num2=1';
// }
// xttp.open('GET', 'https://ventapl.dahpro.com.ua/server.php'+urlreq);
xttp.open('GET', 'https://api.monobank.ua/bank/currency');
xttp.send();
function xttpfunction(data){
    console.log("first start function");
    console.log('get',data);
    console.log("first end function");
}
////////////////////

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

urlreq = '?a123=key2023&action='+action;
action = 5;
let bodyreq = '';
if (action == 2) {
    bodyreq = {
        auth: 'key2023',
        action: '5',
        num1: 5,
        num2: 1
    };
}
if (action == 5){
    bodyreq = {
        auth: 'key2023',
        action: '5',
        num1: 5,
        num2: 1
    };
}

fetch('https://ventapl.dahpro.com.ua/server.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyreq)
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
