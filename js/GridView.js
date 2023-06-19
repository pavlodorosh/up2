class GridView {
    /**
     * properties
     * @param [array] _tableClass
     * @param [array] data
     * @param [array] attribute
     * @param [array] _element
     * @param [array] _header
     * @param [array] _headerClass
     */

    constructor(){
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this.attribute = [];
    }

    /**
     *
     */
    set header(header){
        if ( typeof header ==='string' && header.trim() != ''){
            this._header = header.trim();
            return true;
        }
        return false;
    }
    setHeader(header){
        if ( typeof header ==='string' && header.trim() != ''){
            this._header = header.trim();
            return true;
        }
        return false;
    }
    set headerClass(headerClass){
        if ( typeof headerClass ==='object'){
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }
    setHeaderClass(headerClass){
        if ( typeof headerClass ==='object'){
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }
    set tableClass(tableClass){
        if ( typeof tableClass ==='object'){
            this._tableClass = tableClass;
            return true;
        }
        return false;
    }
    setTableClass(tableClass){
        if ( typeof tableClass ==='object'){
            this._tableClass = tableClass;
            return true;
        }
        return false;
    }
    set element(element){
        if (document.querySelector(element)){
            this._element = element;
            return true;
        }
        return false;
    }
    setElement(element){
        if (document.querySelector(element)){
            this._element = element;
            return true;
        }
        return false;
    }

    render(){
        //show header
        if(this._header){
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                console.log(cssClass);
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }

        //show table
        const table = document.createElement('table');
        this._tableClass.forEach( cssClass => {
            table.classList.add(cssClass);
        });
        //document.querySelector(this._element).append(table);

        //crate header table
        let trHeader = document.createElement('tr');
        for ( let key in this.attribute){
            let th = document.createElement('th');
            if(this.attribute[key].lable){
                th.textContent = this.attribute[key].lable;
            }else{
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader);
        //document.querySelector(this._element).append(table);

        //draw table
        for ( let i = 0; i < this.data.length; i++ ){ // 5
            let dataArr = this.data[i];
            let tr = document.createElement('tr');
            for (let key in this.attribute){         //3
                let td = document.createElement('td');
                let value = dataArr[key];

                // console.log('=========');
                if(this.attribute[key].value){
                    // якщо attribute має value
                    // console.log('key =>', key, ' this.attribute[key].value ',this.attribute[key].value, 'dataArr', dataArr);
                    value = this.attribute[key].value(dataArr);

                }
                if(this.attribute[key].src){
                    //якщо html
                    // console.log('innerHTML =>',value,' key= > ', key ,' atribute[key] =>', this.attribute[key], ' attribute[key].src => ',this.attribute[key].src);
                    td.innerHTML = value;
                }else{
                    // якщо просто текст
                    // console.log('textContent =>',value, 'key=>', key);
                    td.textContent = value;
                }
                tr.append(td);
            }
            table.append(tr);
        }
        document.querySelector(this._element).append(table);

    }

    renderData(data){

        this.data = data;

        //show header
        if(this._header){
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                console.log(cssClass);
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }

        //show table
        const table = document.createElement('table');
        this._tableClass.forEach( cssClass => {
            table.classList.add(cssClass);
        });
        //document.querySelector(this._element).append(table);

        //crate header table
        let trHeader = document.createElement('tr');
        for ( let key in this.attribute){
            let th = document.createElement('th');
            if(this.attribute[key].lable){
                th.textContent = this.attribute[key].lable;
            }else{
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader);
        //document.querySelector(this._element).append(table);

        //draw table
        for ( let i = 0; i < this.data.length; i++ ){ // 5
            let dataArr = this.data[i];
            let tr = document.createElement('tr');
            for (let key in this.attribute){         //3
                let td = document.createElement('td');
                let value = dataArr[key];

                // console.log('=========');
                if(this.attribute[key].value){
                    // якщо attribute має value
                    // console.log('key =>', key, ' this.attribute[key].value ',this.attribute[key].value, 'dataArr', dataArr);
                    value = this.attribute[key].value(dataArr);

                }
                if(this.attribute[key].src){
                    //якщо html
                    // console.log('innerHTML =>',value,' key= > ', key ,' atribute[key] =>', this.attribute[key], ' attribute[key].src => ',this.attribute[key].src);
                    td.innerHTML = value;
                }else{
                    // якщо просто текст
                    // console.log('textContent =>',value, 'key=>', key);
                    td.textContent = value;
                }
                tr.append(td);
            }
            table.append(tr);
        }
        document.querySelector(this._element).append(table);

    }

    renderDataJson(data){
        this._header = data.header;
        this._headerClass = data.headerClass;
        this.attribute = data.attribute;
        this.data =  data.data;

        //show header
        if(this._header){
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                console.log(cssClass);
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }

        //show table
        const table = document.createElement('table');
        this._tableClass.forEach( cssClass => {
            table.classList.add(cssClass);
        });
        //document.querySelector(this._element).append(table);

        //crate header table
        let trHeader = document.createElement('tr');
        for ( let key in this.attribute){
            let th = document.createElement('th');
            if(this.attribute[key].lable){
                th.textContent = this.attribute[key].lable;
            }else{
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader);
        //document.querySelector(this._element).append(table);

        //draw table
        for ( let i = 0; i < this.data.length; i++ ){ // 5
            let dataArr = this.data[i];
            let tr = document.createElement('tr');
            for (let key in this.attribute){         //3
                let td = document.createElement('td');
                let value = dataArr[key];

                // console.log('=========');
                if(this.attribute[key].value){
                    // якщо attribute має value
                    // console.log('key =>', key, ' this.attribute[key].value ',this.attribute[key].value, 'dataArr', dataArr);
                    value = this.attribute[key].value(dataArr);

                }
                if(this.attribute[key].src){
                    //якщо html
                    // console.log('innerHTML =>',value,' key= > ', key ,' atribute[key] =>', this.attribute[key], ' attribute[key].src => ',this.attribute[key].src);
                    td.innerHTML = value;
                }else{
                    // якщо просто текст
                    // console.log('textContent =>',value, 'key=>', key);
                    td.textContent = value;
                }
                tr.append(td);
            }
            table.append(tr);
        }
        document.querySelector(this._element).append(table);
    }

    renderDataJsonSet(data){

        this.data =  data.data;
        this.attribute = data.attribute;

        this.setHeader(data.header);
        this.setHeaderClass(data.headerClass);

        //show header
        if(this._header){
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                console.log(cssClass);
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }

        //show table
        const table = document.createElement('table');
        this._tableClass.forEach( cssClass => {
            table.classList.add(cssClass);
        });
        //document.querySelector(this._element).append(table);

        //crate header table
        let trHeader = document.createElement('tr');
        for ( let key in this.attribute){
            let th = document.createElement('th');
            if(this.attribute[key].lable){
                th.textContent = this.attribute[key].lable;
            }else{
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader);
        //document.querySelector(this._element).append(table);

        //draw table
        for ( let i = 0; i < this.data.length; i++ ){ // 5
            let dataArr = this.data[i];
            let tr = document.createElement('tr');
            for (let key in this.attribute){         //3
                let td = document.createElement('td');
                let value = dataArr[key];

                // console.log('=========');
                if(this.attribute[key].value){
                    // якщо attribute має value
                    // console.log('key =>', key, ' this.attribute[key].value ',this.attribute[key].value, 'dataArr', dataArr);
                    value = this.attribute[key].value(dataArr);

                }
                if(this.attribute[key].src){
                    //якщо html
                    // console.log('innerHTML =>',value,' key= > ', key ,' atribute[key] =>', this.attribute[key], ' attribute[key].src => ',this.attribute[key].src);
                    td.innerHTML = value;
                }else{
                    // якщо просто текст
                    // console.log('textContent =>',value, 'key=>', key);
                    td.textContent = value;
                }
                tr.append(td);
            }
            table.append(tr);
        }
        document.querySelector(this._element).append(table);
    }

}