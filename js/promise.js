// fetch('https://ventapl.dahpro.com.ua/server.php?auth=key2023&action=5&y=1&action=6&year=5')
// .then( data =>{
//     console.log(data);
//     let dtatext = data.text();
//     return dtatext;
// })
// .then(date => {
//     console.log('first'+date);
// });

// fetch('https://ventapl.dahpro.com.ua/server.php?auth=key2023&action=6&year=5')
// .then( data =>{
//     console.log(data);
//     return data.text();
// })
// .then(date => {
//     console.log('second'+date);
// });


let a = new Promise((resole, reject) =>{
    fetch('https://ventapl.dahpro.com.ua/server.php?auth=key2023&action=1&y=1&action=6&year=5')
    .then( data => {
        resole(data.text());
    });
});

let b = new Promise((resole, reject) =>{
    fetch('https://ventapl.dahpro.com.ua/server.php?auth=key2023&action=7&y=1')
    .then( data => {
        resole(data.text());
    });
});

// a.then( data => {
//     console.log(data);
// });
// b.then( data => {
//     console.log(data);
// });

Promise.all([a,b]).then( value => {
    console.log(value);
    console.log(value[0]);
    console.log(value[1]);
});