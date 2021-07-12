const promise = new Promise((resolve, reject) => {
  resolve("promise 123");
});

promise.then((result) => {
  console.log("promise excute" + result);
});
