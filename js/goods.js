const cart = {
    "p92779": {
        "name": "Годинник CASIO G-2900F-8VER",
        "url": "#",
        "image": "./images/casio-g-2900f-8ver_images_1650372917.jpg",
        "price": 1720.00
    },
    "p93039": {
        "name": "Годинник CASIO AE-1000W-1AVEF",
        "url": "#",
        "image": "./images/casio-ae-1000w-1avef_images_1675943357.jpg",
        "price": 872.00
    },
    "p63553250": {
        "name": "Годинник Casio W-800H-1AVES",
        "url": "#",
        "image": "./images/63553250_images_9154502355.jpg",
        "price": 484.00
    },
    "p93127": {
        "name": "Годинник CASIO EF-552-1AVEF",
        "url": "#",
        "image": "./images/casio-ef-552-1avef_images_1583730891.jpg",
        "price": 2880.00
    },
    "p79946990": {
        "name": "Годинник Casio EF-527D-1AVEF",
        "url": "#",
        "image": "./images/79946990_images_11571324122.jpg",
        "price": 4238.00
    },
    "p6533206": {
        "name": "Годинник CASIO SGW-100-2BER",
        "url": "#",
        "image": "./images/6533206_images_1657626044.jpg",
        "price": 2416.00
    },
};

let out = `<div class="goods-table">`;
for( let key in cart) {
    out +=`<div class="col col-md-6 col-lg-4">`;
    out += `<h2>${cart[key]["name"]}</h2>`;
    out += `<img src="${cart[key]["image"]}"> `;
    out += `<div class="price">${cart[key]["price"]}</div>`;
    out += `<button class="add_to_cart" data-articul="${key}">Купити</button>`;
    out += `</div>`;
}
out += `</div>`;
document.querySelector('.goods').innerHTML = out;


const data = {};

document.querySelector('.goods').addEventListener('click', event =>{
    console.log(event);
    console.log(event.target);
    console.log(event.target.classList);
    console.log(event.target.classList.contains('add_to_cart'));
    if(event.target.classList.contains('add_to_cart')){
        let articul = event.target.dataset['articul'];
        console.log(articul);
        if(data[articul] !== undefined){
            data[articul]['count']++;
        }else{
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
});
