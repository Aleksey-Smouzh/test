//асихронность пример_____________________________
let a = 7;
setTimeout (() => {
    a = 99;
    console.log(a)
}, 2000);
console.log(a);


//_____________PROMISE_____Resolve_______

let b = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(a = 99);
    }, 2000);
});

b.then(function (){
    console.log(a);
});

// 1. вождаться и выполнить ________resolve