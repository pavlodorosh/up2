let i = 0;

function iteration(){
    i = i + 1;
    return i;
}


let b = iteration();
console.log(b);
console.log(iteration());
console.log(iteration());
console.log(iteration());
console.log(iteration());

i = 3;

console.log(i);
console.log(b);
console.log(i);
console.log(iteration());


function it(){
    let i = 0;
    let a = 8;
    function adf(){
        a = 10;
        return a;
    }
    return function () {
        adf();
        i = i + 1;
        return i;
    };
}
i = 5;

let c = it();
// console.log(c);
console.log(c());
console.log(c());
console.log(c());
console.log(c());

i = 10;
let d = it();
console.log(d());
console.log(d());
console.log(d());
console.log(d());
console.log(d());
console.log(d());
console.log(d());
console.log(d());
console.log(adf());