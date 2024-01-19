function withPromose() {
  return new Promise((resolve, reject) => {
    reject("Hello from Promise");
  });
}

console.log("Hi there, me first");

setTimeout(() => console.log("When is my turn?"), 0);

withPromose()
  .then(console.log)
  .catch((val) => console.log(val + "!!!"));

console.log("Am I list in the queue?");

// Hi there, me first
// app.js:15 Am I list in the queue?
// Hello from Promose
// app.js:9 When is my turn?

/* 
Event Loop имеет две области - task queue и microtask queue.
Promise попадает в microtask и поэтому выполняется быстрее, чем
обычный task queue, в который попадает setTimeout()
*/
