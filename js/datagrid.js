"use strict";

const dataGrid = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
    }
];

let gridView = new GridView();
// gridView.header = 'Hrader Table';
// gridView.headerClass = ['header', 'header-table'];
// gridView.tableClass = ['table'];
// gridView.attribute = {
//     'company': {
//         'label': 'Компанія',
//         'src': 'html',
//     },
//     'chef': {
//         'label': 'Директор',
//     },
//     'country': {
//         'label': 'Держава',
//         'value': (data) => {
//             if (data['country'] === 'Germany') {
//                 return data['country'] + ' map'
//             }
//             return data['country'];
//         }
//     }
// };
// gridView.data = dataGrid;
// gridView.render();

// gridView.renderData(dataGrid);

const datajson = {
    header: 'Header Table',
    headerClass:  ['header', 'header-table'],
    attribute : {
        'company': {
            'label': 'Компанія',
            'src': 'html',
        },
        'chef': {
            'label': 'Директор',
        },
        'country': {
            'label': 'Держава',
            'value': (data) => {
                if (data['country'] === 'Germany') {
                    return data['country'] + ' map'
                }
                return data['country'];
            }
        },
    },
    data: dataGrid,

};
// let gridView = new GridView();
gridView.renderDataJson(datajson);
gridView.renderDataJsonSet(datajson);


// class User {
//     constructor(title){
//         this.title -=  title;
//     }
//     set name(name){
//         if(typeof name === 'string'){
//             this._name = name;
//             return true;
//         }
//         return false;
//     }
//     get name(){
//         return this._name;
//     }
// }
// let a = new User('Vlad');
// a.name = '';
// console.log(a);
// console.log(a.name);