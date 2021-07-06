const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("hello express");
});

app.get("/test", (request, response) => {
  response.send("hello express33");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
