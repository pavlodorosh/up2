class Cart {
    constructor(
        items,
        cartClass = "cart",
        plusClass = 'plus',
        minusClass = 'minus',
        deleteClass = 'delete',
        currency = 'UAH'
    ){
        this.items = items;
        this.cartClass = cartClass;
        this.plusClass = plusClass;
        this.minusClass = minusClass;
        this.deleteClass = deleteClass;
        this.currency = currency;
    }
    goodsPlus(sku){
        this.items[sku]['count']++;
    }
    goodsMinus(sku){
        // if(!(this.items[sku]['count'] - 1)){
        //     this.goodsDelete(sku);
        // }
        // (this.items[sku]['count'] - 1) = 0 ->  false
        // !((this.items[sku]['count'] - 1) = 0) ->  true
        // !((this.items[sku]['count'] - 1)) ->  true
        if( this.items[sku]['count'] - 1 == 0 ){
            this.goodsDelete(sku);
        }
        this.items[sku]['count']--;
    }
    goodsDelete(sku){
        delete this.items[sku];
    }
    getTotal(){
        let total = 0;
        for( let key  in this.items){
            total += this.items[key]['count'] * this.items[key]['price'];
        }
        return total;
    }
    clearCartRenderCart(classcart){
        document.querySelector(classcart).innerHTML = '';
        document.querySelector(classcart).append(this.render());
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
    render(){
        let table =  document.createElement('table');
        table.classList.add(this.cartClass);

        for ( let key in this.items ){
            let goods = this.items[key];

            const tr = document.createElement('tr');
            let td = document.createElement('td');

            //delete
            let button =document.createElement('button');
           button.classList.add(this.deleteClass);
            button.innerHTML = 'x';
            button.setAttribute('data-articul', key);

            td.append(button);
            tr.append(td);

            //image
            td = document.createElement('td');
            let img = document.createElement('img');
            img.src = goods.image;

            td.append(img);
            tr.append(td);

            //name
            td = document.createElement('td');
            let h4 = document.createElement('h4');
            h4.innerHTML = goods.name;

            td.append(h4);
            tr.append(td);

            // -
            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add(this.minusClass);
            button.innerHTML = "-";
            button.setAttribute('data-articul', key);

            td.append(button);
            tr.append(td);

            // value
            td = document.createElement('td');
            let span = document.createElement('span');
            span.innerHTML = goods.count;

            td.append(span);
            tr.append(td);

            // +
            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add(this.plusClass);
            button.innerHTML = "+";
            button.setAttribute('data-articul', key);

            td.append(button);
            tr.append(td);

            // total
            td = document.createElement('td');
            span = document.createElement('span');
            span.innerHTML = goods.count * goods.price + ' ' + this.currency;

            td.append(span);
            tr.append(td);

            table.append(tr);
        }

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.setAttribute('colspan', 7);
        td.innerHTML = this.getTotal() + ' '+ this.currency;
        tr.append(td);
        table.append(tr);

        return table;
    }
}