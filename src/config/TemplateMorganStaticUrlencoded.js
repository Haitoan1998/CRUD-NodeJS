const express = require("express");
const path = require("path");
const morgan = require("morgan");

const configExpress = (app) => {
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  app.use(express.urlencoded());
  app.use(express.json());

  app.use(morgan("combined"));

  app.use(express.static(path.join("./src", "public")));
};

module.exports = configExpress;
