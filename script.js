//асихронность пример_____________________________
let a = 7;
setTimeout(() => {
  a = 99;
  console.log(a);
}, 2000);
console.log(a);

//_____________PROMISE_____Resolve_______

let b = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve((a = 99));
  }, 2000);
});

b.then(function () {
  console.log(a);
});

// 1. вождаться и выполнить ________resolve

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done"), 1000);
// });
// promise.then((data) => {
//   console.log(data);
// });
let answer = document.getElementsByTagName('p');


let url = "https://random-data-api.com/api/restaurant/random_restaurant";
const promise = fetch(url);
promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });


  const hours = {
    monday: {
      opend_at: "8-9",
      is_closed: true,
    }
  }

  const hoursKeys = Object.keys(hours)

  const arr = hoursKeys.map((hour) =>{
    if (hours[hour].is_closed === false) {
      return{
        [hour]: hours[hours]
      }
    }
  })
  console.log(arr.filter((item) => Boolean(item)))