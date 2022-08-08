// setTimeout(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json)
//     json.forEach((item) => array.push(item.email));
//   })
//   .catch((err) => console.log(err));

// }, 5000);

// ---------------------------------------------------------------------------------------

// let i = 0;
// setInterval(() => {
//   console.log(i);
//    let payload = {
//     title: "Blog Title",
//     body: "lorem ipsum",
//     userId:1
//   }
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify(payload),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err));

//   i++;
// }, 2000);

// ---------------------------------------------------------------------------------------

// let array = [];
// fetch('todos/luigis.json').then((response) => {
//   console.log('resolved', response);
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch((err) => {
//   console.log('rejected', err);
// })

// async kodun durup kalmamasını, devam etmesini sağlar (non-blocking)
// await ile kodun devam etmeyip işlemi bitirmesi beklenir
const getTodos = async (param) => {
  const response = await fetch(param);

  if (response.status !== 200) {
    throw new Error("Cannot Fetch Datam, Burası Çalıştı");
  }

  const data = await response.json();
  return data;
};

console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);
param1 = "todos/luigis.json";
getTodos(param1).then((data) => console.log("Resolved", data)); // asenkron çalıştığı için kod devam eder. 7 basıldıktan sonra bile ancak zaten fonksiyon biter ve çalışır
console.log(4);
console.log(5);
console.log(6);
console.log(7);

param1 = "todos/yoshi.json";
getTodos(param1)
  .then((data) => console.log("Resolved", data))
  .catch((err) => {
    console.log("Rejected", err.name);
    console.log("Rejected", err.message);
  });
