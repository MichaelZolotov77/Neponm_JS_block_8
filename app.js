// Это legacy способ, но в старых проектах встечается

const url = "https://jsonplaceholder.typicode.com/posts/1";

const request = new XMLHttpRequest();
console.log(request);
request.open("GET", url);
request.responseType = "json"; // xml, text
request.send(); // отправляем запрос
// ловим ответ
request.onload = function () {
  const data = request.response;
  console.log(data); // приходит уже объект, преобразованный из json
};
