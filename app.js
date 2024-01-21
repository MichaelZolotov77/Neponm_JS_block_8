async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data; //[post1]
}

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data; //[user1]
}

async function getComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return data; //[comments1]
}

// Исполняются все промисы, и если даже один будет отклонен,
// то и все остальные тоже будут отклонены. Это применяется,
// когда нам обязательно нужны именно все данные
Promise.all([getPosts(), getUsers(), getComments()])
  .then((values) => {
    console.log(values); // [[post1], [user1], [comments1]]
    const [posts, users, comments] = values;
    console.log(posts, users, comments);
  })
  .catch(console.error);
