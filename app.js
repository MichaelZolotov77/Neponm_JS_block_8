fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json(); // преобразовывает json в объект JS
    }
    throw new Error("Failed to fetch");
  })
  .then(console.log)
  .catch(console.error); // Failed to fetch

// Если ошибки в адресе нет
