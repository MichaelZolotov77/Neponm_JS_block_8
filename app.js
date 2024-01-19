// fetch по умолчанию работает как GET
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({ id: 1, title: "My title" }),
})
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json(); // преобразовывает json в объект JS
    }
    throw new Error("Failed to fetch");
  })
  .then(console.log)
  .catch(console.error);

// CRUD - create, read,   update,  delete
// HTTP - POST,   GET,  PUT|PATCH, DELETE
