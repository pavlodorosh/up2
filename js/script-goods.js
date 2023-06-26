if(localStorage.getItem('cart')){
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart);
    shopCart.clearCartRenderCart('.cartClass');
    // document.querySelector('.cartClass').innerHTML = '';
    // document.querySelector('.cartClass').append(shopCart.render());

    document.querySelector('.cartClass').addEventListener('click', (event)=>{
        let target = event.target;
        console.log(target);
        if(target.classList.contains('delete')){
            shopCart.goodsDelete(target.dataset['articul']);

            shopCart.clearCartRenderCart('.cartClass');
            // document.querySelector('.cartClass').innerHTML = '';
            // document.querySelector('.cartClass').append(shopCart.render());

            //localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
        else if (target.classList.contains('minus')){
            shopCart.goodsMinus(target.dataset['articul']);
            shopCart.clearCartRenderCart('.cartClass');
            //localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        } if (target.classList.contains('plus')){
            shopCart.goodsPlus(target.dataset['articul']);
            shopCart.clearCartRenderCart('.cartClass');
            //localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }

    });
}