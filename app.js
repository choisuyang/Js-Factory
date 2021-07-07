const express = require("express");
const admin = require("./routes/admin");
const content = require("./routes/content");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

// middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));

app.use((request, response, next) => {
  app.locals.isLogin = false;
  next();
});

app.get("/", (request, response) => {
  response.send("hello express");
});

app.use("/admin", admin);
app.use("/content", content);

app.use((request, response, _) => {
  response.status(400).render("common/404.html");
});

app.use((request, response, _) => {
  response.status(500).render("common/500.html");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
