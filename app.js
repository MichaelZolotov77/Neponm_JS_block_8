// fetch по умолчанию работает как GET
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 201,
//     title: "My title",
//     body: "Text",
//     userId: 1,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     console.log(response);
//     if (response.ok) {
//       return response.json(); // преобразовывает json в объект JS
//     }
//     throw new Error("Failed to fetch");
//   })
//   .then(console.log)
//   .catch(console.error);

// CRUD - create, read,   update,  delete
// HTTP - POST,   GET,  PUT|PATCH, DELETE

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

// const gerUser = async() => {}

getUsers().then(console.log);
console.log("1");
