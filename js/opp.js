"use strict";

// console.log('======= object ========');

// let product = {
//     'name': 'Шоколад',
//     'type': 'black',
//     'cacao': '72%',
// };

// console.log(product);

// let obj = new Object();
// let Userobj = {
//     username: 'Ivan',
//     pass: '123456789',
// };
// console.log(Userobj);


// class User {
//     constructor(username = null, pass = null){
//         this.login = username;
//         this.pass = pass;
//         // let userMax = 'Max';
//         console.log("constructor");
//         // console.log('userMax = '+userMax);
//     }
//     validatePassword(){
//         if(this.pass.length > 6){
//             return true;
//         }
//         return false;
//     }
// }

// class Student extends User {
//     constructor(u , p, n = null){
//         super(u,p);
//         this.nickname = n;
//         // console.log( u + p + n);
//     }
//     getNickname(){
//         return this.nickname;
//     }
//     setNickName(newNickName){
//         this.nickname = newNickName;
//     }
//     validatePassword(){
//         // super.validatePassword();

//         if(this.pass.length > 8){
//             return true;
//         }
//         return false;
//     }
// }

// let nameI = 'Ivan';
// let pass = '123456789';
// let person = new User(nameI, '123456789');
// console.log(person);
// console.log(person.login);
// console.log(person.validatePassword());


// let secondStudent = new Student();
// console.log(secondStudent);

// let firstStudent = new Student('Artem', '987654321', 'Artem123');
// console.log(firstStudent);
// console.log(firstStudent.validatePassword());

// console.log(firstStudent.getNickname());
// firstStudent.setNickName('Artem987');
// console.log(firstStudent);

// #privet
// _protected
// public


// class Teacher {
//     static isAdmin = '123';

//     constructor(){
//         // this.#url = 'google.com';
//     }
//     // setOldTeacher(old){
//     //     this._old = old.trim().toLowerCase();
//     //     return this._old;
//     // }
//     set old(old){
//         console.log('OLd'+old);
//         // console.log('url'+this.#url);
//         this._old = old.trim().toLowerCase();
//     }
//     get old(){
//         return this._old;
//     }

//     static getRole(){
//         return 'teacher';
//     }

//     isTeacher(){
//         console.log('isTeacher => '+Teacher.isAdmin);
//         // console.log('isTeacher => '+this.isAdmin);
//         console.log('getRole => '+Teacher.getRole());
//         console.log(this);
//         return 'yes';
//     }
// }
// let t = new Teacher();
// console.log(t.setOldTeacher('            AAAA12'));
// t._old = '     125';
// console.log(t);
// t.old = '    6516516';
// console.log(t);
// console.log(t.old);
// t.isTeacher();
// console.log(t.isAdmin);
// t.isTeacher();
// console.log(t.isTeacher());
// console.log(Teacher.isAdmin);



// window.addEventListener("load", (event) => {

    // console.log(this);

//   const b1 = document.querySelector('.b-1');
//   const b2 = document.querySelector('.b-2');

    // document.querySelector('.b-1').onclick = function () {
    //     console.log(this);
    //     this.style.background = 'aqua';
    // };
    // document.querySelector('.b-2').onclick = () => {
    //     console.log(this);
    //     // this - > window
    // };

    // document.querySelector('.b-1').addEventListener('click', f1);
    // document.querySelector('.b-2').addEventListener('click', function(){
    //     console.log(this);
    //     this.style.background = 'green';
    // });
    // b2.addEventListener('click', f1);

    // function f1(){
    //     console.log(this);
    //     this.style.background = 'aqua';
    // }

    // b2.onclick = function(){
    //     console.log(this);
    // };

    // function chendgeColor(color,num){
    //     console.log(this);
    //     console.log(num);
    //     this.style.background = color;
    // }

    // function chendgeColorColorNum(){
    //     console.log(this);
    //     this.style.background = "#333";
    // }

    // b1.onclick = chendgeColorColorNum;
    // chendgeColorColorNum();
    // chendgeColorColorNum.call(b1);

    // b2.onclick = function(){
    //     console.log(this);
    //     chendgeColorColorNum();
    // };
window.addEventListener("load", (event) => {

    const b1 = document.querySelector('.b-1');
    const b2 = document.querySelector('.b-2');

    function chendgeColor(color,num){
        console.log(this);
        console.log(num);
        this.style.background = color;
    }

    function chendgeColorColorNum(){
        console.log(this);
        this.style.background = "#333";
    }

    b2.onclick = function(){
        chendgeColorColorNum.call(b1);
    };
    b2.onclick = function(){
        chendgeColor.call(b1, '#555', 8888);
    };
    b2.onclick = function(){
        chendgeColor.apply(b1, ['#555', 8888]);
    };
    let a = chendgeColor.bind(b2,'#555', 8888);

    // b1.onclick = a;

});

class Model {
    constructor(model){
        this.model = model;
    }
    showModel(){
        console.log(this);
    }
}
// const boat = new Model('Victory');
// const boat2 = new Model('Avers');
// boat.showModel();
// boat2.showModel();

class YellowSubmarine extends Model{
    constructor(color, model){
        console.log("==============");
        super(model);
        console.log('this =>',this);
        console.log("==============");

        this.color = color;
        console.log('this.color = >',this.color);
        console.log("==============");

        console.log('this.model = >',this.model);
        console.log("==============");

        console.log('this =>',this);
        console.log("==============");

        this.model = color;
        console.log('this.model = >',this.model);
        console.log("==============");

        console.log('this =>',this);
    }
}
let b = new YellowSubmarine('#888', 'Nip');