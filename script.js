//асихронность пример_____________________________
// let a = 7;
// setTimeout(() => {
//   a = 99;
//   console.log(a);
// }, 2000);
// console.log(a);

// //_____________PROMISE_____Resolve_______

// let b = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve((a = 99));
//   }, 2000);
// });

// b.then(function () {
//   console.log(a);
// });

// // 1. вождаться и выполнить ________resolve

// // const promise = new Promise(function (resolve, reject) {
// //   setTimeout(() => resolve("done"), 1000);
// // });
// // promise.then((data) => {
// //   console.log(data);
// // });
// let answer = document.getElementsByTagName("p");

// let url = "https://random-data-api.com/api/restaurant/random_restaurant";
// const promise = fetch(url);
// promise
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const hours = {
//   monday: {
//     opend_at: "8-9",
//     is_closed: true,
//   },
// };

// const hoursKeys = Object.keys(hours);

// const arr = hoursKeys.map((hour) => {
//   if (hours[hour].is_closed === false) {
//     return {
//       [hour]: hours[hours],
//     };
//   }
// });
// console.log(arr.filter((item) => Boolean(item)));

// console.log('Request data...')
// setTimeout(()=>{
//   console.log('Preparing data...')
// const backendData = {
//   serever: 'aws',
//   port: 2000,
//   status: 'working'
// }
// setTimeout(() =>{
//   backendData.modified = true
// console.log('data receivd', backendData)
// }, 2000)
// },2000)

// let a = "Jon";
// let b = '37';
// let z = 'man';
// let c = ['Jon', '37', 'man'];
// let d = [];

// console.log(c);
// console.log(c.length);

// let animals = ['leon', '12', 100, "2,5"];
// console.log(animals)

// let man = ['Ivanov',' maile', 176, 93, 'Ivan'];
// console.log(man[4]);
// man[4] = "sergeq";
// console.log(man[4]);
// const b = document.createElement('span');
// b.className = "tets";
// b.style.fontWeight = '600';
// b.style.fontSize = "25px"
// document.body.append(b)
// let a = [1, 2, 3, 4];
// let t = a[0];
// a[0] = a[a.length -1];
// a[a.length -1] = t;
// console.log(a);
// console.log(b.innerText = [a]);

// let out = '';
// for(let i = 0; i < a.length; i++) {
//   out += a[i] + '_ _';

// }
// document.querySelector('.out-1').innerHTML = out;
// //_______________________________________________________
// let y = [ 1111, 11233, 44444]
// let out1 = '';
// for(let i = 0; i < y.length; i++) {
//   out1 += y[i] + '_ _';

// }
// document.querySelector('.out-2').innerHTML = out1;
//max
//

//________________cycle________________________________

//for (старт; работаем_пока_верно, как_изменяется_счетчик,)
// for (let i = 0; i < 5; i++){
//   console.log(i);

// }

// for (let i = 0; i < 5; i++){

//   console.log(i)
//   if (i == 4 ) break;
// }

let div = document.querySelectorAll("div");
console.log(div);
//div.style.backgroundColor = 'red';
// for (let i = 0; i < div.length; i++) {
//   div[i].style.background = "blue";
//   div[i].style.color = "#ffff";
//   div[i].style.marginBottom = '30px'
//   console.log(div[i]);
//   div[i].onclick = two;
// }

// function two() {
//   console.log("work!!!");
// }

// let b = document.getElementsByClassName('one');
// console.log(b);
// for(let i = 0; i < b.length; i++){
//   b[i].style.border = '5px solid black'
// }

document.querySelector("button").onclick = () => {
  let r = document.querySelectorAll('input[type="radio"]');
  console.log(r);
  for (let i = 0; i < r.length; i++) {
    if (r[i].checked) {
      console.log(r[i].value);
    }
  }
};


let out = '';
for (let i = 0; i < 10; i++){
  out += i + ' ';
}
document.querySelector('out-1').innerHTML = "out";