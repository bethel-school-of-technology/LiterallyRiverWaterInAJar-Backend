var express = require('express');
var router = express.Router();
var models = require("../models");
// const inventory = require('../models/inventory');

//  render all three river waters in Products.js react screen
router.get("/products", function (req, res, next) {
    models.inventory.findAll().then (inventory => {
      res.json({inventory})
    })
  });

// render all sizes of selected river water in Product.js react screen
router.get("/products/:id", function (req, res, next) {
  let productId = parseInt(req.params.id);
  console.log(productId);
    models.inventory.findByPk(productId).then (inventory => {
      res.json({inventory})
    })
  });

// render selected product, selected size in Size.js
router.get("/size/:id", function (req, res, next) {
    models.inventory.findByPK(parseInt(req.params.id)).then (inventory => {
      res.json({inventory})
    })
  });

  module.exports = router;