async function getPostsBerlin() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/berlin/posts"
  );
  const data = await response.json();

  return data; //[post1]
}

async function getPostsNewYork() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/newyork/posts"
  );
  const data = await response.json();

  return data; //[post1]
}

async function getPostsDefault() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/default/posts"
  );
  const data = await response.json();

  return data; //[post1]
}

// Исполнится только один промис, в отличие от Promose.all()
// Тот, который придет первым.
Promise.race([getPostsBerlin(), getPostsNewYork(), getPostsDefault()]).then();
