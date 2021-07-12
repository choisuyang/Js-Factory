const oneSec = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p1_text: "p1 text" });
  }, 1000);
});

const twoSec = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p2_text: "p2 text" });
  }, 3000);
});

// oneSec
//   .then((oneResult) => {
//     console.log("oneResult" + oneResult.p1_text);
//     return twoSec;
//   })
//   .then((twoResult) => {
//     console.log("twoResult" + twoResult.p2_text);
//   });

Promise.all([oneSec, twoSec]).then((result) => {
  console.log("p1 = " + result[0].p1_text);
  console.log("p2 = " + result[1].p2_text);
});
