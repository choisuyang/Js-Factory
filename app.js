const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyParser = require("body-parser");

class App {
  constructor() {
    this.app = express();

    // ViewEngine
    this.setViewEngine();

    // MiddleWare
    this.setMiddleWare();

    // Static
    this.setStatic();

    // Locals
    this.setLocals();

    // Routing
    this.getRouter();

    // 404 page
    this.status404();

    // ErorrHandler
    this.errorHandler();
  }

  setMiddleWare() {
    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  setViewEngine() {
    nunjucks.configure("template", {
      autoescape: true,
      express: this.app,
    });
  }

  setStatic() {
    this.app.use("/uploads", express.static("uploads"));
  }

  setLocals() {
    this.app.use((request, response, next) => {
      this.app.locals.isLogin = false;
      this.app.locals.req_path = request.path;
      next();
    });
  }

  getRouter() {
    this.app.use(require("./controllers"));
  }

  status404() {
    this.app.use((request, response, _) => {
      response.status(400).render("common/404.html");
    });
  }

  errorHandler() {
    this.app.use((request, response, _) => {
      response.status(500).render("common/500.html");
    });
  }
}

module.exports = new App().app;
