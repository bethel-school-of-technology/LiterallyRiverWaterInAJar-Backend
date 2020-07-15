var express = require('express');
var router = express.Router();
var models = require("../models");


//  render all three river waters in Products.js react screen
router.get("/products", function (req, res, next) {
    models.posts.findAll().then (posts => {
      res.json(posts)
    })
  });


// render all sizes of selected river water in Product.js react screen
  router.get("/products:id", function (req, res, next) {
    models.posts.findByPK(parseInt(req.params.id)).then (posts => {
      res.json(posts)
    })
  });


// render selected product, selected size in Size.js
  router.get("/size:id", function (req, res, next) {
    models.posts.findByPK(parseInt(req.params.id)).then (posts => {
      res.json(posts)
    })
  });


module.exports = router;
