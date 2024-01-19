const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 300);
});

promise1
  .then((value) => {
    return value + 4;
  })
  .then((val) => val - 1)
  .then(console.dir)
  .catch(console.error);

console.log(promise1);
// Expected output: [object Promise]
