var express = require('express');
var router = express.Router();
var models = require("../models");


//  render all three river waters in Products.js react screen
router.get("/products", function (req, res, next) {
    res.redirect("");
  });


// render all sizes of selected river water in Product.js react screen
  router.get("", function (req, res, next) {
    res.redirect("");
  });


// render selected product, selected size in Size.js
  router.get("", function (req, res, next) {
    res.redirect("");
  });


module.exports = router;
