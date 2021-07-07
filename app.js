const express = require("express");
const admin = require("./routes/admin");
const content = require("./routes/content");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("hello express");
});

app.use("/admin", admin);
app.use("/content", content);

app.listen(port, () => {
  console.log("Express listening on port", port);
});
