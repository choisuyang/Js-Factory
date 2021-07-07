const express = require("express");
const router = express.Router();
function testMiddleware(request, response, next) {
  console.log("first middleware");
  next();
}
function testMiddleware2(request, response, next) {
  console.log("second middleware");
  next();
}
router.get("/", testMiddleware, testMiddleware2, (request, response) => {
  response.send("admin 이후 url");
});

router.get("/products", (request, response) => {
  response.render("admin/products.html", {
    message: "hello message333",
  });
});

router.get("/products/write", (request, response) => {
  response.render("admin/write.html");
});

router.post("/products/write", (request, response) => {
  response.send(request.body.name);
});

module.exports = router;
